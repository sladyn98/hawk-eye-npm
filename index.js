const { graphql } = require("@octokit/graphql");

async function getStatusData(options, callback) {
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
        callback(result)
      } catch (error) {
        console.log("Request failed:", error.request);

      }
}

module.exports.getStatusData = getStatusData;