const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Sean" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));