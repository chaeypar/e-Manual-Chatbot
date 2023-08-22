import { MailOutlined, LockOutlined } from '@ant-design/icons';
import Navigation from '../Navigation/Navigation';

export default function LoginView(props){
    return (
    <div className="login-page">
        <Navigation/>
        <div className="login-box">
            <form className="login-form" action="" method="post" onSubmit={props.handleLogin}> 
            <h2 className="login-name">Log In</h2>
                <div className="login-fill">
                    <div className="login-logo"><MailOutlined  style={{ fontSize: '20px'}}/></div>
                    <input className="login-fill-inside" type="text" name="email" placeholder="Email" required></input>
                </div>
                <div className="login-fill">
                    <div className="login-logo"><LockOutlined style={{ fontSize: '20px'}}/></div>
                    <input className="login-fill-inside" type="password" name="password" placeholder="Password" required></input>
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