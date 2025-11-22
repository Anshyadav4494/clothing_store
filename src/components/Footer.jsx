import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5 mt-auto">
            <Container>
                <Row className="g-4">
                    <Col md={4}>
                        <h5 className="text-uppercase mb-4">LuxeWear</h5>
                        <p className="text-secondary">
                            Elevating your style with premium women's clothing.
                            Quality, comfort, and elegance in every stitch.
                        </p>
                    </Col>
                    <Col md={2}>
                        <h6 className="text-uppercase mb-4">Shop</h6>
                        <ul className="list-unstyled text-secondary">
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">New Arrivals</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Best Sellers</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Sale</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h6 className="text-uppercase mb-4">Help</h6>
                        <ul className="list-unstyled text-secondary">
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Shipping</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Returns</a></li>
                            <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h6 className="text-uppercase mb-4">Newsletter</h6>
                        <p className="text-secondary">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter your email" />
                            <button className="btn btn-primary" type="button">Subscribe</button>
                        </div>
                    </Col>
                </Row>
                <hr className="border-secondary my-4" />
                <div className="text-center text-secondary">
                    <small>&copy; 2024 LuxeWear. All rights reserved.</small>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
