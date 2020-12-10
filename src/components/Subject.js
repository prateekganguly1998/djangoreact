import React, { Component } from 'react'
import './Subject.scss'
export default class Subject extends Component {
    constructor(props) {
        super(props);
        this.state = {
          subject: 'Machine Learning'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({subject: event.target.value});
        console.log(this.state)
      }
    
      handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        window.location.href=`/paper/${this.state.subject}`
        
      }
    render() {
        return (
            <div className="form-body">  
                 <form className="login-form" onSubmit={this.handleSubmit}>
            <h1>Select Subject</h1>
            <div className="form-input-material">
            <select value={this.state.subject} onChange={this.handleChange} className="form-control-material">
            <option defaultValue="Machine Learning">Machine Learning</option>
            <option value="C++">C++</option>
            <option  value="Python">Python</option>
            <option value="JAVA">JAVA</option>
            </select>
            </div>
            <button type="submit"  className="btn btn-primary btn-ghost">GENERATE</button>
          </form>

                </div>
         
         
        );
      }
}
