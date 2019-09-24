import React,{Component} from 'react';

export default class Location extends Component{
    render(){
        return(
            <div class="location-container" id="jump-location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3988854102254!2d-73.98295378414852!3d40.753250743027046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2595c8bac5d67%3A0xe068fc34bb4f8a58!2sTopView%20Sightseeing!5e0!3m2!1sen!2sus!4v1569358397813!5m2!1sen!2sus" 
            id="location-map" frameborder="0" allowfullscreen=""></iframe>
            </div>
        )
    }
}