import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = () => (
    <Router>
        <div>
            <AuthButton />
            <ul>
                <li>
                    <Link to="/public">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>
            <Route path="/public" component={Public} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/protected" component={Protected} />
        </div>
    </Router>
);

const   fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const AuthButton = withRouter(
    ({ history }) =>
        fakeAuth.isAuthenticated ? (
            <p>
                Welcome!{" "}
                <button
                    onClick={() => {
                        fakeAuth.signout(() => history.push("/"));
                    }}
                >
                    Sign out
                </button>
            </p>
        ) : (
            <p>You are not logged in.</p>
        )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

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
        const self = this;
        const data = new FormData(event.target);
        $.ajax({
            type: 'POST',
            url: setData,
            data: {
                username: data.get('username'),
                password: data.get('password')
            },
            success: function(data){
                if(data) {
                    fakeAuth.authenticate(() => {
                        self.setState({redirectToReferrer: true});
                    });
                }
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

export default AuthExample;