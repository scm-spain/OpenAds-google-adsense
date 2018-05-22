import Container from './Container'

export default class GoogleAdSenseForSearchInitializer {
  static init ({config}) {
    const container = new Container({config})
    return container.getInstance({key: 'GoogleAdSenseForSearchConnector'})
  }
}
