const App = () => {
    return (
        <div>
            <Person name="Sean" age={22} hobbies={["MMA", "Videogames"]} />
            <Person name="Dylan" age={1} hobbies={["Shitting himself", "Being adorable"]} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));