let { graphql } = require("@octokit/graphql");

async function getStatusData(options) {
    graphql = graphql.defaults({
        headers: {
          authorization: `token ${options.token}`,
        },
      });

      const query = `{
        repository(owner: "${options.owner}", name:"${options.repo}"){
          url
          pullRequest(number: ${options.pr}){
              number
              url
              mergeable
              reviewDecision
              author {
                login
                url
              }
              commits(last: 1){
                nodes{
                  commit{
                    commitUrl
                    oid
                    status {
                      state
                      contexts {
                        state
                        targetUrl
                        description
                        context
                      }
                    }
                  }
                }
              }
          }
        }
      }`;
      
      try {
        const result = await graphql(query);
        return JSON.stringify(result, null, 2)
      } catch (error) {
        console.log("Request failed:", error.request);
        throw new Error(400);
      }
}

async function isMergeable(options) {
     let value = await getStatusData(options)
     let mergeablilityStatus = JSON.parse(value).repository.pullRequest.mergeable
     if(mergeablilityStatus == "MERGEABLE") {
        return true
    } else {
        return false
    }
}

async function isPendingReview(options) {
  let value = await getStatusData(options)
  let reviewDecision = JSON.parse(value).repository.pullRequest.reviewDecision
  if(reviewDecision == "APPROVED") {
     return false
 } else {
     return true
 }
}

module.exports.getStatusData = getStatusData;
module.exports.isMergeable = isMergeable;
module.exports.isPendingReview = isPendingReview;