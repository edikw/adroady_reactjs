import React, { Component } from 'react';
import '../App.css'
import { connect } from 'react-redux';
import { getDataLogin } from '../actions/getData';

class Login extends Component {
	constructor () {
		super()
		this.state = {
			username: '',
			data_login: [],
			alert_1: false,
			alert_2: false
		}
	}

	handleInput (value) {
		this.setState({[value.target.name]: value.target.value})
	}


	login() {
		if(this.state.username === '') {
			this.setState({
				alert_2: true,
				alert_1: false
			});
		}else {
			for (var i = 0; i < this.state.data_login.length; i++) {
				if( this.state.data_login[i].name === this.state.username) {
					this.props.history.push('/dashboard')
				}else {
					this.setState({
						alert_1: true,
						alert_2: false
					});
				}
			}
		}

	}
	enterClick(event) {
		if(event.charCode === 13) {
			this.login()
		}
	}
	componentDidMount () {
		this.props.getDataLogin().then( res => {
			this.setState({data_login: res.data.data})
		});
	}

	render () {
		return (
			<div>
				<div className="col-12 col-md-6 col-lg-4 mx-auto p-5 shadow-lg login-wrapper">
					<div className="text-center mb-5">
						<h4 className="m-0 font-weight-bold">Login</h4>
					</div>
					{this.state.alert_1 === true ?
						<div className="alert alert-warning alert-dismissible fade show" role="alert">
							<strong>Username is wrong!</strong> Please try again.
							<button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						</div>
						:
						null
					}
					{this.state.alert_2 === true ?
						<div className="alert alert-warning alert-dismissible fade show" role="alert">
							<strong>Username not be empty!</strong> Please try again.
							<button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						</div>
						: null
					}
					<div className="mb-5">
						<input className="form-control" placeholder="Username" name="username" onChange={this.handleInput.bind(this)} autoComplete="off" onKeyPress={(event) =>this.enterClick(event)}/>
					</div>
					<div className="text-right">
						<button className="col-3 btn btn-outline-info" onClick={() => this.login()}>Login</button>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(null, {getDataLogin})(Login);