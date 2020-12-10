import React from "react";
import loginImg from "../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',password:'', password2:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handlePassword2=this.handlePassword2.bind(this);
    this.handleUsername=this.handleUsername.bind(this);
  }
  handleUsername(event) {
    this.setState({username: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }
  handlePassword2(event) {
    this.setState({password2: event.target.value});
  }
 async handleSubmit(event) {
    let password=this.state.password;
    let password2=this.state.password2;
    if(password!==password2)
    {
      alert("Retry using similar passwords");
      window.location.reload();
    }
    else
    {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      console.log(this.state)
      const api_call = await fetch('http://localhost:8000/register',{
          headers:{'Content-Type': 'application/json',},
          method:"POST",
          body:JSON.stringify(this.state)
      });
      const data = await api_call.json();
      localStorage.setItem("token",data.token);
      window.location.href="/select-subject"
    }
   
  }


  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input type="password" name="password2" placeholder="confirm password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.handleSubmit}>
            Register
          </button>
        </div>
      </div>
    );
  }
}