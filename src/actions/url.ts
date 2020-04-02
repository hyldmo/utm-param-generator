import { makeActionCreator } from 'utils'
import { Url } from 'url'
import { LinkParam } from 'types'

export default {
	updateUrl: makeActionCreator<'UPDATE_URL', string>('UPDATE_URL'),

	addParam: makeActionCreator<'ADD_PARAM', LinkParam['value'], LinkParam['name']>('ADD_PARAM'),
	removeParam: makeActionCreator<'REMOVE_PARAM', LinkParam['id']>('REMOVE_PARAM'),

	updateParamName: makeActionCreator<'UPDATE_PARAM_NAME', string, LinkParam['id']>('UPDATE_PARAM_NAME'),
	updateParam: makeActionCreator<'UPDATE_PARAM', string, LinkParam['id']>('UPDATE_PARAM'),

	saveLoaded: makeActionCreator<'SAVE_LOADED', Url>('SAVE_LOADED')
}
