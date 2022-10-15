export default function Dessert (props) {
    let dessertFilter = props.dessertData.filter(data => data.category.title === "Dessert")
    return (
        <>
            {dessertFilter.map((food) => {
                return (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{food.title}</h5>
                            <div className="card-text">${food.price}</div>
                            <div className="card-text">{food.description}</div>
                        </div>
                    </div>
                )
            })}
        </>
    )    
}