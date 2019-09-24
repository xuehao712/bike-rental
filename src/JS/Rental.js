import React,{Component} from "react";

export default class extends Component{
    render(){
        return(
            <div>
                <div class="rental-container">
                    
                        <h1>Featured Bikes</h1>
                        <div class="bikes-list"> 
                        </div>                 
                        <h1>Accessory</h1>
                        <div class="accessory-list">
                        </div>
                    
                </div>
                <div class="modal">
                    <div class="modal-container" id="shopping-cart" >
                        <div class="cart-popup">
                            <h3>Shopping Cart</h3>
                            <div class="cart-content">
                                <span class="cart-header" id="cart-item">Items</span>
                                <span class="cart-header" id="cart-price">Price</span>
                                <span class="cart-header" id="cart-quantity">Quantity</span>
                            </div>
                            <div class="cart-items">

                            </div>
                            <div id="notify">
                                There is nothing in your shopping cart!
                            </div>
                            <h3 class="cart-total-name">Total</h3>
                            <span class="cart-total-price">$0</span>
                            <button class="cart-checkout">Checkout</button>
                        </div>
                    </div>
                </div>
               
           </div>
               
        )
    }
}