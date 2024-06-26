'use client';

import "./Home.css";
import { useEffect,useState } from "react";
import db from "./firebase";
import firebase from "firebase/compat/app";


const Home = ()=>{

  const [products,setProducts] = useState([{
        product_name : "Product Name",
        product_price : "55",
        product_detail : " Product detail" ,
        leading_image : "Some Image",
        first_image : "first image",
        second_image : "second image",
        third_image : "third image",
        forth_image : "forth image",
        quantity : 1,
        sizes : "S",
        timestamp : firebase.firestore.FieldValue.serverTimestamp()}]);

  useEffect(()=>{
    db.collection('products').orderBy("timestamp","desc").onSnapshot(snapshot=>{
      setProducts(snapshot.docs.map(doc => doc.data()));
      console.log(snapshot.docs.map(doc => doc.data()));
    });
  },[]);

  return (
    <div className="Home">
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

      <div className="desktop_menu_item_selected_style_for_home_page">
        <div className="nevigation_btn_background_style_in_home_page h"> </div>
        <div className="nevigation_btn_background_style_in_home_page bg_white"></div>
        <div className="nevigation_btn_background_style_in_home_page bg_white"></div>
        <div className="nevigation_btn_background_style_in_home_page bg_white"></div>
        <div className="nevigation_btn_background_style_in_home_page bg_white o_s"></div>
      </div>

      <div className="landing_image_area">
        <div className="grey_shade_in_landing_image"></div>
        <div className="heading_text_and_btn_area">
          <h1 className="large_image">Comfort Zone</h1>
          <span className="intro_text">Comfort Zone is a brand targeting the youth to provide their desired outfits.</span>
          <div className="cart_btn_in_heading">Cart</div>
        </div>
      </div>

      <div className="products_area">
        <h2 className="products_text">Products</h2>
      </div>
    </div>
    );
}

export default Home;