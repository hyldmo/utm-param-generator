import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'
import url from './url'
import version from './version'

const reducers = (history: History) => combineReducers({
	router: connectRouter(history),
	url,
	version
})

export default reducers
