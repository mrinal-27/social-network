import React from "react";
import { Navbar } from "react-bootstrap";
import { RiQuillPenLine } from "react-icons/ri";

class NavigationBar extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand
                        style={
                            ({ justifyContent: "center" },
                            {
                                boxShadow:
                                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            },
                            { borderRadius: "50px" })
                        }
                    >
                        Pen it down <RiQuillPenLine />
                    </Navbar.Brand>
                </Navbar>
            </>
        );
    }
}

export default NavigationBar;
