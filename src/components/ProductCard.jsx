import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Card className="h-100 overflow-hidden">
            <div className="position-relative">
                <Card.Img variant="top" src={product.image} style={{ height: '300px', objectFit: 'cover' }} />
                {product.isNew && (
                    <span className="position-absolute top-0 start-0 bg-primary text-white px-2 py-1 m-2 rounded-pill small">
                        New
                    </span>
                )}
            </div>
            <Card.Body className="d-flex flex-column">
                <div className="mb-2 text-muted small">{product.category}</div>
                <Card.Title as={Link} to={`/product/${product.id}`} className="text-decoration-none text-dark mb-auto">
                    {product.name}
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fw-bold fs-5">₹{product.price}</span>
                    <Button variant="outline-dark" size="sm" className="rounded-circle p-2">
                        <i className="bi bi-bag-plus"></i>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
