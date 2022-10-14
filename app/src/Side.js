export default function Side (props) {
    let sideFilter = props.sideData.filter(data => data.category.title === "Side")
    return (
        <>
            {sideFilter.map((food) => {
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