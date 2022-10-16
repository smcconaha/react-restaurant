export default function Lunch (props) {
    let lunchFilter = props.lunchData.filter(data => data.category.title === "Lunch")
    return (
        <>
            {lunchFilter.map((food) => {
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