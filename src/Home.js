import React from 'react'
import "./Home.scss"
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Apple/iPhone12/Mini/V263044986_Wireless_iPhone_12_Launch_Tall_hero_1500x600._CB416770138_.jpg" alt="" />
                <div className="home__row">
                    <Product 
                    title="Redmi Note 9 Pro (Interstellar Black, 4GB RAM, 64GB Storage)- Latest 8nm Snapdragon 720G & Alexa Hands-Free | Upto 6…"
                    price={"12,999.00"}
                    image="https://images-eu.ssl-images-amazon.com/images/I/91Lr-OxVKjL._AC_UL200_SR200,200_.jpg"
                    rating={3} />

                    <Product title="Redmi 9A (Nature Green, 2GB Ram, 32GB Storage)"
                    price={"12,499"}
                    image="https://images-eu.ssl-images-amazon.com/images/I/710fuhtgISL._AC_UL200_SR200,200_.jpg"
                    rating={4}  />
                </div>
                <div className="home__row">
                    <Product 
                    title="Redmi 9 Prime (Space Blue, 4GB RAM, 64GB Storage)- Full HD+ Display & AI Quad Camera"
                    price={"9,999.00"}
                    image="https://images-eu.ssl-images-amazon.com/images/I/719lhUzicYL._AC_UL200_SR200,200_.jpg"
                    rating={4} />

                    <Product title="Redmi 9A (Sea Blue, 3GB Ram, 32GB Storage)"
                    price={ "7,499.00"}
                    image="https://images-eu.ssl-images-amazon.com/images/I/71sxX9aLtnL._AC_UL200_SR200,200_.jpg"
                    rating={4} />

                    <Product title="Samsung Galaxy M31 Prime Edition (Ocean Blue, 6GB RAM, 128GB Storage)"
                    price={ "16,499.00"}
                    image="https://images-eu.ssl-images-amazon.com/images/I/71zb0UaK0PL._AC_UL200_SR200,200_.jpg"
                    rating={4} />
                </div>
                <div className="home__row">
                    <Product title="Redmi 9 Prime (Matte Black, 4GB RAM, 64GB Storage) - Full HD+ Display & AI Quad Camera"
                    price={"9,999.00"}
                    image="https://images-eu.ssl-images-amazon.com/images/I/711%2BlAQXogL._AC_UL200_SR200,200_.jpg"
                    rating={4}  />
                </div>
            </div>
        </div>
    )
}

export default Home
