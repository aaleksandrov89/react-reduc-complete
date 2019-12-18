import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokebasll from '../pokeball.png'

class Home extends Component {
    state = {
        posts: [
   
        ]
    }
    //lifecicle hook
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            // this promise fires once the get call is completed
            .then(res => {
                console.log(res)
                // assigning first 10 posts  to the state
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    }
    render(){
        //grabbing the post propertie from the state
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokebasll} alt="A pokeball" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text"> {post.title}</span>
                            </Link>
                            <p> {post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="home container">
                <h4 className="center">Home</h4>
                {postList}

            </div>  
        )
    }
}

export default Home