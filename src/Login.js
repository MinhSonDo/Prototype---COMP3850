import './App.css';

const LoginClick = () => {
    window.location.href='/adminPage';
}

function Login() {
    return (
        <div>
            <div>
            <span> Admin's Username: </span>
                <input
                type="text"/>
            </div>

            <div>
            <span> Admin's Password: </span>
                <input
                type="password"/>
            </div>

            <button class="button" onClick={LoginClick}> Login </button>
        </div>
    );
}

export default Login;