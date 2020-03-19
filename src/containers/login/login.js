import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		
		this.login = this.login.bind(this);
	}
	
	login() {
		this.props.history.push('/');
	}
	
	render() {
		return(
			<>
				<h1>Login by clicking the button below</h1>
				<Link to='/'>Login</Link>
			</>
		);
	}
}