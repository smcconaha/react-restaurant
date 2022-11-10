export default function Breakfast (props) {
    let breakfastFilter = props.breakfastData.filter(data => data.cuisine.title === "Breakfast")
    return (
        <>
            {breakfastFilter.map((food) => {
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