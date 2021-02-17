# Hawk-fetch

This npm package fetches the status checks for a particular repository and a given pull request number

# Usage

```
npm save -i hawk-fetch
```

# Options

You need to provide options:

a) hawk.getStatusData : Fetches all data for a given pull request

#### Usage

```
const hawk = require('hawk-fetch')
   (async () => {
    console.log(await hawk.getStatusData({
      token  : '',
      owner  : 'jenkinsci',
      repo   : 'custom-distribution-service',
      pr     : '162'
    }));
})();
```

b) hawk.isMergeable : Checks if a PR has any merge conflicts and whether it can be merged

#### Usage

```
hawk.isMergeable({
      token  : '',
      owner  : 'jenkinsci',
      repo   : 'custom-distribution-service',
      pr     : '162'
  }).then(res => console.log(res))
```


b) hawk.isPendingReview : Checks if a PR has pending reviews or is approved

#### Usage

```
hawk.isPendingReview({
      token  : '',
      owner  : 'jenkinsci',
      repo   : 'custom-distribution-service',
      pr     : '162'
  }).then(res => console.log(res))
```