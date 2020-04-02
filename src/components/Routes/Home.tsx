import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'types'
import { Action, Actions } from 'actions'
import { Dispatch } from 'redux'
import Button from 'components/Button'

import './Home.less'

const Home: React.StatelessComponent = () => {
	const utm = useSelector<State, State['url']>(s => s.url)
	const dispatch: Dispatch<Action> = useDispatch()

	const params = utm.params
		.filter(param => param.value)
		.map(param => `${param.name}=${param.value}`)
		.join('&')

	useEffect(() => {
		const urlparams = new URLSearchParams(window.location.search)
		const baseUrl = urlparams.get('baseUrl')
		if (baseUrl) {
			dispatch(Actions.updateUrl(baseUrl))
			urlparams.delete('baseUrl')
		}

		urlparams.forEach((value, key) => {
			const param = utm.params.find(p => p.name == key)
			if (param) {
				dispatch(Actions.updateParam(value, param.id))
			}
			else
				dispatch(Actions.addParam(value, key))
		})
	}, [])

	return (
		<div id="home">
			<h1>UTM URL Generator</h1>
			<pre>{utm.baseUrl || 'https://www.example.com'}{params.length > 0 ? `?${params}` : ''}</pre>
			<h2><label htmlFor="baseUrl">BaseUrl</label></h2>
			<input id="baseUrl" type="text" value={utm.baseUrl} onChange={e => dispatch(Actions.updateUrl(e.target.value))} placeholder="https://www.example.com" />
			<hr />
			<table>
				<tbody>
					{utm.params.map(param => (
						<tr key={param.id}>
							<td>{param.id > 4
								? <input type="text" placeholder="utm_parameter" value={param.name} onChange={e => dispatch(Actions.updateParamName(e.target.value, param.id))}  />
								: <label htmlFor={param.name}>{param.name}</label>
							}</td>
							<td>
								<input
									id={param.name}
									type="text"
									value={param.value}
									onChange={e => dispatch(Actions.updateParam(e.target.value, param.id))}
									placeholder={param.example}
								/>
							</td>
							<td hidden={param.id <= 4}><Button onClick={() => dispatch(Actions.removeParam(param.id)) }><strong>-</strong></Button></td>
						</tr>
					))}
					<tr>
						<td><Button onClick={() => dispatch(Actions.addParam('', '')) }><strong>+</strong></Button></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<h2>Share Setup</h2>
			<pre>{window.location.origin}{window.location.pathname}?baseUrl={utm.baseUrl}&{params}</pre>
		</div>
	)
}

export default Home
