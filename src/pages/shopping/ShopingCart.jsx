import "./shoppingCart.css";
import { useConstomHook } from "../../global/Context";
import { useEffect, useState } from "react";

const ShopingCart = () => {
  const { cart, deleteFromCart } = useConstomHook();
  const [subTotal, setSubTotal] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubTotal(newSubtotal);

    const deliveryFee = 1000;
    setDelivery(deliveryFee);

    const discountAmount = newSubtotal * 0.03;
    setDiscount(discountAmount);

    const newTotal = newSubtotal + deliveryFee - discountAmount;
    setTotal(newTotal);
  }, [cart]);
  return (
    <div className="ShopingCartBody">
      <div className="ShopingCartBodySmall">
        <div className="ShopingCartBodySmallHeader">
          <h3>
            <span className="HeaderHome">HOME </span> / SHOPING CART
          </h3>
        </div>

        <div className="ShopingCartBodySmallBox">
          <div className="ShopingCartBodySmallBoxSmaller">
            <div className="CircleBox">
              <div className="Circle">
                <p>1</p>
              </div>
              <h5>SHOPPING CART</h5>
            </div>
            <hr className="hr" />

            <div className="CircleBox">
              <div className="Circle">
                <p>2</p>
              </div>

              <h5>CHECKOUT</h5>
            </div>
            <hr className="hr" />

            <div className="CircleBox">
              <div className="Circle">
                <p>3</p>
              </div>
              <h5>ORDER COMPLETE</h5>
            </div>
          </div>
        </div>
        <div className="ShopingCartBodySmallTable">
          <div className="ShopingCartBodySmallProductHead">
            <div className="ProductBox">
              <h3>PRODUCT DETAILS</h3>
            </div>
            <div className="PriceBox">
              <h3>PRICE</h3>
              <h3>QUANTITY</h3>
              <h3>TOTAL</h3>
              <h3>REMOVE</h3>
            </div>
          </div>
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <div className="ShopingCartBodyRow" key={index}>
                <div className="ShopingCartBodyRowImgBox">
                  <div className="ShopingCartBodyRowImgBox1">
                    <img className="img" src={product.image.imageUrl} />
                  </div>
                  <p>{product.description}</p>
                </div>
                <div className="ShopingCartBodyRow2">
                  <p>₦{product.price}</p>
                  <div className="Input">{product.quantity}</div>
                  <p>₦{product.price * product.quantity}</p>
                  <div
                    className="cancleBox"
                    onClick={() => deleteFromCart(product)}
                  >
                    x
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No item added</p>
          )}
        </div>
        <div className="ShopingCartBodyCalBox">
          <div className="Nav">
            <input
              type="text"
              className="Coupon"
              placeholder="Your Coupon Number....."
            />
            <div className="Nav2">
              <p>Apply Coupon</p>
            </div>
          </div>
          <div className="Subtotal">
            <div className="SubtotalSmall">
              <div className="SubtotalSmalls">
                <span>Subtotal:</span>
                <span>₦{subTotal.toFixed(2)}</span>
              </div>
              <div className="SubtotalSmalls">
                <span>Delivery:</span>
                <span>₦{delivery.toFixed(2)}</span>
              </div>
              <div className="SubtotalSmalls">
                <span>Discount:</span>
                <span>₦{discount.toFixed(2)}</span>
              </div>
              <hr />
              <div className="SubtotalSmalls">
                <span>Total:</span>
                <span>₦{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ShopingCartBodySmallRelated">
          <h2>RELATED PRODUCT</h2>
        </div>

        <div className="ShopingCartBodySmallRelatedBox">
          <div className="ShopingCartBodySmallRelatedBoxs">
            <div className="imgBox">
              <img
                className="Imgg"
                src="https://preview.colorlib.com/theme/footwear/images/item-1.jpg"
                alt=""
              />
            </div>
            <h2>WOMEN'S BOOTS SHOES</h2>
            <h2>MACA</h2>
            <h3>$139.00</h3>
          </div>
          <div className="ShopingCartBodySmallRelatedBoxs">
            <div className="imgBox">
              <img
                className="Imgg"
                src="https://preview.colorlib.com/theme/footwear/images/item-2.jpg"
                alt=""
              />
            </div>
            <h2>Women's Minam</h2>
            <h2>MEAGHAN</h2>
            <h3>$139.00</h3>
          </div>
          <div className="ShopingCartBodySmallRelatedBoxs">
            <div className="imgBox">
              <img
                className="Imgg"
                src="https://preview.colorlib.com/theme/footwear/images/item-3.jpg"
                alt=""
              />
            </div>
            <h2>MEN'S TAJA</h2>
            <h2>COMMISIONER</h2>
            <h3>$139.00</h3>
          </div>
          <div className="ShopingCartBodySmallRelatedBoxs">
            <div className="imgBox">
              <img
                className="Imgg"
                src="https://preview.colorlib.com/theme/footwear/images/item-4.jpg"
                alt=""
              />
            </div>
            <h2>RUSS MEN'S SNEAKERS</h2>
            <h2>Maca</h2>
            <h3>$139.00</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
