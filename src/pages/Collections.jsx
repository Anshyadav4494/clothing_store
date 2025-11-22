import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../data/products';

const Collections = () => {
    // Extract unique collections
    const collections = [...new Set(products.map(p => p.collection))];

    return (
        <Container className="py-5">
            <h1 className="display-6 fw-bold mb-5 text-center">Our Collections</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {collections.map((collection, index) => {
                    // Find first product image for this collection
                    const collectionImage = products.find(p => p.collection === collection)?.image;

                    return (
                        <Col key={index}>
                            <Card className="h-100 border-0 shadow-sm text-white overflow-hidden">
                                <Card.Img src={collectionImage} alt={collection} style={{ height: '400px', objectFit: 'cover', filter: 'brightness(0.7)' }} />
                                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                                    <Card.Title className="display-6 fw-bold mb-3">{collection}</Card.Title>
                                    <Link to={`/shop?collection=${collection}`} className="btn btn-outline-light rounded-pill px-4">
                                        Explore
                                    </Link>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Collections;
