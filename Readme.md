# Hawk-fetch

This npm package fetches the status checks for a particular repository and a given pull request number

# Usage

```
npm save -i hawk-fetch
```

# Options

You need to provide options:

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