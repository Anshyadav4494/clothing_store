import { Container, Row, Col, Form } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const NewArrivals = () => {
    const newProducts = products.filter(p => p.isNew);

    return (
        <Container className="py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="display-6 fw-bold">New Arrivals</h1>
                <Form.Select style={{ width: '200px' }}>
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </Form.Select>
            </div>
            <Row xs={1} md={2} lg={4} className="g-4">
                {newProducts.map(product => (
                    <Col key={product.id}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default NewArrivals;
