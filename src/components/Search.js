import {useRef} from "react";

const Search = ({searchedUsername,isSuccessful}) => {

    const inputRef = useRef();
    const btnRef = useRef();

    const searched = (e) => {
        e.preventDefault();
        const serachKeyword = inputRef.current.value;
        searchedUsername(serachKeyword);
        // console.log(inputRef.current.value)
    }

    return (
        <>
            <div className="card search">
                <form onSubmit={searched}>
                    <h1>Search  Github Username</h1>
                    <input type="text" ref={inputRef} className={isSuccessful === false?"incorrect-input":""} placeholder="Search valid username..."/>
                    <button ref={btnRef}>Search</button>
                </form>
                {isSuccessful === false?(
                    <p className="incorrect">Invalid Username</p>
                ):false}
            </div>
        </>
    )
}

export default Search;