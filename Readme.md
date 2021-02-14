# Hawk-eye 

This npm package fetches the status checks for a particular repository and a given pull request number

# Usage

```
npm save -i hawk-eye
```

# Options

You need to provide options:

```
const hawk = require('hawk-eye')
    hawk.fetchData({
      token :  '',
      owner  : 'jenkinsci',
      repo   : 'custom-distribution-service'
    }).then(res => console.log(res))

```