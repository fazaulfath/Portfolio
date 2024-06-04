import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import {
    AiFillMail,
    AiFillGithub,
    AiFillInstagram,
    AiOutlineGoogle
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa"

import { FormControl, TextField } from "@material-ui/core"
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';

import emailjs from "emailjs-com"
import ApiKey from "../../Assets/ApiKey";

const Contact = () => {

    const apiKey = ApiKey()
    const form = useRef()

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: "#68187a"
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: "#68187a",
          color: "#68187a"
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#68187a'
          },
          '&:hover fieldset': {
            borderColor: '#68187a'
          },
          '&.Mui-focused fieldset': {
            borderColor: "#68187a"
          },
        }
      });

    const theme = createTheme({
        palette: {
          primary: {
            light: "#af52bf",
            main: "#68187a",
            dark: "#6d1b7b",
            contrastText: "#ffffff"
          }
        }
      })

    const useStyles = makeStyles((theme) => ({
        text: {
            width: 'calc(100% - 5px)'
        }
    }))
    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            apiKey.SERVICE_ID,
            apiKey.TEMPLATE_ID,
            form.current,
            apiKey.USER_ID,
        )
        .then((result) => {
            alert("Message Sent, We will get back to you shortly", result.text)
        })
        .catch((error) => {
            alert("An error occurred, Please try again", error.text)
        })
        e.target.reset()
    }

    return(

        <Container fluid className="about-section-contact">
            {/* <Particle /> */}
            <Container>
                <Row>

                    <Col md={4} className="myAvtar-contact">
                        <h1> Contact Me </h1>
                        <form ref={form} onSubmit={handleSubmit}>

                            <FormControl className={classes.text} >
                                <ThemeProvider theme={theme}>
                                    <CssTextField
                                        sx={{ m: 1.5 }}
                                        inputProps={{ style: { color: 'white' } }}
                                        InputLabelProps={{ style: { color: '#68187a' } }}
                                        fullWidth
                                        required
                                        color="primary"
                                        margin="dense"
                                        id="name"
                                        name="name"
                                        label="Enter Name"
                                        variant="outlined"
                                    />
                                </ThemeProvider>
                            </FormControl>

                            <br />

                            <FormControl className={classes.text} >
                                <ThemeProvider theme={theme}>
                                    <CssTextField
                                        sx={{ m: 1.5 }}
                                        inputProps={{ style: { color: 'white' } }}
                                        InputLabelProps={{ style: { color: '#68187a' } }}
                                        fullWidth
                                        required
                                        color="primary"
                                        margin="dense"
                                        id="email"
                                        name="email"
                                        label="Enter Email"
                                        variant="outlined"
                                    />
                                </ThemeProvider>
                            </FormControl>

                            <br />

                            <FormControl className={classes.text} >
                                <ThemeProvider theme={theme}>
                                    <CssTextField
                                        sx={{ m: 1.5 }}
                                        inputProps={{ style: { color: 'white' } }}
                                        InputLabelProps={{ style: { color: '#68187a' } }}
                                        fullWidth
                                        color="primary"
                                        margin="dense"
                                        id="subject"
                                        name="subject"
                                        label="Enter Subject"
                                        variant="outlined"
                                    />
                                </ThemeProvider>
                            </FormControl>

                            <br />

                            <FormControl className={classes.text} >
                                <ThemeProvider theme={theme}>
                                    <CssTextField
                                        sx={{ m: 1.5 }}
                                        inputProps={{ style: { color: 'white' } }}
                                        InputLabelProps={{ style: { color: '#68187a' } }}
                                        multiline
                                        rows = {7}
                                        fullWidth
                                        required
                                        color="primary"
                                        margin="dense"
                                        id="message"
                                        name="message"  
                                        label="Enter Message"
                                        variant="outlined"
                                    />
                                </ThemeProvider>
                            </FormControl>

                            <br />
                            <br />

                            <input
                            className="submit-button"
                            type="submit"
                            value="Submit"/>

                        </form>
                    </Col>

                    <Col md={8} className="home-about-social-contact">
                        <h1>FIND ME ON</h1>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                href="mailto:fazaulfath@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                                >
                                <AiFillMail />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                href="https://www.linkedin.com/in/faza-ulfath-045033230/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                                >
                                <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                href="https://github.com/fazaulfath"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                                >
                                <AiFillGithub />
                                </a>
                            </li>
                            {/* <li className="social-icons">
                                <a
                                href="https://scholar.google.com/citations?hl=en&user=2EOgF5oAAAAJ"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                                >
                                <AiOutlineGoogle />
                                </a>
                            </li> */}
                            <li className="social-icons">
                                <a
                                href="https://www.instagram.com/faza_ulfath/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                                >
                                <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Contact