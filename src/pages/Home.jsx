import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import accessoriesImage from '../assets/accessories_new.jpg';

const Home = () => {
    // Get 4 random new arrivals
    const featuredProducts = products
        .filter(p => p.isNew)
        .slice(0, 4);

    return (
        <>
            <Hero />
            <Container className="mb-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold">Trending Now</h2>
                    <p className="text-muted">Must-have styles for the season</p>
                </div>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {featuredProducts.map(product => (
                        <Col key={product.id}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
                <div className="text-center mt-5">
                    <Link to="/shop" className="btn btn-outline-dark rounded-pill px-5">View All Products</Link>
                </div>
            </Container>

            <div className="bg-light py-5 mb-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <img src={accessoriesImage} alt="Accessories Collection" className="img-fluid rounded shadow" />
                        </Col>
                        <Col md={6} className="p-5">
                            <h2 className="display-5 fw-bold mb-4">The Accessories Edit</h2>
                            <p className="lead text-muted mb-4">
                                Complete your look with our exquisite collection of jewelry, bags, and scarves.
                                The perfect finishing touches for any outfit.
                            </p>
                            <Link to="/shop?category=Accessories" className="btn btn-outline-dark btn-lg rounded-pill px-5">Shop Accessories</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Home;
