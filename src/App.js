import React, { Component } from 'react';
import {HashRouter as Router, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import adroady from './reducers'

const store = createStore(
	adroady,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);


class App extends Component {
	 constructor(props) {
		super(props);
		this.store = store.getState()
	}

	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Route  exact path="/" component={Login} />
						<Route  exact path="/dashboard" component={Dashboard} />
					</div>
				</Router>
			</Provider>
		)
	}
}

export default App;
