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
    const baseURL = "https://8000-smcconaha-backendbistro-b3dyyt5x20u.ws-us75.gitpod.io/bistro/menu/" //should this be all caps var name?
    const [data, setData] = useState([]);
    const [page, setPage] = useState ('Home')
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data)
            setData(response.data);
        });
    }, []); //the [] keeps it from pinging more than once

    if (data.length === 0) 
        return (
            <>
                <div className='container'>
                    <Header />
                    <div className="fs-3 text-danger"><strong>Please wait while page loads</strong></div>
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
