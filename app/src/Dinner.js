export default function Dinner (props) {
    let dinnerFilter = props.dinnerData.filter(data => data.category.title === "Dinner")
    console.log(dinnerFilter);
    return (
        <>
            {dinnerFilter.map((food) => {
                return (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{food.title}</h5>
                            <div className="card-text">{food.price}</div>
                            <div className="card-text">{food.description}</div>
                        </div>
                    </div>
                )
            })}
        </>
    )    
}