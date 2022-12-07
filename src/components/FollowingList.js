const FollowingList = ({following}) => {
    // console.log(following);
    return(
        <>
        <div className="card">
            <h1>Following List</h1>
           <ol>
           {following.map((current_elem,idx) => {

            return(
                <li key={idx}>
                    <a href={current_elem.html_url} target="_blank" rel="noreferrer">{current_elem.login}</a>
                </li>
            )
           })}
           </ol>
        </div>
        </>
    )
}

export default FollowingList;