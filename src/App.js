import React,{Component} from "react";
import Top from "./JS/Top";
import Home from "./JS/Home"
import Rental from "./JS/Rental";

export default class App extends Component{
  render(){
    return(
      <div class="main-container">
          <Top></Top>
          <Home></Home>
          <Rental></Rental>
      </div>
    )
  }
}