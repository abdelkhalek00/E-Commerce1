let Products = [];
async function getCartPro() {
  let res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
    headers: {
      "Content-Type": "application/json", // specify the content type
      token: localStorage.getItem("userToken").slice(1, -1),
    },
  });
  let resFinal = await res.json();
  Products = resFinal.data.products;
  console.log(Products);
  disCartPro();
}
getCartPro();


function disCartPro() {
  let pro = ``;
  for (let i = 0; i < Products.length; i++) {
    pro += `
        <div class="cart-object">
                <i class="fa-solid fa-trash"></i>
                <img src="${Products[i].product.imageCover}" alt="">
                <div class="cart-details">
                    <div class="cart-detail">
                        <p>Name</p>
                        <p>${Products[i].product.title}</p>
                    </div><!-- cart-detail -->
                    <div class="cart-detail">
                        <p>Quantity</p>
                        <p>${Products[i].count}</p>
                    </div><!-- cart-detail -->
                    <div class="cart-detail">
                        <p>Price</p>
                        <p>${Products[i].price}</p>
                    </div><!-- cart-detail -->
                    <div class="cart-detail">
                        <p>Total</p>
                        <p>500$</p>
                    </div><!-- cart-detail -->
                </div><!-- cart-details -->
            </div><!-- cart-object -->



             <div class="product">
                    <div class="pro-img">
                        <img src="${Products[i].product.imageCover}" alt="">
                    </div>
                    <div class="pro-name">
                        <h3>Name</h3>
                        <p>${Products[i].product.title}</p>
                    </div>
                    <div class="pro-color">
                        <h3>color</h3>
                        <img src="./imgs/EUnwP2NXkAIICky.jpg" alt="">
                    </div>
                    <div class="pro-quantity">
                        <h3>Quantity</h3>
                        <p>1</p>
                    </div>
                    <div class="pro-price">
                        <h3>Price</h3>
                        <p>${Products[i].price}</p>
                    </div>
                    <div class="pro-total">
                        <h3>Total</h3>
                        <p>$2000</p>
                    </div>
                </div>
    `
  }
  document.querySelector(".cart-body").innerHTML = pro;
}