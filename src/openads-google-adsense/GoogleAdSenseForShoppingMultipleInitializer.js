import Container from './Container'

export default class GoogleAdSenseForShoppingMultipleInitializer {
  static init ({config}) {
    const container = new Container({config})
    return container.getInstance({key: 'GoogleAdSenseForShoppingMultipleConnector'})
  }
}
