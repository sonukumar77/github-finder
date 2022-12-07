import Search from './components/Search';
import Details from './components/Details';
import Footer from './components/Footer';
import RepoList from './components/RepoList';
import { github } from "./utils.js";
import { useEffect, useState } from "react";
import FollowerList from './components/FollowerList';
import FollowingList from './components/FollowingList';



function App() {

  const [username, setUsername] = useState("");
  const [details, setDetails] = useState({});
  const [repo, setRepoList] = useState([]);
  const [followers, setFollowersList] = useState([]);
  const [following, setFollowingList] = useState([]);
  const [isSuccessful, setSuccessful] = useState(true);
  const [visibleComponent, setVisibleComponent] = useState(0);


  useEffect(_ => {
    if(username === ""){
      return
    }
    setDetails({});
    setSuccessful(true);
    (async _ => {
      try {
        const response = await github.get(`/${username}`);
        setDetails(response.data);

        // console.log(response.data);
      } catch (e) {
        setSuccessful(false);
      }

    })();
  }, [username]);

  useEffect(_ => {
    if(username === ""){
      return
    }
    setRepoList([]);
    (async _ => {

      const repo_response = await github.get(`/${username}/repos`);
      setRepoList(repo_response.data);
      // console.log(repo_response.data);
    })();

  }, [username])

  useEffect(_ => {
    if(username === ""){
      return
    }
    setFollowersList([]);
    (async _ => {

      const follower_response = await github.get(`/${username}/followers`);
      setFollowersList(follower_response.data);
      // console.log(follower_response.data);
    })();
  }, [username])

  useEffect(_ => {
    if(username === ""){
      return
    }
    setFollowingList([]);
    (
      async _ => {
        const following_response = await github.get(`/${username}/following`);
        setFollowingList(following_response.data);
        // console.log(following_response.data);
      }
    )();
  }, [username]);


  const searchedUsername = (keyword) => {

    setUsername(keyword);
  }

  const showLoadMore = () => {
    if (visibleComponent === 0) {
      if (details.public_repos === repo.length) {
        return false;
      } else {
        return true
      }
    } else if (visibleComponent === 1) {
      if (details.followers === followers.length) {
        return false;
      } else {
        return true
      }
    } else {
      if (details.following === following.length) {
        return false;
      } else {
        return true
      }
    }

  }

  const loadMoreData = async () => {

    if(visibleComponent === 0){
      //fetch repoList
      const currentPage  = Math.ceil(repo.length / 30);
      const nextPage  = currentPage + 1;
      const repo_res = await github.get(`/${username}/repos?page=${nextPage}`);
      const repo_data = repo_res.data;

      setRepoList((prevRepoList) => {
        const newRepoList = [...prevRepoList,...repo_data];
        return newRepoList;
      });

      
      
      // console.log(repo,repo_data);

    }else if (visibleComponent === 1){
      // fetch followers list
      const currentPage  = Math.ceil(followers.length / 30);
      const nextPage  = currentPage + 1;
      const followers_res = await github.get(`/${username}/followers?page=${nextPage}`);
      const followers_data = followers_res.data;

      setFollowersList((prevFollowersList) => {
        const newFollowersList = [...prevFollowersList,...followers_data];
        return newFollowersList;
      });
    }else{
      const currentPage  = Math.ceil(following.length / 30);
      const nextPage  = currentPage + 1;
      const following_res = await github.get(`/${username}/following?page=${nextPage}`);
      const following_data = following_res.data;

      setFollowingList((prevFollowingList) => {
        const newFollowingList = [...prevFollowingList,...following_data];
        return newFollowingList;
      });
    }
  }

  return (

    <main>
      <Search searchedUsername={searchedUsername} isSuccessful={isSuccessful} />
      {details.id === undefined ? false
        : (
          <>
            <Details details={details} toggleComponent={setVisibleComponent} visibleComponent={visibleComponent} />

            {visibleComponent === 0 ? (
              <RepoList repo={repo} />
            ) : (
              visibleComponent === 1 ? (
                <FollowerList followers={followers} />
              ) : (
                <FollowingList following={following} />
              )
            )}

            {showLoadMore() === true ? (
              <div className="card load-more">
                <button onClick={loadMoreData}>Load more...</button>
              </div>)
              : (false)}

          </>
        )}



      <Footer followers={followers} />
    </main>


  );
}

export default App;
