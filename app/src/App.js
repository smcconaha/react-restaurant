import axios from "axios";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'

import Breakfast from "./Breakfast";
import Dinner from "./Dinner";
import Lunch from "./Lunch";
import Dessert from "./Dessert";
import Appetizer from "./Appetizer";
import Side from "./Side";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";


function App() { //alt can use export default function App
    const baseURL = "https://astute-baton-362318.ue.r.appspot.com/api/json/" //should this be all caps var name?
    const [data, setData] = useState([]);
    const [page, setPage] = useState ('Home')
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        });
    }, []); //the [] keeps it from pinging more than once

    if (data.length === 0) 
        return (
            <>
                <div className='container'>
                    <Header />
                    <Home />
                    <Footer />
                </div>
            </>
        );

    if (data.length !== 0) {
        return (
            <>
                <div className='container'>
                    <Header handleClick={setPage}/>
                    {page === 'Home'&& <Home />}
                    {page === 'Appetizers' && <Appetizer appetizerData={data}/>}
                    {page === 'Lunch' && <Lunch lunchData={data}/>}
                    {page === 'Dinner' && <Dinner dinnerData={data}/>}
                    {page === 'Breakfast' && <Breakfast breakfastData={data}/>}
                    {page === 'Dessert' && <Dessert dessertData={data}/>}
                    {page === 'Side' && <Side sideData={data}/>}
                    <Footer />
                </div>
            </>
        )
    }
}    
export default App
