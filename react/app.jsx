import React, { Component } from 'react';
import { render } from 'react-dom';
import AuthExample from './AuthExample.js';
import Login from './components/Login.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Car from './components/Home/Car.js';
import CarDetails from './components/Home/CarDetails.js';
import {Router, Route, IndexRoute, Link, browserHistory} from "react-router";

const data = [
    {
        id: 1,
        name: 'Honda Accord Crosstour',
        year: '2010',
        model: 'Accord Crosstour',
        make: 'Honda',
        media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
        price: '$16,811'

    }
];
class App extends React.Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         loginStatus: false
    //     };
    // }
    // handleLogin1(loginStatus) {
    //     this.setState({loginStatus: loginStatus});
    // };
    render(){
        return(
            <AuthExample/>
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


