import React from "react";
import { Form } from "react-bootstrap";
// import { InputGroup, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./textbox.css";

class TextBox extends React.Component {
    render() {
        return (
            <Form onSubmit={this.props.handleSubmit} id="form">
                <Form.Group controlId="formform" style={{ margin: "2px" }}>
                    <Form.Control
                        className="textArea"
                        as="input"
                        placeholder="Write something that's on your mind..."
                        style={{ height: "8rem" }}
                        onChange={this.props.handleChange}
                    />
                    <div className="postbox-buttons">
                        <Button
                            variant="primary"
                            className="my-button"
                            type="submit"
                        >
                            Post
                        </Button>{" "}
                        <Button
                            variant="success"
                            className="my-button"
                            onClick={() => this.props.clearText()}
                        >
                            Clear text
                        </Button>{" "}
                        <Button
                            variant="danger"
                            className="my-button"
                            onClick={this.props.deleteAll}
                        >
                            Delete all posts
                        </Button>{" "}
                    </div>
                </Form.Group>
            </Form>
        );
    }
}

export default TextBox;
