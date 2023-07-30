export default function LoginPresenter(props){
    return (
        <div className="login-page">
            <h1 className="samsung">Samsung TV E-Manual Chatbot</h1>
            <div className="login-box">
                <h2 className="login-name">Log In</h2>
                <form className="login-form" action="http://localhost:8000/login" method="post"> 
                    <input className="login-fill" type="text" name="email" placeholder="Email"></input>
                    <input className="login-fill" type="password" name="password" placeholder="Password"></input>
                    <input className="login-submit" type="submit" value="Log In"></input>
                </form>
            </div>
            <div className="login-register">
                Don't have an account? <a href="http://localhost:5173/login/register">Sign Up</a>
            </div>
        </div>
    );
}