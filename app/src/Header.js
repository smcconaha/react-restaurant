export default function Header(props) {
    return (
        <>
            <div id='header'>
                <div className='container '>
                    <header className="d-flex align-items-center lh-10 py-1">
                        <img src={require('./image/catPancakes.png')} onClick={() => props.handleClick('Home')} alt='logo' className='catPancake w-50 p-3'></img>
                        <ul className="nav py-1 mb-2)">
                            <li className="nav-item fs-4"><button onClick={() => props.handleClick('Home')} className="nav-link text-dark fw-bold">Home</button></li>
                            <li className="nav-item fs-4"><button onClick={() => props.handleClick('Breakfast')} className="nav-link text-dark fw-bold">Breakfast</button></li>
                            <li className="nav-item fs-4"><button onClick={() => props.handleClick('Lunch')} className="nav-link text-dark fw-bold">Lunch</button></li>
                            <li className="nav-item fs-4"><button onClick={() => props.handleClick('Dinner')} className="nav-link text-dark fw-bold">Dinner</button></li>
                            <li className="nav-item fs-4"><button onClick={() => props.handleClick('Appetizers')} className="nav-link text-dark fw-bold">Appetizers</button></li>
                            <li className="nav-item fs-4"><button onClick={() => props.handleClick('Side')} className="nav-link text-dark fw-bold">Sides</button></li>
                            <li className="nav-item fs-4"><button onClick={() => props.handleClick('Dessert')} className="nav-link text-dark fw-bold">Treats</button></li>
                        </ul>
                    </header>
                </div>
            </div>
        </>
    )
}