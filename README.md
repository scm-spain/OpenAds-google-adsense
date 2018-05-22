# OpenAds-appnexus
[![Build Status](https://travis-ci.org/scm-spain/OpenAds-google-adsense.svg?branch=master)](https://travis-ci.org/scm-spain/OpenAds-google-adsense)

[OpenAds](https://github.com/scm-spain/OpenAds) AppNexus seller tag module for handle ads.

OpenAds now support sources as modules by configuration so you can include whatever module available you want.
To build your own module take a look at the section ```Build your own module```

# Installation
Google AdSense module is available as the ```@schibstedspain/openads-google-adsense``` package on [npm](https://www.npmjs.com/)

To install the stable version:
```
npm install --save @schibstedspain/openads-google-adsense
```

# Usage

To use it with OpenAds first you must install and import OpenAds as explained in the [readme](https://github.com/scm-spain/OpenAds)
After that you must init the AppNexusConnector with the configuration member account
Now you are able to put the instance as a source available in OpenAds configuration

```ecmascript 6
import OpenAds from '@schibstedspain/openads'
import {GoogleAdSenseForShoppingMultipleConnector, GoogleAdSenseForSearchConnector} from '@schibstedspain/openads-google-adsense'

const googleAdsenseForSearchConnector = GoogleAdSenseForSearch.init({
  config: {
    
  }
})
const googleAdSenseForShoppingMultipleConnector = GoogleAdSenseForShoppingMultiple.init({
  config: {
    
  }
})

const openAds = OpenAds.init({config:{
  Sources: {
    GoogleAdSenseForSearch: googleAdsenseForSearchConnector,
    GoogleAdSenseForShoppingMultiple: googleAdSenseForShoppingMultipleConnector
  }
}})
```

This connector implements these [Connector API](https://github.com/scm-spain/OpenAds-ConnectorAPI) interfaces:
* AdViewable
* Logger

# Build your own module
All modules to work fine with OpenAds must **implement** at least one interface of type AdLoadable or AdViewable
The idea is that your module implements only the interfaces that support, for example AppNexus supports both

# License
OpenAds is [MIT licensed](./LICENSE).
