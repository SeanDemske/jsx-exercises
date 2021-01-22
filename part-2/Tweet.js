const Tweet = ({ username, name, datePosted, message}) => {
    return (
        <div>
            <h2>{ username } - { name }</h2>
            <h1>{ message }</h1>
            <h3>Posted - { datePosted }</h3>
        </div>
    )
}