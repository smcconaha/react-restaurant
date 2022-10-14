import axios from "axios";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Breakfast from "./Breakfast";
import Dinner from "./Dinner";
import Lunch from "./Lunch";
import Dessert from "./Dessert";
import Appetizer from "./Appetizer";
import Side from "./Side";

function App() { //alt can use export default function App
    const baseURL = "https://astute-baton-362318.ue.r.appspot.com/api/json/" //should this be all caps var name?
    const [data, setData] = useState([]);
    const [page, setPage] = useState ('Breakfast')
    // const [type, setType] = useState("");
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        });
    }, []);
    console.log(data);

    // const condensedMenu = data.filter((item) => {
    //     return item.category.title === type;
    // });

    // let filLowerMen = condensedMenu.slice(0, 9);

    if (data.length === 0) 
        return (
            <>
                <h1>Loading...</h1>
            </>
        );

    if (data.length !== 0) {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <Breakfast breakfastData = {data} />
                    {/* <Card
                    key={id}
                    title={title}
                    category={category.title}
                    description={description}
                    price={price}
                    /> */}
                </div>
            </div>
        )
    }
}    
export default App
