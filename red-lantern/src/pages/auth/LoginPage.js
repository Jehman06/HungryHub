import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '@aws-amplify/ui-react/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage(props) {
  const navigate = useNavigate();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log('Login');
      console.log(username);
      console.log(password);

      await Auth.signIn(username, password);

      props.updateAuthStatus(true);
      navigate('/contacts');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row className="px-4 my-5">
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row className="px-4 my-5">
        <Col sm={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                onChange={(evt) => setUserName(evt.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                minLength="8"
                placeholder="Enter Password"
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleLogin}>
              Login
            </Button>
            <Link to="/register">
              <Button variant="outline-primary">Register</Button>
            </Link>
            <Link to="/">
              <Button variant="outline-primary">Cancel</Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;