import React, { useState } from 'react';
import "./productgrid.css";

const ProductGrid = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const products = [
        {
            id: 1,
            name: "WOMEN'S STRAP HEELS",
            brand: "MACA",
            price: 139.0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97pFlTfZNA-uEju8RcPR7EjHGwWMf8aWdRQ&s",
        },
        {
            id: 1,
            name: "BARBIE DOLL BLOCK HEELS",
            brand: "MACA",
            price: 139.0,
            image: "https://lh3.googleusercontent.com/proxy/C2cOO8f9Jf8_rI4vB4ff6v7WOscZc4DSAOYacEauKKhc8A-VwK385TvYnCCBgT9uT89mv1gsn0D2ek2oy6cdwsK0qWGInCv9AZt7eRB12Qv7rNKOwYoyAaYB63J44xQGwXgJ9Zoj0YTh",
        },
        {
            id: 1,
            name: "LATIN WEDDING DANCE HEELS",
            brand: "MACA",
            price: 139.0,
            image: "https://s.alicdn.com/@sc04/kf/H7ca8c0f13255419db4bb14ca3964a0f00.jpg_720x720q50.jpg",
        },
        {
            id: 1,
            name: "WEDGES SANDALS",
            brand: "MACA",
            price: 139.0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYaGNw8TMRXrLgvt-hGsRiukO34kOAAveTsg&s",
        },
        {
            id: 1,
            name: "WOMEN'S LOAFERS",
            brand: "MACA",
            price: 139.0,
            image: "https://m.media-amazon.com/images/I/61YC2WFiBJL._AC_SL1001_.jpg",
        },
        {
            id: 1,
            name: "WOMEN'S BOOTS HEELS",
            brand: "MACA",
            price: 139.0,
            image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/sandal/c/9/d/-original-imagzy3fzhudxs8r.jpeg?q=90&crop=false",
        },
        {
            id: 1,
            name: "STILETTO HEEL PUMPS",
            brand: "MACA",
            price: 139.0,
            image: "https://www.thecelebritydresses.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/w/o/women_s_stiletto_heels_pumps_shoes_with_platform_for_wedding_1_.jpg",
        },
        {
            id: 1,
            name: "RED ENZO ANGELINO HEELS",
            brand: "MACA",
            price: 139.0,
            image: "https://i.ebayimg.com/images/g/3WgAAOSwVW5lwZ~~/s-l225.jpg",
        },
        {
            id: 1,
            name: "HIGH HEELS SANDALS",
            brand: "MACA",
            price: 139.0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXIi9AaKS5hhbz1xA6KnR0-xiG9byI4t4xhQ&s",
        },
        {
            id: 1,
            name: "STEVE MADDEN HEELS",
            brand: "MACA",
            price: 139.0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYM9tlv_bl9lPklNQTDuBVd53K5Avb1T-ZSw&s",
        },
        {
            id: 1,
            name: "FIZZY GOBLET",
            brand: "MACA",
            price: 139.0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFnOLd2Hjum-EsqncamSowne8lten7QdIMtQ&s",
        },
        {
            id: 1,
            name: "SKY HIGH STILETTOS",
            brand: "MACA",
            price: 139.0,
            image: "https://s.yimg.com/ny/api/res/1.2/G.1oxLRnukaPd8Hgrr4eXw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD03MTk-/https://media.zenfs.com/en/footwear_news_642/65c899782291a6adfd62ce14c16e8814",
        },
        {
            id: 1,
            name: "WOMEN'S BRIDAL SHOE",
            brand: "MACA",
            price: 139.0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JMtXGbr9KlTIzyZcDd2-SK-uGKCOj2ddBQ&s",
        },
        {
            id: 1,
            name: "WOMEN'S DANCING HEELS",
            brand: "MACA",
            price: 139.0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNV8HFjvhQQ5qPi5b5CnBQnMwFbIuwAugJow&s",
        },
        {
            id: 1,
            name: "WOMEN'S BLACK HEELS",
            brand: "MACA",
            price: 139.0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbbFb92-hdVbknu61c1PIkqF4Voyfe4W9rA&s",
        },
        // Add more unique products as needed
    ];

    return (
        <div className="product-section">
            {/* Filters Sidebar */}
            <aside className="filters">
                
                <FilterGroup title="BRAND" options={["Nike", "Adidas", "Merrel", "Gucci", "Skechers"]} />
                <SizeWidthFilter />
                <FilterGroup title="STYLE" options={["Slip Ons", "Boots", "Sandals", "Lace Ups", "Oxfords"]} />
                <ColorFilter />
                <FilterGroup title="MATERIAL" options={["Leather", "Suede"]} />
            </aside>

            {/* Product Grid */}
            <main className="products-container">
                <div className="products-grid">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Pagination */}
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />

              
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
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
        <div className="product-info">
            <h3>{product.name}</h3>
            <p className="brand">{product.brand}</p>
            <p className="price">${product.price.toFixed(2)}</p>
        </div>
    </div>
);

const Pagination = ({ currentPage, setCurrentPage }) => {
    const totalPages = 5; // Define the total number of pages

    return (
        <div className="pagination">
            <button
                className="page-button"
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1} // Disable if on the first page
            >
                ‹
            </button>
            {[...Array(totalPages)].map((_, index) => {
                const page = index + 1; // Page numbers start from 1
                return (
                    <button
                        key={page}
                        className={`page-button ${currentPage === page ? "active" : ""}`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                );
            })}
            <button
                className="page-button"
                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages} // Disable if on the last page
            >
                ›
            </button>
        </div>
    );
};


export default ProductGrid;