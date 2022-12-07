import momemt from "moment";

const Details = ({ details ,toggleComponent,visibleComponent}) => {
    return (
        <>
            <div className="card detail">
                <img src={details.avatar_url} alt="avatar" />
                <div className="detail-right">
                    <h2>Name - {details.name}</h2>
                    <h3>UserName - <a href={details.html_url} target="_blank" rel="noreferrer">@{details.login}</a></h3>
                    <p>Created At - {momemt(details.created_at).fromNow()}</p>
                </div>
                <div className="buttons">
                    <button onClick={_ => toggleComponent(0)} className={visibleComponent === 0 ?"active":""}> {details.public_repos} <span>Repo List</span></button>
                    <button onClick={_ => toggleComponent(1)} className={visibleComponent === 1 ?"active":""}>{details.followers} <span>Followers</span></button>
                    <button onClick={_ => toggleComponent(2)} className={visibleComponent === 2 ?"active":""}>{details.following} <span>Following List</span> </button>
                </div>
            </div>
        </>
    )
}

export default Details;