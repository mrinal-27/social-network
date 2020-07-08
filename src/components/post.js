import React from "react";
import { Card } from "react-bootstrap";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

class Post extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Card
                    style={({ margin: "2px" }, { boxShadow: "0 0 10px -5px" })}
                >
                    <Card.Body>{this.props.post.value}</Card.Body>
                </Card>
                <button
                    type="button"
                    className="btn btn-info m-2"
                    onClick={() => this.props.like(this.props.post)}
                >
                    Like <MdThumbUp /> ({this.props.post.likes})
                </button>
                <button
                    type="button"
                    className="btn btn-dark m-2"
                    onClick={() => this.props.dislike(this.props.post)}
                >
                    Dislike <MdThumbDown /> ({this.props.post.dislikes})
                </button>
                <button
                    type="button"
                    className="btn btn-warning float-right m-2"
                    onClick={() => this.props.onDelete(this.props.post)}
                >
                    Delete Post
                </button>
            </React.Fragment>
        );
    }
}

export default Post;
