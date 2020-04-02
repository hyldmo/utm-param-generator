import { Action, MetaAction } from 'actions'
import { LinkParam, LinkUrl } from 'types'

let id = 0

const makeParam = (name = '', value = '', example: string | undefined = undefined): LinkParam => ({ id: id++, name, value, example })

const initialState: Readonly<LinkUrl> = {
	baseUrl: '',
	params: [
		makeParam('utm_source', '', 'fb'),
		makeParam('utm_medium', '', 'social-paid'),
		makeParam('utm_campaign', '', 'retargeting_wide'),
		makeParam('utm_content', '', 'white_bg'),
		makeParam('utm_term', '', 'facebook_mobile_feed')
	]
}

function param (state: Readonly<LinkParam>, action: MetaAction): LinkParam {
	if (action.meta !== state.id)
		return state

	switch (action.type) {
		case 'UPDATE_PARAM_NAME':
			return {
				...state,
				name: action.payload
			}

		case 'UPDATE_PARAM':
			return {
				...state,
				value: action.payload
			}
		default:
			return state
	}
}

export default function (state: Readonly<LinkUrl> = initialState, action: Action): LinkUrl {
	switch (action.type) {
		case 'UPDATE_URL':
			return {
				...state,
				baseUrl: action.payload
			}

		case 'UPDATE_PARAM':
		case 'UPDATE_PARAM_NAME':
			return {
				...state,
				params: state.params.map(p => param(p, action))
			}

		case 'ADD_PARAM':
			return {
				...state,
				params: [...state.params, makeParam(action.meta, action.payload)]
			}

		case 'REMOVE_PARAM':
			return {
				...state,
				params: state.params.filter(p => p.id != action.payload)
			}

		default:
			return state
	}
}
