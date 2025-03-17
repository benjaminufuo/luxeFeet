import React from 'react'
import "./trustedpartner.css"
import Footer from './Footer'


const TrustedPartner = () => {
    const partners = [
        {
          name: "Adidas",
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        },
        {
          name: "Nike",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
        },
        {
          name: "Gucci",
          logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/1960s_Gucci_Logo.svg",
        },
        {
          name: "Merrell",
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Merrell_logo.svg",
        },
        {
          name: "Puma",
          logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Puma_logo.svg",
        },
      ]
  return (
    <div>
    <section className="trusted-partners">
      <h2 className="partners-heading">Trusted Partners</h2>
      <div className="partners-container">
        {partners.map((partner) => (
          <div key={partner.name} className="partner-logo">
            <img src={partner.logo || "/placeholder.svg"} alt={`${partner.name} logo`} className="logo-image" />
          </div>
        ))}
      </div>
    </section>
        <Footer/>
    </div>
  )
}

export default TrustedPartner