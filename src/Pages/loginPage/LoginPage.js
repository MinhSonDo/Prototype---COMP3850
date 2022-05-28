import React, {useState} from 'react'
import loginService from '../../components/services/Login'

// const LoginClick = () => {
// 	window.location.href = '/adminPage'
// }

// function Login() {
// 	return (
// 		<div>
// 			<div>
// 				<span> Admin's Username: </span>
// 				<input type="text" />
// 			</div>

// 			<div>
// 				<span> Admin's Password: </span>
// 				<input type="password" />
// 			</div>

// 			<button className="button" onClick={LoginClick}>
// 				{' '}
// 				Login{' '}
// 			</button>
// 		</div>
// 	)
// }

// export default Login

/*
Login passwords are:
id 0: sam123
id 1: anna123
id 2: olivia123
*/

const Login = ({admin, setAdmin}) => {

    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const [LoginError, setLoginError] = useState(" ")

    const formHandler = (event) => {
      event.preventDefault()
      window.location.href = '/adminPage'

      loginService.login({username, password})
        .then(data => {
            console.log("Success:", data)
            setAdmin(data)
            setLoginError('')
        }
        )
        .catch(error => {
            console.log("Error:", error.response.data)
            if(error.response.status === 401)
            {
                console.log("Failed to Login")
                setLoginError("Failed to Login")
            }
            if(error.response.status === 500)
            {
                console.log("Internal server error")
                setLoginError("Sorry, please type a valid admin's credential.")
            }
        })
    }

    const logoutHandler = (event) => {
        event.preventDefault()

        loginService.logout({admin})
            .then(data => {
                console.log("Success: " + data.name + " logged out!")
                setAdmin(null)
            })
            .catch(error => {
                console.log("Error:", error.response.data)
            })
    }

    if (admin) {
        return (
            <div>
                <p>Logged in {admin.name}</p>
                <form onSubmit = {logoutHandler}>
                    <div>
                        <input type="submit" value="Log Out"/>
                    </div>
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={formHandler}>
                    <div >
                        <div>
                            <label htmlFor="username"> Username: </label>
                            <input id="username" type="text" name="username" placeholder="Your username..." onChange={e => setusername(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password"> Password: </label>
                            <input id="password" name="password" type="password" placeholder="Your password..." onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div>
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

export default Login