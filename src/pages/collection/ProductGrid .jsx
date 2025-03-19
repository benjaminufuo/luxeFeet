import React, { useState,useEffect } from 'react';
import "./productgrid.css";
import { getAllProducts } from '../../api/Api';
import { Toaster, toast } from "react-hot-toast";

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const productsPerPage = 5;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const fetchedProducts = await getAllProducts();
                setProducts(fetchedProducts);
            } catch (err) {
                setError("Failed to load products.");
                toast.error("Failed to load products");
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const totalPages = Math.ceil(products.length / productsPerPage);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="product-section">
            <Toaster />
            <aside className="filters">
                <FilterGroup title="BRAND" options={["Nike", "Adidas", "Merrel", "Gucci", "Skechers"]} />
                <SizeWidthFilter />
                <FilterGroup title="STYLE" options={["Slip Ons", "Boots", "Sandals", "Lace Ups", "Oxfords"]} />
                <ColorFilter />
                <FilterGroup title="MATERIAL" options={["Leather", "Suede"]} />
            </aside>
            <main className="products-container">
                <div className="products-grid">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="no-products">
                            <p>No products found.</p>
                        </div>
                    )}
                </div>
                <Pagination totalPages={totalPages} />
            </main>
        </div>
    );
};

const FilterGroup = ({ title, options }) => (
    <div className="filter-group">
        <h3>{title}</h3>
        {options.map(option => (
            <label key={option} className="filter-item">
                <input type="checkbox" /> {option}
            </label>
        ))}
    </div>
);

const SizeWidthFilter = () => (
    <div className="filter-group">
        <h3>SIZE/WIDTH</h3>
        <div className="size-grid">
            {["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14"].map(size => (
                <button key={size} className="size-button">{size}</button>
            ))}
        </div>
        <div className="width-options">
            <button className="width-button">M</button>
            <button className="width-button">W</button>
        </div>
    </div>
);

const ColorFilter = () => (
    <div className="filter-group">
        <h3>COLORS</h3>
        <div className="color-options">
            {["Black", "White", "Blue", "Red", "Green", "Grey", "Orange", "Cream", "Brown"].map(color => (
                <label key={color} className="filter-item">
                    <input type="checkbox" /> {color}
                </label>
            ))}
        </div>
    </div>
);

const ProductCard = ({ product }) => (
    <div className="product-card">
        <img 
            src={product.image || "/placeholder.svg"} 
            alt={product.name} 
            className="product-image" 
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.svg";
            }} 
        />
        <div className="product-info">
            <h3>{product.name}</h3>
            <p className="brand">{product.brand}</p>
            <p className="price">${product.price.toFixed(2)}</p>
        </div>
    </div>
);

const Pagination = ({ totalPages }) => (
    <div className="pagination">
        <button className="page-button" disabled>&laquo;</button>
        {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
                <button key={page} className="page-button">
                    {page}
                </button>
            );
        })}
        <button className="page-button" disabled></button>
    </div>
);



export default ProductGrid;