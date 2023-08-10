import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import Navigation from '../Navigation/Navigation';
export default function RegisterView(props){
    return (
        <div className="register-page">
            <Navigation/>
            <div className="register-box">
                <form className="register-form" action="http://localhost:8000/login/register" method="post"> 
                    <h2 className="register-name">Sign Up</h2>
                    <div className="register-fill">
                        <div className="register-logo"><UserOutlined style={{ fontSize: '20px'}}/></div>
                        <input className="register-fill-inside" type="text" name="username" placeholder="Username" required></input>
                    </div>
                    <div className="register-fill">
                        <div className="register-logo"><MailOutlined style={{ fontSize: '20px'}}/></div>
                        <input className="register-fill-inside" type="text" name="email" placeholder="Email" required></input>
                    </div>
                    <div className="register-fill">
                        <div className="register-logo"><LockOutlined style={{ fontSize: '20px'}}/></div>
                        <input className="register-fill-inside" type="password" name="password" placeholder="Password" required></input>
                    </div>
                    <input className="register-submit" type="submit" value="Sign Up"></input>
                </form>
                <div className="register-login">
                    Already Registered? <a href="/login">Sign In</a>
                </div>
            </div>

        </div>
    );
}