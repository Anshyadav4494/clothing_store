import { Container, Row, Col, Form } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const collectionFilter = searchParams.get('collection');
    const categoryFilter = searchParams.get('category');

    // Filter products
    let displayProducts = products;

    if (collectionFilter) {
        displayProducts = displayProducts.filter(p => p.collection === collectionFilter);
    }

    if (categoryFilter) {
        displayProducts = displayProducts.filter(p => p.category === categoryFilter);
    }

    const handleSortChange = (e) => {
        // Implement sort logic here if needed
    };

    const getPageTitle = () => {
        if (collectionFilter) return `${collectionFilter} Collection`;
        if (categoryFilter) return `${categoryFilter}`;
        return 'Shop All';
    };

    return (
        <Container className="py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="display-6 fw-bold">{getPageTitle()}</h1>
                <Form.Select style={{ width: '200px' }} onChange={handleSortChange}>
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                </Form.Select>
            </div>

            {displayProducts.length === 0 ? (
                <div className="text-center py-5">
                    <h3>No products found in this category.</h3>
                </div>
            ) : (
                <Row xs={1} md={2} lg={4} className="g-4">
                    {displayProducts.map(product => (
                        <Col key={product.id}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Shop;
