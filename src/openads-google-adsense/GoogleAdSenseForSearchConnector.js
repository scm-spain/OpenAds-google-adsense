/**
 * @class
 * @implements {AdViewable}
 * @implements {Logger}
 */
export default class GoogleAdSenseForSearchConnector {
  constructor ({logger, loggerProvider}) {
    this._logger = logger
    this._loggerProvider = loggerProvider
  }

  display ({id}) {
    return Promise.resolve()
      .then(null)
  }

  refresh ({id, segmentation}) {
    return Promise.resolve()
      .then(null)
  }

  enableDebug ({debug}) {
    this._loggerProvider.debugMode({debug})
  }
}
