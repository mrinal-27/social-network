import React from "react";
import "./App.css";
import TextBox from "./components/textbox";
import Post from "./components/post";
import NavigationBar from "./components/navigationbar";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            posts: [],
        };

        this.content = "";

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.likePost = this.likePost.bind(this);
        this.dislikePost = this.dislikePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.clearText = this.clearText.bind(this);
    }
    /**
     * 1. Get the ID (catch the ID in the this.state.posts)
     * 2. In that ID, append to the this.state.posts[index].value
     * 3. Update (this.setState({});)
     *
     * indexOf
     */

    handleChange(event) {
        this.content = event.target.value;
        console.log(this.content);
    }

    handleSubmit(event) {
        event.preventDefault();
        const posts = [...this.state.posts];
        let total = this.state.total;

        const addPost = (postValue, idx) => {
            // (this.content, total + 1)
            posts.push({ id: idx++, value: postValue, likes: 0, dislikes: 0 });
            this.setState({ total: idx, posts });
            alert("Message Posted!");
        };

        this.content.length === 0
            ? alert("Empty message")
            : addPost(this.content, total);

        //console.table(this.state.posts);
        console.log(this.content);

        event.target.reset();
        this.content = "";
    }

    likePost(post) {
        let posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index].likes++;
        this.setState({
            posts,
        });
        console.log(post);
    }

    dislikePost(post) {
        let posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index].dislikes++;
        this.setState({
            posts,
        });
        console.log(post);
    }

    deleteAll() {
        this.setState({ total: 0, posts: [] });
    }

    deletePost(post) {
        let posts = [...this.state.posts];
        posts.splice(posts.indexOf(post), 1);
        this.setState({
            posts,
        });
        console.table(this.state.posts);
    }

    clearText() {
        document.getElementById("formform").value = "";
        console.log("function called!");
    }

    render() {
        return (
            <div className="container">
                <NavigationBar />

                <TextBox
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    deleteAll={this.deleteAll}
                    clearText={this.clearText}
                ></TextBox>

                {this.state.posts.map((post, id) => {
                    return (
                        <Post
                            key={id}
                            post={post}
                            like={this.likePost}
                            dislike={this.dislikePost}
                            onDelete={this.deletePost}
                        />
                    );
                })}
            </div>
        );
    }
}

export default App;
