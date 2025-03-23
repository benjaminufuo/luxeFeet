import { useEffect, useState } from "react";
import "./product.css";
import { IoMdCart } from "react-icons/io";
import ProductManufauture from "./ProductManufauture";
import ProductReview from "./ProductReview";
import axios from "axios";
import { useConstomHook } from "../../global/Context";



const Product = () => {

  const [add, setAdd] = useState(0)

  const [toggle, setToggle] = useState(1)

  // const [togglePic, setTogglePic] = useState(1)

  const [isActive, setIsActive] = useState("DISCRIPTION")

  const [activeCircle, setActiveCircle] = useState("1")

  // const [product, setProduct] = useState(null)

  // const [addCart, setAddCart] = useState([])

  const { addToCart } = useConstomHook();

    const [products, setProducts] = useState([]);
  


    const baseUrl = "https://ecommerce-project-m2bb.onrender.com/api/v1";


  const getProduct = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getOneProduct/67d31af570864bcc34c46273`)
      setProducts(response.data.data)
      console.log("this is the res", response.data.data)
    } catch (error) {
      console.log("error getting product", error)
    }
  }


  useEffect(() =>{
    getProduct(setProducts)
  },[])

  // const addToCart = () => {
  //   if (!product) return; 
  // };

  return <>
  <div className="ProductBody">
    <div className="ProductBodySmall">
      <div className="ShopingCartBodySmallHeader">
        <h3><span className="HeaderHome">HOME </span> / PRODUCT</h3>
      </div>

      <div className="ProductBodySmallNav">
        <div className="ProductBodySmallNav1">

          <img className="Img1" src={products?.image?.imageUrl} alt="" />
          {/* {togglePic === 1 ?
          (<img className="Img1" src="https://preview.colorlib.com/theme/footwear/images/item-1.jpg" alt="" />) 
          : togglePic === 2 ? (<img className="Img1" src="https://preview.colorlib.com/theme/footwear/images/item-2.jpg" alt="" />) 
          : togglePic === 3 ? (<img className="Img1" src="https://preview.colorlib.com/theme/footwear/images/item-3.jpg" alt="" />) 
          : togglePic === 4 ? (<img className="Img1" src="https://preview.colorlib.com/theme/footwear/images/item-4.jpg" alt="" />) : null   } */}
        </div>
        <div className="ProductBodySmallNav2">
          <div className="ProductBodySmallNav2Small">
            <h3>{products?.category}</h3>
            <h2>₦{products?.price}</h2>
            <h5>(74 Rating)</h5>
            <p className="Content">{products?.description}
            </p>

            <h4>SIZE</h4>
            <div className="ProductBodySmallNav2SmallSizesBox">
              <div className="ProductBodySmallNav2SmallSizesBoxes">

                {products?.sizes}
              </div>
            </div>


            <h4>WIDTH</h4>
            <div className="ProductBodySmallNav2SmallSizesBox2">
                <div className="ProductBodySmallNav2SmallSizesBox22">
                  M
                </div>
                <div className="ProductBodySmallNav2SmallSizesBox22">
                  W
                </div>
            </div>

            <div className="ProductBodySmallNav2AddBox">
              <div className="ProductBodySmallNav2AddBoxesShort" onClick={() => 
                add <= 0 ? 0 : setAdd(add - 1)}>-</div>
              <div className="ProductBodySmallNav2AddBoxesLong">{add}</div>
              <div className="ProductBodySmallNav2AddBoxesShort" onClick={() => setAdd(add + 1)}>+</div>
            </div>

            <div className="Add2Cart"><IoMdCart size={20} onClick={() => addToCart(product)}/>Add to Cart</div>
          </div>
        </div>
      </div>

      <div className="ProductBodySmallDotBox">
        <div className={`${ activeCircle === "" ? "ACTIVECIRCLE" : "ProductBodySmallDotBox1"  }`}
         onClick={() => {setTogglePic(1), setActiveCircle("1")}}
        >
          
        </div>
        <div className={`${ activeCircle === "" ? "ACTIVECIRCLE" : "ProductBodySmallDotBox1" }`}
        onClick={() => {setTogglePic(2), setActiveCircle("2")}}
        >
        </div>
        <div className={`${ activeCircle === "" ?  "ACTIVECIRCLE" : "ProductBodySmallDotBox1" }`}
        onClick={() => {setTogglePic(3), setActiveCircle("3")}}
        >
        </div>
        <div className={`${ activeCircle === "" ?  "ACTIVECIRCLE" : "ProductBodySmallDotBox1" }`}
        onClick={() => {setTogglePic(4), setActiveCircle("4")}}
        >
        </div>
        
      </div>

      <div className="ProductBodySmallDescriptionBox">
        <div className={`${isActive === "DISCRIPTION" ? "ACTIVE" : "ProductBodySmallDescriptionBoxs"}`}
        onClick={() => {setToggle(1), setIsActive("DISCRIPTION")}}
        >DISCRIPTION</div>
        <div className={`${isActive === "MANUFATURE" ? "ACTIVE" : "ProductBodySmallDescriptionBoxs"}`}
        onClick={() => {setToggle(2), setIsActive("MANUFATURE")}}
        >MANUFATURE</div>
        <div className={`${isActive === "REVIEW" ? "ACTIVE" : "ProductBodySmallDescriptionBoxs"}`}
        onClick={() => {setToggle(3), setIsActive("REVIEW")}}
        >REVIEW</div>
      </div>

      

  {toggle === 1 ? (<div className="ProductBodySmallDescriptionBoxOutline">
        <p className="P">
        Even the all-powerful Pointing has no control about the blind 
        texts it is an almost unorthographic life One day however a small line of blind text
         by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        </p>

        <p className="P">
        When she reached the first hills of the Italic Mountains, she had a last view 
        back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village 
        and the subline of her own road, the Line Lane. Pityful a rethoric question ran over 
        her cheek, then she continued her way.
        </p>

        <ul className="P2">
          <li>The Big Oxmox advised her not to do so  </li>
          <li>Because there were thousands of bad Commas </li>
          <li>Wild Question Marks and devious Semikoli</li>
          <li>She packed her seven versalia</li>
          <li>tial into the belt and made herself on the way.</li>
        </ul>
      </div>) : toggle === 2 ? <ProductManufauture/> : toggle === 3 ? <ProductReview/> : null }
    </div>
  </div>;
  </>
};

export default Product;
