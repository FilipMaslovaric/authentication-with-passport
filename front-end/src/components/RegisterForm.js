import React from 'react';
import { Input, Control, Icon, Button, Container, Box, Title } from 'reactbulma';
// import axios from 'axios';

export default ({ handleRegisterSubmit, handleRegisterForm, registerError }) => (
    <Container>
        <Box>
            <Title>Login</Title>
            {registerError && <h3>Sorry, that e-mail already exists!</h3> }
            <form onSubmit={handleRegisterSubmit}>
                <Control hasIconsLeft>
                    <Input placeholder="First Name" name="firstName" type="text" />
                    <Icon left>
                        <i className="fa fa-user" />
                    </Icon>
                </Control>
                <Control hasIconsLeft>
                    <Input placeholder="Last Name" name="lastName" type="text" />
                    <Icon left>
                        <i className="fa fa-user" />
                    </Icon>
                </Control>
                <Control hasIconsLeft>
                    <Input placeholder="E-mail" name="email" type="email" />
                    <Icon left>
                        <i className="fa fa-envelope" />
                    </Icon>
                </Control>
                <Control hasIconsLeft>
                    <Input placeholder="Password" name="password" type="password" />
                    <Icon left>
                        <i className="fa fa-key" />
                    </Icon>
                </Control>
                <Control hasIconsLeft>
                    <Input placeholder="Confirm password" name="confirmPassword" type="password" />
                    <Icon left>
                        <i className="fa fa-key" />
                    </Icon>
                </Control>
                <Button onClick={handleRegisterForm}> Go to Login </Button>
                <Button>Sign Up</Button>
            </form>
        </Box>
    </Container>
)