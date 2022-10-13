import axios from "axios";
import React, { useState } from 'react'; //useEffect can also be imported
import 'bootstrap/dist/css/bootstrap.min.css';
//import ListItem from './ListItem';

const baseURL = "https://astute-baton-362318.ue.r.appspot.com/api/json/" //should this be all caps var name?



function Home() {
    return <h1>HOME w/ State</h1>
}
    //   <button>
    //     I'm a button
    //   </button>
    // );
  //}
function App() {
    const [ page, setPage ] = useState('home');
    
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPage(response.data);
        });
    }, []);

    if (!page)return null;
    return (
        <>
        <h1>{page[0]}</h1>
        {page == 'home' && <Home />}
        {page == 'breakfast' && <h1>Breakfast</h1>}
        {page == 'lunch' && <h1>Lunch</h1>}
        {page == 'dinner' && <h1>Dinner</h1>}
        <button onClick={() => setPage('breakfast')}>CLICK</button> 
        </>
    )
}
    // const [menuItems, setMenuItems] = useState([
    //     {
    //         "id": 1,
    //         "category": {
    //             "title": "Dinner"
    //         },
    //         "cuisine": {
    //             "label": "American"
    //         },
    //         "title": "Smoked Brisket",
    //         "price": "14.99",
    //         "description": "Served with White Bread, Pickle, Onion, and Two Sides",
    //         "spicy_level": 0
    //     },
    //     {
    //         "id": 2,
    //         "category": {
    //             "title": "Dinner"
    //         },
    //         "cuisine": {
    //             "label": "American"
    //         },
    //         "title": "Nashville Hot Chicken Sandwich",
    //         "price": "12.99",
    //         "description": "Brined overnight in a combination of spices and buttermilk, this sandwich is fried to order and covered in our housemade Nashville Hot sauce. Top with housemade mayo, a sweet and tangy slaw and pickles on a brioche bun.",
    //         "spicy_level": 2
    //     },
    //     {
    //         "id": 3,
    //         "category": {
    //             "title": "Appetizer"
    //         },
    //         "cuisine": {
    //             "label": "Indian"
    //         },
    //         "title": "Chicken Biryani",
    //         "price": "11.99",
    //         "description": "A delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, served with a  flavorful saffron rice.",
    //         "spicy_level": 3
    //     },
    //     {
    //         "id": 4,
    //         "category": {
    //             "title": "Lunch"
    //         },
    //         "cuisine": {
    //             "label": "Thai"
    //         },
    //         "title": "Kobe Basil Beef",
    //         "price": "10.99",
    //         "description": "Beef is stir fried in a delicious sauce with shallots, garlic, Thai chili, and Thai basil, and served on a bed of fragrant jasmine rice. Topping this dish with a crispy, Thai-style fried egg takes it over the top.",
    //         "spicy_level": 4
    // },])


    // const listItems = menuItems.map(item => <ListItem  item={item} />);
    // return <ul>{listItems}</ul>;

//}


export default App
