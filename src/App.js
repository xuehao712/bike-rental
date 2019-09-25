import React,{Component} from "react";
import Top from "./JS/Top";
import Home from "./JS/Home"
import Rental from "./JS/Rental";
import Location from "./JS/Location";
import Copyright from "./JS/Copyright";

export default class App extends Component{
  render(){
    return(
      <div class="main-container">
          <Top ></Top>
          <Home ></Home>
          <Rental ></Rental>
          <Location ></Location>
          <Copyright></Copyright>
      </div>
    )
  }
}