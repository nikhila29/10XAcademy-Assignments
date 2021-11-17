import './App.css';
import React from 'react';
// Import dependencies
var arrow="<"
function App() {
return (
  <div className="App">
{
  React.createElement('div',{className:"site"},
  React.createElement('div',{className:"order"},
  React.createElement('div',{className:"nav"},
  React.createElement('div',{className:"container"},
  <>
  <a href="#" className="nav-arrow arrow">{arrow}</a>
  <h1 className="nav-text">Alan Ford</h1>
  <span className="sub-text">00005152</span>
  <button className="btn nav-btn"> Print</button></>))))
}
{
  React.createElement('div',{className:"container"},
  React.createElement('div',{className:"container-info block"},
  <><p className="text"><span className="text-label">Appointment:</span>9:00(24-05-2016)</p>
  <p className="text"><span className="text-label">Email:</span>alan.form@email.ni</p>
  <p className="text"><span className="text-label">Phone:</span>+31123456789</p></>))
}
{
  React.createElement('div',{className:"order-info grid block"},
  React.createElement('div',{className:"unit one-third"},<>
  <p class="text text-label">Status</p>
  <p class="text order-status">In Progress</p></>),
  React.createElement('div',{className:"unit one-third"},<>
  <p class="text text-label">Door</p>
  <p class="text">Mark</p></>),
  React.createElement('div',{className:"unit one-third"},
  <><p class="text text-label">Time</p>
  <p class="text">10:30(25-05-2016)</p></>))
}
{
  React.createElement('ul',{className:"product-list block"},
  <><li class="product"><label class="product-img custom-checkbox"><input type="checkbox"
  class="product-input" value="on"></input>
  <span class="custom-checkbox-indicator"></span>
  <img src='https://www.w3schools.com/howto/img_avatar.png'></img></label>
  <a href="#" class="product-desc">
    <span class="product-arrow arrow"></span></a></li></>,
    React.createElement('div',{className:"bfc"},
    <><h3 class="product-title text">Boltaart Bosbessen</h3>
    <p class="text-help text">Overheerlijke $ nbsp;Boltaart met Bosbesson uit
     de keuken van de Bijenkorf</p></>))
}
  </div>
)
};
export default App