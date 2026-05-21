import { useState } from 'react';
import './App.css';

export default function Portfolio() {
    const [products, setProducts] = useState([]);

    useState(() => {
        const loadProducts = async () => {
            const imageModules = import.meta.glob('/src/assets/product-images/*');
            const productList = await Promise.all(
                Object.entries(imageModules).map(async ([path, importFunc]) => {
                    const module = await importFunc();
                    const filename = path.split('/').pop().replace(/\.[^.]+$/, '').replace(/-/g, ' ');
                    return {
                        image: module.default,
                        description: capitalizeWords(filename),
                    };
                })
            );
            setProducts(productList);
        };
        loadProducts();
    }, []);

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    function mouseEnter(event) {
        event.currentTarget.style.transform = 'scale(1.05)';
        event.currentTarget.style.transition = 'transform 0.3s ease';
    }

    function mouseLeave(event) {
        event.currentTarget.style.transform = 'scale(1)';
        event.currentTarget.style.transition = 'transform 0.3s ease';
    }

    return (
        <section className="section-card">
            <div className="container">
                <h1>Portfolio Page</h1>
                <p>Welcome to the Portfolio page. Here you can find all the projects we've done.</p>
                <div className="row">
                    {products.map(product => (
                        <div className="col-md-4" key={product.description} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                            <div className="card mb-4">
                                <img src={product.image} className="card-img-top" alt={product.description} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.description}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}