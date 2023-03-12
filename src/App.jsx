import React, { useEffect, useState } from 'react'
function App() {

    const [user, setUser] = useState(window.localStorage.getItem("user") || "")
    const [data, setData] = useState({})

    useEffect(()=>{
        if(user === "") return
        fetch(`https://api.github.com/users/${user}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => {
            console.log(err);
        })
    },[])

const searchUser = (e) => {
        e.preventDefault()
        fetch(`https://api.github.com/users/${user}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => {
            console.log(err);
        })
        // setUser("");
        window.localStorage.setItem("user" , user);

}

    return (
        <>
        <div className="bg-slate-800 font-mono text-white flex flex-col items-center justify-center h-screen m-0 overflow-hidden">
            <form className="w-3/4  sm:w-1/2" onSubmit={searchUser}>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5  text-gray-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input value={user} type="search" id="search" onChange={(e) => setUser(e.target.value)}
                        className="block p-4 pl-10 w-full text-sm  border-none rounded-lg shadow-lg  focus:outline-none  bg-slate-700 placeholder-gray-400 text-white"
                        placeholder="Search a github User" required/>
                        <button type="submit"
                            className="text-white absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium transition-colors duration-300 shadow-xl rounded-lg text-sm px-4 py-2 bg-blue-600 hover:shadow-blue-500 hover:bg-blue-700">Search</button>
                </div>
            </form>
            {/* Display Data */}
            {
                Object.keys(data).length>0 && (
                    <div
                    className="card flex flex-col items-center justify-center p-8 mx-6 my-6 bg-slate-700 rounded-2xl shadow-lg md:flex md:flex-row md:max-w-[800px]">
                    <img src={data.avatar_url} alt=""
                        className="avatar rounded-full border-4 border-blue-800 shadow-xl transition-colors duration-300 h-[150px] w-[150px] hover:shadow-blue-500 hover:border-hidden"/>
                    <div className="userinfo md:ml-8">
                        <h2 className="text-3xl font-bold my-2 underline decoration-sky-300 hover:decoration-wavy">{data['login']}</h2>
                        <p className="text-gray-300">{data.bio}</p>
                        <ul className="text-gray-400 flex justify-between p-0 mt-3">
                            <li className="flex items-center">{data['followers']}<strong className="text-sky-400 text-sm ml-2">Followers</strong></li>
                            <li className="flex items-center">{data['following']}<strong className="text-sky-400 text-sm ml-2">Following</strong></li>
                            <li className="flex items-center">{data['public_repos']}<strong className="text-sky-400 text-sm ml-2">Repos</strong></li>
                        </ul>
                        <div id="repos" className="mt-4"></div>
                </div>
                </div>
                )
            }
        </div>
        </>
    )
}

export default App
