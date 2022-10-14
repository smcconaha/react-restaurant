export default function NavBar(props) {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <button onClick={props.handleClick}>Home</button>
                <button onClick={props.handleClick}>Breakfast</button>
                <button onClick={props.handleClick}>Lunch</button>
                <button onClick={props.handleClick}>Dinner</button>
                <button onClick={props.handleClick}>Appetizer</button>
                <button onClick={props.handleClick}>Side</button>
                <button onClick={props.handleClick}>Dessert</button>
            </div>
            </div>
        </div>
        </nav>
    )
}