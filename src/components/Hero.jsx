import { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroSlide2 from '../assets/hero_slide_2.png';

const images = [
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Fashion 3
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",  // Fashion 4
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Fashion 5
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Fashion 6
    "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Fashion 7
    "https://images.unsplash.com/photo-1485230946086-1d99d5e5cd3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Fashion 8
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"  // Fashion 9 (Replaced)
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Changed to 3 seconds for faster feedback

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="position-relative bg-light mb-5" style={{ minHeight: '600px', overflow: 'hidden' }}>
            {/* Background Images */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundImage: `url("${img}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: '#333', // Fallback color
                        opacity: currentImageIndex === index ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        zIndex: 0
                    }}
                />
            ))}

            {/* Overlay */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25" style={{ zIndex: 1 }}></div>

            {/* Content */}
            <Container className="position-relative text-white h-100" style={{ zIndex: 2, paddingTop: '150px', paddingBottom: '150px' }}>
                <Row>
                    <Col md={6}>
                        <h1 className="display-3 fw-bold mb-4">Women Collection 2025-2026</h1>
                        <p className="lead mb-4 fs-4">Discover the latest trends in women's fashion. Elegant, stylish, and perfect for the season.</p>
                        <Button as={Link} to="/shop" variant="primary" size="lg" className="px-5 py-3 rounded-pill">
                            Shop Now
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
