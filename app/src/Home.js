function Home() {
    return(
        <>
            <div className="card text-bg-dark">
                <img src={require('./image/potatusEtMol.png')} alt='arbitrary text' id="homeimg"/>
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <img src={require('./image/potatusEtMol.png')} alt='main logo' id="homelogo"/>
                </div>
            </div>
        </>
    )
}

export default Home