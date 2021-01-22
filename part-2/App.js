const App = () => {
    return (
        <div>
            <Tweet username="SMasters" name="Sean" datePosted="1/22" message="React is pretty dope" />
            <Tweet username="Username2" name="User" datePosted="1/22" message="Go bills" />
            <Tweet username="Username3" name="User" datePosted="1/22" message="Fuck the bills" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));