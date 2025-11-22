import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
    // Mock cart items with INR prices
    const cartItems = [
        { id: 1, name: 'Floral Summer Dress', price: 1499, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', quantity: 1 },
        { id: 31, name: 'Classic Denim Jacket', price: 2999, image: 'https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', quantity: 1 },
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 99;
    const total = subtotal + shipping;

    return (
        <Container className="py-5">
            <h1 className="mb-4">Shopping Cart</h1>
            <Row>
                <Col lg={8}>
                    <Table responsive className="align-middle">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img src={item.image} alt={item.name} style={{ width: '60px', height: '80px', objectFit: 'cover' }} className="me-3 rounded" />
                                            <span className="fw-medium">{item.name}</span>
                                        </div>
                                    </td>
                                    <td>₹{item.price}</td>
                                    <td>
                                        <div className="d-flex align-items-center border rounded" style={{ width: 'fit-content' }}>
                                            <Button variant="link" className="text-dark text-decoration-none p-2">-</Button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <Button variant="link" className="text-dark text-decoration-none p-2">+</Button>
                                        </div>
                                    </td>
                                    <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <Button variant="link" className="text-danger">
                                            <i className="bi bi-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col lg={4}>
                    <Card className="bg-light border-0">
                        <Card.Body className="p-4">
                            <h4 className="mb-4">Order Summary</h4>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Shipping</span>
                                <span>₹{shipping.toFixed(2)}</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-4 fw-bold fs-5">
                                <span>Total</span>
                                <span>₹{total.toFixed(2)}</span>
                            </div>
                            <Button variant="primary" size="lg" className="w-100 rounded-pill">
                                Proceed to Checkout
                            </Button>
                            <div className="text-center mt-3">
                                <Link to="/shop" className="text-decoration-none">Continue Shopping</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
