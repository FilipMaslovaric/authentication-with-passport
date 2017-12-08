import React from 'react';
import { Input, Control, Icon, Button, Container, Box, Title } from 'reactbulma';
// import axios from 'axios';

export default ({ handleSignIn, loginError, handleRegisterForm }) => (

    <Container>
        <div>{loginError && loginError}</div>
        <Box>
            <Title>Login</Title>
            <form onSubmit={handleSignIn}>
                <Control hasIconsLeft>
                    <Input placeholder="E-mail" name="email" type="email" />
                    <Icon left>
                        <i className="fa fa-envelope" />
                    </Icon> <br />
                </Control>
                <Control hasIconsLeft>
                    <Input placeholder="Password" name="password" type="password" />
                    <Icon left>
                        <i className="fa fa-key" />
                    </Icon> <br /> <br />
                </Control>
                <Button>Login</Button>
                <Button onClick={handleRegisterForm}> Register </Button>
            </form>
        </Box>
    </Container>
)
