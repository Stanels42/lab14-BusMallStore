/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;
var tBody = document.getElementsByTagName('tbody')[0];

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(cartItems);
  cart = new Cart(cartItems);
  console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

//  Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tBody.innerHTML = '';
  // console.log(document.getElementsByTagName('tbody'));
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  for(var i= 0; i<cart.items.length; i++){
    var newRow = addElement('tr', tBody);
    addElement('td', newRow, 'x',i);
    addElement('td', newRow, cart.items[i].quantity);
    addElement('td', newRow, cart.items[i].product);
  }
  //  Create a TR
  //  Iterate over the items in the cart
  // Create a TD for the delete link, quantity,  and the item
  //  Add the TR to the TBODY and each of the TD's to the TR

}

function addElement(element, parent, value, id){
  var newElement = document.createElement(element);
  newElement.textContent = value;
  newElement.setAttribute('id', id); 
  parent.appendChild(newElement);
  return newElement;
}
function removeItemFromCart(event) {
  event.preventDefault();
  console.log(event.target.id);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
