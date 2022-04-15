import React, {useState} from 'react'

const AdminLoginForm = ({user, setUser}) => {

    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const [LoginError, setLoginError] = useState(" ")

    const formHandler = (event) => {
      event.preventDefault()
    }

    if (user) {
        return (
            <div className="login-container">
                <p>Logged in {user.name}</p>
                <form onSubmit = {logoutHandler}>
                    <div className="logout-button">
                        <input type="submit" value="Log Out"/>
                    </div>
                </form>
            </div>
        )
    } else {
        return (
            <div className="login-container">
                <h3>Login</h3>
                <form onSubmit={formHandler}>
                    <div >
                        <div className="loginform-name">
                            <label htmlFor="username">UserName </label>
                            <input id="username" type="text" name="username" placeholder="Your username..." onChange={e => setusername(e.target.value)} />
                        </div>
                        <div className="loginform-password">
                            <label htmlFor="password">Password </label>
                            <input id="password" name="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="loginform-submit">
                            <input type="submit" value="Login"/>
                        </div>
                    </div>
                </form> 
                <div>
                    <p>{LoginError}</p>
                </div>
            </div>
            )
    }
}

export default AdminLoginForm