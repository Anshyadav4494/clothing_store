import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <Container className="py-5 text-center"><h2>Product not found</h2></Container>;
    }

    return (
        <Container className="py-5">
            <Row>
                <Col md={6} className="mb-4">
                    <img src={product.image} alt={product.name} className="img-fluid rounded shadow-sm w-100" />
                </Col>
                <Col md={6}>
                    <div className="mb-2">
                        <Badge bg="secondary" className="me-2">{product.category}</Badge>
                        <Badge bg="info" className="me-2">{product.collection}</Badge>
                        <Badge bg="success">In Stock</Badge>
                    </div>
                    <h1 className="display-5 fw-bold mb-3">{product.name}</h1>
                    <h3 className="text-primary mb-4">₹{product.price}</h3>
                    <p className="lead text-muted mb-4">
                        Experience the perfect blend of style and comfort with our {product.name}.
                        Part of our exclusive {product.collection} collection.
                    </p>

                    <div className="mb-4">
                        <h5>Select Size</h5>
                        <div className="d-flex gap-2">
                            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                <Button key={size} variant="outline-dark" className="rounded-circle" style={{ width: '40px', height: '40px' }}>
                                    {size}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" className="rounded-pill">
                            Add to Cart
                        </Button>
                        <Button variant="outline-secondary" size="lg" className="rounded-pill">
                            Add to Wishlist
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
