export default function Appetizer (props) { //props opens the gate, allowing theis function to access data
    let appetizerFilter = props.appetizerData.filter(data => data.category.title === "Appetizer") //we are filtering API data here
    //below looping through filtered API data and using map array method to assign each iteration to a card
    return (
        <>
            {appetizerFilter.map((food) => {
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