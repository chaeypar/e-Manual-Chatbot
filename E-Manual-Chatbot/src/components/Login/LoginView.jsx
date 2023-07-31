import { MailOutlined, LockOutlined } from '@ant-design/icons';

export default function LoginView(props){
    return (
    <div className="login-page">
        <h1 className="samsung">Samsung TV E-Manual Chatbot</h1>
        <div className="login-box">
            <h2 className="login-name">Log In</h2>
            <form className="login-form" action="/login" method="post"> 
                <div className="login-fill">
                    <div className="login-logo"><MailOutlined  style={{ fontSize: '20px'}}/></div>
                    <div className="login-fill-inside"><input type="text" name="email" placeholder="Email" required></input></div>
                </div>
                <div className="login-fill">
                    <div className="login-logo"><LockOutlined style={{ fontSize: '20px'}}/></div>
                    <div className="login-fill-inside"><input type="password" name="password" placeholder="Password" required></input></div>
                </div>
                <input className="login-submit" type="submit" value="Log In"></input>
            </form>
            <div className="login-register">
                Don't have an account? <a href="/login/register">Sign Up</a>
            </div>
        </div>
    </div>
    );
}