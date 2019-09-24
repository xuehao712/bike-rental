import React,{Component} from "react";
import Top from "./JS/Top";
import Home from "./JS/Home"
import Rental from "./JS/Rental";
import Location from "./JS/Location";

export default class App extends Component{
  render(){
    return(
      <div class="main-container">
          <Top ></Top>
          <Home ></Home>
          <Location ></Location>
          <Rental ></Rental>
          
      </div>
    )
  }
}