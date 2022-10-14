import axios from "axios";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Breakfast from "./Breakfast";
import Dinner from "./Dinner";
import Lunch from "./Lunch";
import Dessert from "./Dessert";
import Appetizer from "./Appetizer";
import Side from "./Side";
import NavBar from "./NavBar";

function App() { //alt can use export default function App
    const baseURL = "https://astute-baton-362318.ue.r.appspot.com/api/json/" //should this be all caps var name?
    const [data, setData] = useState([]);
    const [page, setPage] = useState ('Breakfast')
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        });
    }, []); //the [] keeps it from pinging more than once

    if (data.length === 0) 
        return (
            <>
                <h1>Loading...</h1>
            </>
        );

    if (data.length !== 0) {
        return (
            <div className="container">
                <div className="row justify-content-center"></div>
                    <Appetizer appetizerData = {data} />
                <div className="row justify-content-center">
                    <Appetizer appetizerData = {data} />
                    <Breakfast breakfastData = {data} />
                    <Dessert dessertData = {data} />
                    <Dinner dinnerData = {data} />
                    <Lunch lunchData = {data} />
                    <Side sideData = {data} />
                </div>
            </div>
        )
    }
}    
export default App
