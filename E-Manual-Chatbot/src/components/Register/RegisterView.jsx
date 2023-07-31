import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

export default function RegisterView(props){
    return (
        <div className="register-page">
            <h1 className="samsung">Samsung TV E-Manual Chatbot</h1>
            <div className="register-box">
                <h2 className="register-name">Sign Up</h2>
                <form className="register-form" action="/login/register" method="post"> 
                    <div className="register-fill">
                        <div className="register-logo"><UserOutlined style={{ fontSize: '20px'}}/></div>
                        <div className="register-fill-inside"><input type="text" name="username" placeholder="User Name" required></input></div>
                    </div>
                    <div className="register-fill">
                        <div className="register-logo"><MailOutlined style={{ fontSize: '20px'}}/></div>
                        <div className="register-fill-inside"><input type="text" name="email" placeholder="Email" required></input></div>
                    </div>
                    <div className="register-fill">
                        <div className="register-logo"><LockOutlined style={{ fontSize: '20px'}}/></div>
                        <div className="register-fill-inside"><input type="password" name="password" placeholder="Password" required></input></div>
                    </div>
                    <input className="register-submit" type="submit" value="Sign Up"></input>
                </form>
            </div>

        </div>
    );
}