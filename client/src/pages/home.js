import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { Container } from "@material-ui/core";
import Background from "../components/assets/images/chicago.jpg"


const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    margin: "0",
    width: "100vw",
    maxWidth: "2000px",
    height: "100vh",
}

const linkStyle = {
    color: "white"

}

class Home extends Component {

    render() {
        return (
            <Container className='background-image' style ={backgroundStyle}> 
            <Button style={linkStyle} href="/about"> about </Button>
            <Button style={linkStyle} href="/projects"> projects </Button>
            <Button style={linkStyle} href="/contact"> contact </Button>
    </Container>
        )
    }
}

export default Home