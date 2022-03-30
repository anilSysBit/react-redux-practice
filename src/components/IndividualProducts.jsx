import axios from 'axios';
import React, { useEffect } from 'react';
import "../styles/product.css"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIndividualData } from '../redux/actions';
const IndividualProducts = () => {
    const {productId} = useParams();
    console.log(productId);
    const dispatch = useDispatch();
    const myIndiFiles = useSelector((state) => state.MyApiReducer.individual);
    const allFiles = useSelector((state)=>state.MyApiReducer.procucts)
    console.log(allFiles);
    console.log(myIndiFiles);
    const getIndiData = async () => {
        const indiApi = await axios.get(`http://localhost:3000/individual/${productId}`);
        console.log(indiApi);
        dispatch(getIndividualData(indiApi.data))
    }

    const idData = allFiles[productId -1];
    console.log(idData);
    useEffect(() => {
        getIndiData();
    }, [myIndiFiles])
    return (
        <>
            <div className="allIndividualContainer">
                <div className="mainIndiContainer">
                <div className="indivi heading_individual">
                    <h1>{idData.title}</h1>
                </div>
                <div className="indivi photo_container">
                    <img src={idData.image} alt={allFiles.title} />
                </div>
                <div className="indivi description_container">
                    <p>{myIndiFiles.description}</p>
                </div>
                <div className="indivi price_container">
                    <h1>${idData.price}</h1>
                </div>
                <div className="indivi cart_container">
                    <button className="btn btn-dark">Add TO CART</button>
                </div>
                <div className="indivi category_container">
                    <h1>{idData.category}</h1>
                </div>
                </div>
            </div>
        </>
    )
}

export default IndividualProducts