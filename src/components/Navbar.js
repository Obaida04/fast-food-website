import React , { useRef, useState, useEffect } from 'react';
import Logo from "../assets/images/logo.png";
import { cart } from "../Data";


const Navbar = () => {
   const searchRef = useRef();
   const cartRef = useRef();
   const navbarRef= useRef();

   const searchHandler = () =>{
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
   };
 
   const cartHandler = () =>{
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
   }
   const navbarHandler = () =>{
    navbarRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    searchRef.current.classList.remove("active");
    // console.log(navbarRef);
   }

  //  const [showNavbar, setShowNavbar] = useState(false);
  // const minWidth = 768; // Minimum width in pixels to show the navbar

  // useEffect(() => {
  //   // Function to check the window width and toggle the navbar
  //   const checkWidthAndToggleNavbar = () => {
  //     if (window.innerWidth >= minWidth) {
  //       setShowNavbar(true);
  //     } else {
  //       setShowNavbar(false);
  //     }
  //   };

  //   // Initial check and event listener
  //   checkWidthAndToggleNavbar();

  //   // Add a window resize event listener to check and toggle the navbar
  //   window.addEventListener('resize', checkWidthAndToggleNavbar);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', checkWidthAndToggleNavbar);
  //   };
  // }, []); 


  return (
    <>
       <header className ="header">
        <a href ="#" className ="logo">
            <img src ={Logo} alt= ""/>
         </a>
      <nav className="navbar" ref={navbarRef}>
      <a href="#home">home</a>
      <a href="#about">about</a>
      <a href="#menu">menu</a>
      <a href="#products">products</a>
      <a href="#review">review</a>
      <a href="#contact">contact</a>
      <a href="#blogs">blogs</a>
    </nav>
        <div className="icons">
          <div className ="fas fa-search" onClick={searchHandler}></div>
          <div className= "fas fa-shopping-cart" onClick={cartHandler}></div>
          <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="Search here..."
          id=" search-box"/>
          <label htmlFor="search-box" className="fas fa-search "></label>

        </div >
        <div className="cart-item-container" ref={cartRef}>
          {cart.map((item ,index) => (
            <div className=" cart-item" key={index}>
            <span className=" fas fa-times"></span>
            <img src={item.img} alt="" />
            <div className="content">
              <h3>cart item 01</h3>
              <div className="price">$13.99</div>
            </div>
            </div>
          ))}
         <h3 className="btn">
          <a href='#'>
          checkout Now 
          </a>
         </h3>
         </div>
        
        </header> 

      
    </>
  )
}

export default Navbar;