import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){
    const [username, setUsername] = useState(" ");
    const [userpassword, setPassword] = useState(" ");

    const {setUser} =useContext(UserContext)

    const handleSubmit= (e) => {
        e.preventDefault()
        setUser({username, userpassword});
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
            {"          "}
            <input type="text" value={userpassword} onChange={(e) => setPassword(e.target.value)} placeholder="username"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login