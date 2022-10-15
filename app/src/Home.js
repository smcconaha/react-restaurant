function Home() {
    return(
        <>
            <div className="card text-bg-dark">
                <img src={require('../img/restaurant.jpeg')} alt='arbitrary text' id="homeimg"/>
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <img src={require('../img/logo.png')} alt='main logo' id="homelogo"/>
                </div>
            </div>
        </>
    )
}

export default Home