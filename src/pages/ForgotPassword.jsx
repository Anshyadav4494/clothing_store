import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6} lg={5}>
                    <Card className="border-0 shadow-sm">
                        <Card.Body className="p-5">
                            <div className="text-center mb-4">
                                <h2 className="fw-bold">Reset Password</h2>
                                <p className="text-muted">Enter your email to receive instructions</p>
                            </div>

                            {submitted ? (
                                <Alert variant="success" className="text-center">
                                    If an account exists for {email}, you will receive password reset instructions shortly.
                                </Alert>
                            ) : (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-4" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            size="lg"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <div className="d-grid gap-2 mb-4">
                                        <Button variant="primary" size="lg" type="submit" className="rounded-pill">
                                            Send Instructions
                                        </Button>
                                    </div>
                                </Form>
                            )}

                            <div className="text-center">
                                <Link to="/login" className="text-decoration-none">Back to Login</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;
