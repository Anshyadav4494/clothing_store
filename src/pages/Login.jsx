import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (login(email, password)) {
            navigate('/');
        } else {
            setError('Invalid email or password. Try user@example.com / password');
        }
    };

    return (
        <Container fluid className="vh-100 p-0">
            <Row className="g-0 h-100">
                {/* Left Side - Decorative Image/Gradient */}
                <Col md={6} lg={6} className="d-none d-md-block">
                    <div
                        className="h-100 w-100"
                        style={{
                            background: 'linear-gradient(135deg, #ff4081 0%, #ff80ab 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                        }}
                    >
                        <div className="text-center p-5">
                            <h1 className="display-4 fw-bold mb-4">Fashion Store</h1>
                            <p className="lead">Discover the latest trends in women's fashion.</p>
                        </div>
                    </div>
                </Col>

                {/* Right Side - Login Form */}
                <Col md={6} lg={6} className="d-flex align-items-center justify-content-center bg-light">
                    <div className="w-75" style={{ maxWidth: '500px' }}>
                        <Card className="border-0 shadow-lg">
                            <Card.Body className="p-5">
                                <div className="text-center mb-4">
                                    <h2 className="fw-bold text-primary">Welcome Back</h2>
                                    <p className="text-muted">Please login to your account</p>
                                </div>

                                {error && <Alert variant="danger" className="rounded-3">{error}</Alert>}

                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="fw-semibold">Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            size="lg"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="rounded-3"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formBasicPassword">
                                        <Form.Label className="fw-semibold">Password</Form.Label>
                                        <div className="input-group">
                                            <Form.Control
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Password"
                                                size="lg"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                className="rounded-start-3 border-end-0"
                                            />
                                            <Button
                                                variant="outline-secondary"
                                                className="rounded-end-3 border-start-0"
                                                onClick={() => setShowPassword(!showPassword)}
                                                type="button"
                                            >
                                                <i className={`bi bi-eye${showPassword ? '-slash' : ''}`}></i>
                                            </Button>
                                        </div>
                                    </Form.Group>

                                    <div className="d-grid gap-2 mb-4">
                                        <Button variant="primary" size="lg" type="submit" className="rounded-pill fw-bold">
                                            Sign In
                                        </Button>
                                    </div>

                                    <div className="text-center">
                                        <p className="mb-2">Don't have an account? <Link to="/register" className="text-decoration-none fw-semibold">Sign up</Link></p>
                                        <Link to="/forgot-password" class="text-decoration-none small text-muted">Forgot Password?</Link>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
