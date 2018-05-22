import LogLevel from 'loglevel'
import LogProvider from './LogProvider'
import AppNexusConnector from './AppNexusConnector'
import AstClientImpl from './AstClientImpl'
import ApnTagWrapper from './ApnTagWrapper'
import PullingAdRepository from './repository/PullingAdRepository'
import GoogleAdSenseForSearchConnector from './GoogleAdSenseForSearchConnector'

export default class Container {
  constructor ({config} = {}) {
    this._config = config
    this._instances = new Map()
  }

  getInstance ({key}) {
    if (undefined === this._instances.get(key)) {
      try {
        this._instances.set(key, this['_build' + key]())
      } catch (e) {
        throw new Error(`Error creating instance: ${key}: ${e.message}`)
      }
    }
    return this._instances.get(key)
  }

  _buildGoogleAdSenseForSearchConnector () {
    return new GoogleAdSenseForSearchConnector({
      loggerProvider: this.getInstance({key: 'LogProviderAdSenseForSearch'}),
      logger: this.getInstance({key: 'LoggerAdSenseForSearc'}),
      astClient: this.getInstance({key: 'AstClient'}),
      adRepository: this.getInstance({key: 'AdRepository'})
    })
  }

  _buildLoggerAdSenseForSearch () {
    return this.getInstance({key: 'LogProviderAdSenseForSearch'}).logger()
  }

  _buildLoggerAdSenseForShoppingMultiple () {
    return this.getInstance({key: 'LogProviderAdSenseForShoppingMultiple'}).logger()
  }

  _buildLogProviderAdSenseForSearch () {
    return new LogProvider({
      logLevel: LogLevel,
      loggerName: this._config.loggerNameAdSenseForSearch,
      defaultLogLevel: this._config.defaultLogLevel
    })
  }

  _buildLogProviderAdSenseForShoppingMultiple () {
    return new LogProvider({
      logLevel: LogLevel,
      loggerName: this._config.loggerNameAdSenseForShoppingMultiple,
      defaultLogLevel: this._config.defaultLogLevel
    })
  }
}
