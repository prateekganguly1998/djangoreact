import React from "react";
import loginImg from "../login.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',password:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleUsername=this.handleUsername.bind(this);
  }
  handleUsername(event) {
    this.setState({username: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }
 async handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    console.log(this.state)
    const api_call = await fetch('http://localhost:8000/login',{
        headers:{'Content-Type': 'application/json',},
        method:"POST",
        body:JSON.stringify(this.state)
    });
    const data = await api_call.json();
    localStorage.setItem("token",data.token);
    window.location.href="/select-subject"
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text"  onChange={this.handleUsername} value={this.state.username} name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={this.handlePassword} value={this.state.password} type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" onClick={this.handleSubmit} className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}