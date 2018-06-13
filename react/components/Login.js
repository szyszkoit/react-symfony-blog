// ./components/Home.jsx
import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(event) {
        event.preventDefault();
        console.log(this.props);
        const data = new FormData(event.target);
        $.ajax({
            url: setData,
            data: {
                username: data.get('username'),
                password: data.get('password')
            },
            success: function(){
                alert('success');
            },
            error: function(){
                alert('failure');
            }
        });

    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <form onSubmit={this.handleLogin}>
                    <label htmlFor="username">Enter username</label>
                    <input id="username" name="username" type="text" />
                    <label htmlFor="password">Enter your password</label>
                    <input id="password" name="password" type="password" />
                    <button type="submit">Log in</button>
                </form>
            </div>
        );
    }
}

 export default Login