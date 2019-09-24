import React,{Component} from "react";

export default class top extends Component{
    render(){
        return(
            <div class="top-container">   
                    <nav class="primary-menu">
                        <ul>
                            <li><a href="#jump-home">Home</a></li>
                            <li><a href="#jump-rental">Rentals</a></li>
                            <li><a href="#jump-location"id="location">Location</a></li>
                            <li><a href="#jump-cart" id="shopping-cart-menu">MyCart </a></li>
                        </ul>
                    </nav>  
            </div>
        )
    }
}