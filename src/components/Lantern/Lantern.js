import React from 'react'
import "./lantern.css"
const Lantern = () => {
  return (
    <div id="Ramadan-lantern">

    <div id="top"></div>
    <div id="center">
      <div class="up">
        <div class="line max-left"></div>
        <div class="line close-left"></div>
        <div class="line max-right"></div>
        <div class="line close-right"></div>
      </div>
      <div class="down">
        <div class="line left-side"></div>
        <div class="circle-line left-circle">
          <div class="cir a"></div>
          <div class="cir b"></div>
          <div class="cir c"></div>
          <div class="cir d"></div>
        </div>
        <div class="line left-side other1"></div>
        <div id="moon"></div>
        <div class="circle-line right-circle">
          <div class="cir a"></div>
          <div class="cir b"></div>
          <div class="cir c"></div>
          <div class="cir d"></div>
        </div>
        <div class="line right-side other2"></div>
        <div class="line right-side"></div>
      </div>
      
    </div>
    <div id="bottom">
      <div class="cont3"></div>
      <div class="cont2">
        <div class="item left"></div>
        <div class="item right"></div>
      </div>
      <div class="cont1">
      <div class='skew'></div>
      <div class='skew two'></div>
      <div class='skew three'></div>
      </div>
    </div>
    <p className='pn'>Ramadan Careem</p>
   
  </div>
  )
}

export default Lantern
