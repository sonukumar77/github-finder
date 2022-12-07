
const RepoList = ({repo}) => {
    // console.log(repo);
    return(
        <>
        <div className="card">
            <h1>RepoList</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Repo Name</th>
                        <th>Description</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                { repo.map((singleRepo,idx) => {
                    return(
                        <>
                        <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td> <a href={singleRepo.html_url} target="_blank" rel="noreferrer">{singleRepo.name}</a></td>
                        <td className="repo-description">{singleRepo.description}</td>
                        <td className="repo-date">{singleRepo.created_at.split("T")[0]}</td>
                        
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

export default RepoList;