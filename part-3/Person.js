const Person = ({ name, age, hobbies }) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>{name.length > 8 ? name.substring(0, 6) : name}</p>
            <p>Hobbies:</p>
            <ul>
                {hobbies.map(h => <li>{h}</li> )}
            </ul>
            <h3>{ age >= 18 ? "please go vote!" : "you must be 18 to vote"}</h3>
        </div>
    )
}