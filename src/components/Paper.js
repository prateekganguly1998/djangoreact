import React, { Component } from 'react';
import './Paper.scss'

import Timer from 'react-compound-timer'
export default class Paper extends Component {
    constructor(props)
    {
        super(props);
        this.state={questions:[],answers:[],marks:0};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.onTimerDone=this.onTimerDone.bind(this);
    }
   async handleChange(e,questionId)
    {
       // console.log(e.target.value,questionId);
        let temp=this.state.answers;
        let index=temp.findIndex(x=>x.questionId===questionId);
        console.log(index);
        index === -1?temp.push({questionId:questionId,answer:e.target.value}):temp[index].answer=e.target.value;
        this.setState({answers:temp});
        console.log(this.state.answers);
    }
    handleSubmit(e)
    {
        e.preventDefault();
         let MULIPLIER=5
        let marks=0;
        let answers=this.state.answers;
        let questions=this.state.questions;
        for(let i=0;i<answers.length;i++)
        {
            let tempObj=questions.find(o=>o.id===answers[i].questionId)
            
            if(tempObj!==undefined)
            {
                if(tempObj.answer===answers[i].answer)
                {
                    console.log(`Correct answer`);
                    marks=marks+1;
                }
            }
        }

          console.log(marks);
         window.location.href=`/evaluate/${marks*MULIPLIER}`;



    }

    onTimerDone()
    {
        let MULIPLIER=5;
        let marks=0;
        let answers=this.state.answers;
        let questions=this.state.questions;
        for(let i=0;i<answers.length;i++)
        {
            let tempObj=questions.find(o=>o.id===answers[i].questionId)
            
            if(tempObj!==undefined)
            {
                if(tempObj.answer===answers[i].answer)
                {
                    console.log(`Correct answer`);
                    marks=marks+1;
                }
            }
        }

          console.log(marks);
          window.location.href=`/evaluate/${marks*MULIPLIER}`;
        
    }

   async componentDidMount()
    {
        const {match:{params}}=this.props;
        console.log(params);
        const token=localStorage.getItem("token");
        const api_call = await fetch(`http://localhost:8000/question-paper/${params.subject}`,{
            headers:{'Content-Type': 'application/json',
                      'Authorization':`Token ${token}`                             
             },
            method:"GET"
        });
        const data = await api_call.json();
        this.setState({questions:data})

    }
   
    render() {
        let {questions}=this.state;
        return (
          
            <div className="container">
                <div className="timer-container">
                <Timer
                   initialTime={65*60 * 1000}
                   direction="backward"
                  timeToUpdate={10}
                  checkpoints={[
            {
                time: 0,
                callback: this.onTimerDone,
            },
        ]}
    >
       
      <h3> <Timer.Hours formatValue={value => `${value} hours. `} /></h3>
      <h3> <Timer.Minutes  formatValue={value => `${value} minutes. `} /></h3>
      <h3> <Timer.Seconds formatValue={value => `${value} s. `} /></h3>
    </Timer>
                    </div>
            <form  onSubmit={this.handleSubmit}>
            {questions.map(question=> (
              <div className="question-card" key={question.id}>
                <h3>{question.question}</h3>
              {
                  question.options.map((option,index)=>{
                    return <label key={index}><input onChange={(e)=>this.handleChange(e,question.id)} name={question.id} type="radio"
                    key={index}
                   value={option} />{option}</label>
                  })
              }
              </div>
            ))}
              <button type="submit"  className="btn btn-primary btn-ghost submit-paper">SUBMIT</button>
            </form>
          </div>
        )
    }
}
