
$(function(){
   var removeItemButton=$("#cart-remove");
   for(var i =0;i<removeItemButton.length;i++){
       var button=removeItemButton[i];
       button.on('click',removeItem);
   }

   var quantityInput=$('#cart-quantity-input');
   for(var i =0;i<quantityInput.length;i++){
       var choice=quantityInputs[i];
       choice.on('change',quantityChanged);
   }



    $(document).on('click','.shopitem-button',addItemClicked);



  $('.cart-checkout').on('click',checkoutClicked);

   $('.rental-container').on('click','input',function(){
    switch($(this).attr('id')){
        case 'product-1':
        $('#product-1-popup').css({display:'block'})
        break;
        case 'product-2':
        $('#product-2-popup').css({display:'block'})
        break;
        case 'product-3':
        $('#product-3-popup').css({display:'block'})
        break;
        case 'product-4':
        $('#product-4-popup').css({display:'block'})
        break;
        case 'product-5':
        $('#product-5-popup').css({display:'block'})
        break;
        case 'product-6':
        $('#product-6-popup').css({display:'block'})
        break;
    }
})

$(document).on('click','#popup-close',function(){
    $('.modal-container').css({display:'none'});
})
$(window).on('click',function(event){
    if(event.target.className=='modal-container'){
        $('.modal-container').css({display:'none'});
    }
})

$('#shopping-cart-menu').on('click',function(){
    var cartItems = document.getElementsByClassName('cart-items')[0]
    
    if(cartItems.hasChildNodes()===true){
        $('#notify').hide();
        $('.cart-content').show();
        $('.cart-total-name').show();
        $('.cart-total-price').show();
        $('.cart-checkout').show();
    }
    if(cartItems.hasChildNodes()===false){
        $('.cart-content').hide();
        $('.cart-total-name').hide();
        $('.cart-total-price').hide();
        $('.cart-checkout').hide();
        $('#notify').show();
    }
    $('#shopping-cart').css({display:'block'})
})

})




function checkoutClicked(){
    
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var type=cartItems.getElementsByClassName('cart-type');
    var count=0;
    for(var i =0; i<type.length;i++){
        if(type[i].innerText ==="bike"){
            count++;
        }
    }
    while(cartItems.hasChildNodes()==true){
        if(count>0){
            while(cartItems.hasChildNodes()){
                cartItems.removeChild(cartItems.firstChild);
            }
            updateCartTotal();
            alert('Successful!')
        }
        else {
            alert("You have to select a bike along with your accessory!");
            return;
        }
    }

}

function addItemClicked(event){
    var button=$(event.target);
    var shopItem=button.parent().parent();
    var name=shopItem.find('.product-name').text();
    var price=shopItem.find('.product-price').text();
    var img=shopItem.find('.product-image').attr('src');
    var type=shopItem.find('.product-type').text();
   
    addItemToCart(name,price,img,type);
    updateCartTotal();
    
 
}


function addItemToCart(name, price, img,type) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-name');
    var count=0;
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == name) {
            count++;
        }
    }
    
    if(cartItems.hasChildNodes()==false||count==0){
        alert("You have successfully added your item!");
    }
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == name) {
            alert('This item is already added to the cart.');
            return
        }
    }
    
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-image" src="${img}" width="100" height="100">
            <span class="cart-name" >${name}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="remove-cart" type="button">REMOVE</button>
        </div>
        <span class="cart-type">${type}</span>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('remove-cart')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function quantityChanged(event){
    var input=event.target;
    if(isNaN(input.value)||input.value<=0){
        input.value=1;
    }
    updateCartTotal();
}

function removeCartItem(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

