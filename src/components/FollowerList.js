const FollowerList = (followers) => {
    console.log(followers.followers);
    return (
        <>
            <div className="card">
                <h1>Follower List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th colSpan="2">Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {followers.followers.map((single_elem, idx) => {
                            return (
                                <>
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td className="follower-avatar-container">
                                            <img src={single_elem.avatar_url} alt="follower_avatar" className="follower-avatar" />
                                        </td>
                                        <td> <a href={single_elem.html_url} target="_blank" rel="noreferrer">{single_elem.login}</a></td>

                                    </tr>

                                </>

                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default FollowerList;