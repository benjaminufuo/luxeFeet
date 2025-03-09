import React from 'react'
import "./categorycard.css"
const CategoryCard = () => {

  return (
    <div>
       <div className="category-cards">
      <div className="card">
        <img 
          src="data:image/jpeg;base64,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" 
          className="card-image"
        />
        <div className="card-overlay">
          <h2 className="card-title">CASUALS</h2>
          <button className="shop-button">Shop now</button>
        </div>
      </div>

      <div className="card">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLZWp0NVBy-JwYC34qK5hjuKayVs3Lt8rTQ&s"
          className="card-image dress-image"
        />
        <div className="card-overlay">
          <h2 className="card-title">DRESS</h2>
          <button className="shop-button">Shop now</button>
        </div>
      </div>
      <div className="card">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_T5LkZANhqa4zxitiuqCnEcZBqNpqrzagQ&s" 
           
          className="card-image sports-image"
        />
        <div className="card-overlay">
          <h2 className="card-title">SPORTS</h2>
          <button className="shop-button">Shop now</button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default CategoryCard
