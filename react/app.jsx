import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import {
    Grid,
    Button,
    Row,
    Col,
    Navbar,
    Nav,
    NavItem,
    MenuItem,
    NavDropdown
} from 'react-bootstrap';
import Login from './components/Login';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import PostDetails from "./components/Home/PostDetails";
const posts = [
    {
        id: 1,
        name: 'Honda Accord Crosstour',
        year: '2010',
        model: 'Accord Crosstour',
        make: 'Honda',
        media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
        price: '$16,811'

    },
    {
        id: 2,
        name: 'Honda Accord Crosstour 2',
        year: '2010',
        model: 'Accord Crosstour',
        make: 'Honda',
        media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
        price: '$16,811'

    },
    {
        id: 3,
        name: 'Honda Accord Crosstour 2',
        year: '2010',
        model: 'Accord Crosstour',
        make: 'Honda',
        media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
        price: '$16,811'

    },
    {
        id: 4,
        name: 'Honda Accord Crosstour 2',
        year: '2010',
        model: 'Accord Crosstour',
        make: 'Honda',
        media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
        price: '$16,811'

    },
    {
        id: 5,
        name: 'Honda Accord Crosstour 2',
        year: '2010',
        model: 'Accord Crosstour',
        make: 'Honda',
        media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
        price: '$16,811'

    },
    {
        id: 6,
        name: 'Honda Accord Crosstour 2',
        year: '2010',
        model: 'Accord Crosstour',
        make: 'Honda',
        media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
        price: '$16,811'

    }
];
class App extends React.Component {
    constructor(){
        super();
        this.state = { }
        };

    render(){
        const MyPostPage = (props) => {
            return (
                <PostDetails
                    posts={posts}
                    {...props}
                />
            );
        };
        return(
                <Router>
                    <Grid>
                        <Row>
                            <Navbar inverse collapseOnSelect>
                                <Navbar.Header>
                                    <Navbar.Brand>
                                        <Link to="/">Brand</Link>
                                    </Navbar.Brand>
                                    <Navbar.Toggle />
                                </Navbar.Header>
                                <Navbar.Collapse>
                                    <Nav>
                                        <NavItem eventKey={1} href="#">
                                            <Link to="/about">About</Link>
                                        </NavItem>
                                        <NavItem eventKey={2} href="#">
                                            <Link to="/contact">Contact</Link>
                                        </NavItem>
                                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                            <MenuItem eventKey={3.1}>Action</MenuItem>
                                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                            <MenuItem divider />
                                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                        </NavDropdown>
                                    </Nav>
                                    <Nav pullRight>
                                        <NavItem eventKey={1} href="#">
                                            <Link to="/login">Login</Link>
                                        </NavItem>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Row>
                        <Route exact path="/"  render={() => (
                            <Home posts={posts} />
                        )}/>
                        <Route path="/post/:id"  component={MyPostPage}/>
                        <Route path="/about" component={About} />
                        <Route path="/login" component={Login} />
                        <Route path="/contact" component={Contact} />
                        {/*<PrivateRoute path="/protected" component={Protected} />*/}
                    </Grid>
                </Router>
        );
    };
}
render(<App/>, document.getElementById('app'));
// render((
//     <Router history={browserHistory}>
//         <Route component={App} path="app">
//             <IndexRoute component={Home}/>
//             <Route path="/" component={Home}/>
//             <Route path="/cars" component={Car} data={data}/>
//             <Route path="/cars/:id" component={CarDetails} data={data}/>
//             <Route path="/about" component={About}/>
//             <Route path="/login" component={Login} />
//         </Route>
//     </Router>
// ),document.getElementById('app'));


