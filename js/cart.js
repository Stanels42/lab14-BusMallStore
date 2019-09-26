/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;
var tBody = document.getElementsByTagName('tbody')[0];

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
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
  for(var i = 0; i < cart.items.length; i++){
    var newRow = addElement('tr', tBody);
    addElement('td', newRow, 'x', i);
    addElement('td', newRow, cart.items[i].quantity);
    addElement('td', newRow, cart.items[i].product);
  }

}

function addElement(element, parent, value, id = -1){

  var newElement = document.createElement(element);
  newElement.textContent = value;

  if (id !== -1){
    newElement.setAttribute('id', id);
  }

  parent.appendChild(newElement);

  return newElement;
}

function removeItemFromCart(event) {
  event.preventDefault();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.items.splice(event.target.id, 1);
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
