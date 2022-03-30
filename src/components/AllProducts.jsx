import React from 'react';
import "../styles/product.css";
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { getAllData } from '../redux/actions';
import { Link } from 'react-router-dom';


const AllProducts = () => {
  const dispatch = useDispatch();
  const myFiles = useSelector((state)=>state.MyApiReducer.procucts)
  console.log(myFiles);
  const getPost = async()=>{
    let myApi = await axios.get("http://localhost:3000/posts");
    console.log(myApi);
    dispatch(getAllData(myApi.data))
  }

  useEffect(()=>{
    getPost();
  },[]);
  
  return (
    <>
    <div className="allproductContainer">
      {
        myFiles.map((elem,index)=>{
          return(
            <>
            <Link to={`/posts/${elem.id}`} style={{textDecoration:"none"}}>
            <div className="mainProductContainer">
        <div className="internal photo_content">
          <img src={elem.image} alt={elem.title} />
        </div>
        <div className="internal title_content">
          <h4>{elem.title}</h4>
        </div>
        <div className="internal category_content">
          <h3>{elem.category}</h3>
        </div>
        <div className="internal price_content">
          <h1><span style={{color:"gold"}}>$</span>{elem.price}</h1>
        </div>
      </div>
      </Link>
            </>
          )
        })
      }
    </div>
    </>
  )
}

export default AllProducts