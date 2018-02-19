// ./components/Home.jsx
import React, { Component } from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(username, email, birthdate);
    $.ajax({
      type: 'POST',
      url: setData,
      data: {
        username: data.get('username'),
        email: data.get('email'),
        birthdate: data.get('birthdate')
      }
    })
      .done(function(data) {
        console.log('ok');
      })
      .fail(function(jqXhr) {
        console.log('failed to register');
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input id="username" name="username" type="text" />

        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="birthdate">Enter your birth date</label>
        <input id="birthdate" name="birthdate" type="text" />

        <button>Send data!</button>
      </form>
    );
  }
}
export default Login