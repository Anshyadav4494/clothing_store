import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
    const [cartCount, setCartCount] = useState(0); // Mock state
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Navbar bg="white" expand="lg" className="shadow-sm sticky-top py-3">
            <Container>
                <Navbar.Brand as={Link} to="/" className="text-uppercase text-dark">
                    Luxe<span className="text-primary">Wear</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" className="mx-2 fw-medium">Home</Nav.Link>
                        <Nav.Link as={Link} to="/shop" className="mx-2 fw-medium">Shop</Nav.Link>
                        <Nav.Link as={Link} to="/new-arrivals" className="mx-2 fw-medium">New Arrivals</Nav.Link>
                        <Nav.Link as={Link} to="/collections" className="mx-2 fw-medium">Collections</Nav.Link>
                    </Nav>

                    <Nav>
                        {/* Cart Icon */}
                        <Nav.Link as={Link} to="/cart" className="position-relative">
                            <i className="bi bi-bag"></i>
                            {cartCount > 0 && (
                                <Badge pill bg="primary" className="position-absolute top-0 start-100 translate-middle p-1">
                                    {cartCount}
                                </Badge>
                            )}
                        </Nav.Link>

                        {/* User dropdown */}
                        {user ? (
                            <NavDropdown
                                title={
                                    <img
                                        src={user.photo}
                                        alt={user.name}
                                        className="rounded-circle border border-2 border-white shadow-sm"
                                        style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                                    />
                                }
                                id="basic-nav-dropdown"
                                align="end"
                            >
                                <div className="px-4 py-3 text-center border-bottom">
                                    <img
                                        src={user.photo}
                                        alt={user.name}
                                        className="rounded-circle mb-2 border border-3 border-light shadow-sm"
                                        style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                                    />
                                    <h6 className="fw-bold mb-0">{user.name}</h6>
                                    <small className="text-muted">{user.email}</small>
                                </div>
                                <NavDropdown.Item as={Link} to="/profile" className="mt-2">
                                    <i className="bi bi-person me-2"></i> Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/settings">
                                    <i className="bi bi-gear me-2"></i> Settings
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogout} className="text-danger">
                                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Nav.Link as={Link} to="/login" className="fw-medium">
                                <i className="bi bi-person-circle me-1"></i> Login
                            </Nav.Link>
                        )}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
