import React, { Component } from 'react'
import './Evaluation.scss'
export default class Evaluation extends Component {
    constructor(props)
    {
        super(props);
        this.state={marks:''}
        this.takeTest=this.takeTest.bind(this);
    }

    takeTest()
    {
        window.location.href="/select-subject"
    }

    componentDidMount()
    {
        const {match:{params}}=this.props;
        const marks=params.marks;
        this.setState({marks:marks});

    }
    render() {
        return (
            <div>
                <div className="info-container">
                    <h1 className="mark-holder">
                        You have Scored {this.state.marks} marks
                        </h1>
                        <button type="submit" onClick={this.takeTest} className="btn btn-primary btn-ghost take-test">Take another Test</button>
                    </div>
            </div>
        )
    }
}
