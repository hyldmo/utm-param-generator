import UrlActions from './url'
import VersionActions from './version'
import { GetMetaActions } from 'utils'

export const Actions = {
	...UrlActions,
	...VersionActions
}

export type ActionCreator = typeof Actions[keyof typeof Actions]
export type Action = ReturnType<ActionCreator>
export type MetaAction = GetMetaActions<Action>
export type ActionTypes = Action['type']
