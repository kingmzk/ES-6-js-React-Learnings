import React, { Component } from 'react';
import axios from 'axios';

export class PostList extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            post: [],
            error:''
        }
    }

    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>
            {
                // const post = response.data;
                this.setState({ post: response.data });
            })
            .catch(error =>
            {
                this.setState({error:'URL errror'})
                console.log(error);
            });
    }


    render()
    {
        // const { post ,error} = this.state;
        const post = this.state.post;
        const error = this.state.error;

        return (
            <div>
                <h1>List Post Data</h1>
                {
                    post.length ?
                    post.map(post => (<div key={post.id}>{post.title}</div> 
                ))  : null
                }

                {
                   error ? <div>{error}</div> : null
                }
            </div>
        );
    }
}

export default PostList
