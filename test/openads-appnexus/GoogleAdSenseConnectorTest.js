import {expect} from 'chai'
import sinon from 'sinon'
import GoogleAdSenseConnector from '../../openads-google-adsense/GoogleAdSenseConnector'

describe('GoogleAdSenseConnector', function () {
  const createLoggerMock = () => ({
    error: () => null,
    debug: () => null
  })
  it('Should write a test', () => {
    expect(false, 'a test should be written').to.be.true
  })
})

