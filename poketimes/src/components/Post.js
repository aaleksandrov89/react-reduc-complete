import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        post: null
    }
    // grab the parameter post_id from the router props
    componentDidMount(){
        // console.log(this.props);
        let id = this.props.match.params.post_id

        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            // this promise fires once the get call is completed
            .then(res => {
                // console.log(res)
                // assigning first 10 posts  to the state
                this.setState({
                    post: res.data
                })
            })
    }
    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center"> Loading ...</div>
        )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

export default Post