import { useState, useEffect } from "react"
import { getAllProducts, deleteProduct } from "../api/Api"
import { toast } from "react-hot-toast"
import "./productgrid.css"

const ProductGrid = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({
    brand: [],
    sizes: [],
    style: [],
    colors: [],
    material: [],
  })

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const data = await getAllProducts()
        if (isMounted) {
          setProducts(data)
          setError(null)
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to fetch products. Please try again later.")
          toast.error("Failed to load products")
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchProducts()

    return () => {
      isMounted = false;
    }
  }, [])

  const handleDeleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id)
        fetchProducts()
      } catch (error) {
        console.error("Error deleting product:", error)
      }
    }
  }

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters }

      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter((item) => item !== value)
      } else {
        updatedFilters[filterType] = [...updatedFilters[filterType], value]
      }

      return updatedFilters
    })
  }

  const filteredProducts = products.filter((product) => {
    if (Object.values(filters).every((filterArray) => filterArray.length === 0)) {
      return true
    }

    const matchesCategory =
      filters.brand.length === 0 ||
      filters.brand.some((brand) => product.category.toLowerCase().includes(brand.toLowerCase()))

    const productSizes = product.sizes ? product.sizes.flatMap((size) => size.split(",")) : []
    const matchesSizes = filters.sizes.length === 0 || filters.sizes.some((size) => productSizes.includes(size))

    const matchesStyle =
      filters.style.length === 0 ||
      filters.style.some((style) => product.description.toLowerCase().includes(style.toLowerCase()))

    const matchesColors =
      filters.colors.length === 0 ||
      filters.colors.some((color) => product.description.toLowerCase().includes(color.toLowerCase()))

    const matchesMaterial =
      filters.material.length === 0 ||
      filters.material.some((material) => product.description.toLowerCase().includes(material.toLowerCase()))

    return matchesCategory && matchesSizes && matchesStyle && matchesColors && matchesMaterial
  })

  const productsPerPage = 12
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  if (loading) {
    return <div className="loading">Loading products...</div>
  }

  if (error) {
    return <div className="error">{error}</div>
  }

  return (
    <div className="product-section">
      <aside className="filters">
        <FilterGroup
          title="BRAND"
          options={["Nike", "Adidas", "Merrel", "Gucci", "Skechers"]}
          selectedFilters={filters.brand}
          onChange={(value) => handleFilterChange("brand", value)}
        />
        <SizeWidthFilter selectedSizes={filters.sizes} onChange={(value) => handleFilterChange("sizes", value)} />
        <FilterGroup
          title="STYLE"
          options={["Slip Ons", "Boots", "Sandals", "Lace Ups", "Oxfords"]}
          selectedFilters={filters.style}
          onChange={(value) => handleFilterChange("style", value)}
        />
        <ColorFilter selectedColors={filters.colors} onChange={(value) => handleFilterChange("colors", value)} />
        <FilterGroup
          title="MATERIAL"
          options={["Leather", "Suede"]}
          selectedFilters={filters.material}
          onChange={(value) => handleFilterChange("material", value)}
        />
      </aside>

      <main className="products-container">
        <div className="products-grid">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <ProductCard key={product._id} product={product} onDelete={() => handleDeleteProduct(product._id)} />
            ))
          ) : (
            <div className="no-products">No products found matching your filters.</div>
          )}
        </div>

        {filteredProducts.length > 0 && (
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        )}

        {localStorage.getItem("token") && (
          <div className="admin-actions">
            <button onClick={() => (window.location.href = "/add-product")} className="add-product-btn">
              Add New Product
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

const FilterGroup = ({ title, options, selectedFilters, onChange }) => (
  <div className="filter-group">
    <h3>{title}</h3>
    {options.map((option) => (
      <label key={option} className="filter-item">
        <input type="checkbox" checked={selectedFilters.includes(option)} onChange={() => onChange(option)} />
        {option}
      </label>
    ))}
  </div>
)

const SizeWidthFilter = ({ selectedSizes, onChange }) => {
  const sizes = ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14"]

  return (
    <div className="filter-group">
      <h3>SIZE/WIDTH</h3>
      <div className="size-grid">
        {sizes.map((size) => (
          <button
            key={size}
            className={size-button ${selectedSizes.includes(size) ? "active" : ""}}
            onClick={() => onChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <div className="width-options">
        <button className={width-button ${selectedSizes.includes("M") ? "active" : ""}} onClick={() => onChange("M")}>
          M
        </button>
        <button className={width-button ${selectedSizes.includes("W") ? "active" : ""}} onClick={() => onChange("W")}>
          W
        </button>
      </div>
    </div>
  )
}

const ColorFilter = ({ selectedColors, onChange }) => {
  const colors = ["Black", "White", "Blue", "Red", "Green", "Grey", "Orange", "Cream", "Brown"]

  return (
    <div className="filter-group">
      <h3>COLORS</h3>
      <div className="color-options">
        {colors.map((color) => (
          <label key={color} className="filter-item">
            <input type="checkbox" checked={selectedColors.includes(color)} onChange={() => onChange(color)} />
            {color}
          </label>
        ))}
      </div>
    </div>
  )
}

const ProductCard = ({ product, onDelete }) => {
  const isAdmin = localStorage.getItem("token")

  const handleProductClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      return
    }
    window.location.href = /product/${product._id}
  }

  return (
    <div className="product-card" onClick={handleProductClick}>
      <img
        src={product.imageUrl || "/placeholder.svg"}
        alt={product.description}
        className="product-image"
      />
      <div className="product-info">
        <h3>{product.description}</h3>
        <p className="brand">{product.category}</p>
        <p className="price">{product.price}</p>
      </div>
      {isAdmin && (
        <div className="product-actions" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => (window.location.href = /edit-product/${product._id})} className="edit-btn">
            Edit
          </button>
          <button onClick={onDelete} className="delete-btn">
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="pagination">
      <button
        className="page-button"
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </button>
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1
        return (
          <button
            key={page}
            className={page-button ${currentPage === page ? "active" : ""}}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        )
      })}
      <button
        className="page-button"
        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </button>
    </div>
  )
}

export default ProductGrid;