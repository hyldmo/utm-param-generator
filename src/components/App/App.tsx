import { Home, NotFound } from 'components/Routes'
import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router'
import Footer from './Footer'

import './App.less'

const App: React.StatelessComponent = () => (
	<>
		<main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={NotFound}/>
			</Switch>
		</main>
		<Footer />
	</>
)

export default hot(module)(App)
