//if we need a state we need to create a class component
import React, { Component } from 'react'

class AddTodo extends Component{
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // send this state  as parameter to the app.js over the AddTodo function 
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text"  value={this.state.content} id="content" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default AddTodo