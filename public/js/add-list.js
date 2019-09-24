$(function(){
    $.getJSON('./JSON/bikerentals.json',function(data){
        console.log("success");
        $.each(data.products,function(i,prod){
            if(prod.product_type=="bike"){
            $('.bikes-list')
            .append('<input type="image" id="'+"product-"+prod.id+
            '" src="'+prod.image+'">');
           
            }
            if(prod.product_type=="accessory"){
            $('.accessory-list')
            .append('<input type="image" id="'+"product-"+prod.id+
            '" src="'+prod.image+'">');
            }
            if(prod.product_type=="addon"){
                $('.accessory-list')
                .append('<input type="image" id="'+"product-"+prod.id+
                '" src="'+prod.image+'">');
                }
            
            $('.modal')
            .append('<div class="modal-container" id="product-'+prod.id+'-popup">'
            +'<div class="info-popup">'
            +'<div class="product-name">'+prod.name+'</div>'
            +'<img class="product-image" src="'+prod.image+'">'
            +'<span id="popup-close">&times;</span>'
            +'<div class="product-description">'
            +'<span class="product-price">$'
            +prod.price+'</span>'
            +'<span class="product-type" s>'+prod.product_type+'</span>'
            +'<button class="shopitem-button" >Add to Cart</button>'
            +'</div>'
            +'</div></div>')
                   
        },

        ),error(function(){
            console.log("Cant read json file!");
        })
    })


})