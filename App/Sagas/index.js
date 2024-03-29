import { takeLatest, all } from 'redux-saga/effects'
import { StartupTypes } from '../Stores/Startup/Actions'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),

  ])
}
