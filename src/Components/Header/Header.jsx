import React, {useState, useEffect} from 'react'
import {Search, FloatCart, Toggle} from '../index'

import './style.css'
import logo from '../../img/Header.png'

const Header = () => {
    //cart
    const [showCart, setShowCart] = useState(false)
    //
    const openHandler = () =>{
      if(!showCart){
        setShowCart(true)
      } else{
        setShowCart(false)
      }
    }
    const closeHandler = ()=> {
      setShowCart(false)
    }
    let sideBar
    if(showCart){
      sideBar=<FloatCart close={closeHandler} cartcontainer={"Cartcontainer"}/>
    }
    //
    //cart

    //Search
      const [searched, setSearched] = useState("")
      const [filter, setFilter] = useState({
        name: []
      })
      const updateSearch=(newSearchTerm)=>{
        
        console.log(newSearchTerm)

        const variable = {
      
          filter: filter,
          searched: newSearchTerm
        }
        setSearched(newSearchTerm)
      }
    //
  return(
    <header className="container">
      <div className="logo">
        <img src={logo} alt="PokeStore"/>
      </div>
      <Search
        refreshFunction={updateSearch}
      />
      <div className="theme">
        <button>Theme</button>
        
      </div>
      <div className="purchase">
        {sideBar}
        <Toggle click={openHandler}/>
        
      </div>
    </header>
    
  )
}

export default Header