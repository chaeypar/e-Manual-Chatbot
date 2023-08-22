import LoginView from './LoginView';
import { useNavigate } from 'react-router-dom';

export default function Login(props){
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/login", {
            method : "POST",
            headers:{
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({
              email: e.target[0].value,
              password : e.target[1].value 
            })
          })
          .then((response) => response.json())
          .then((data) => {
            if (data.auth == true){
                localStorage.setItem('email', data.email);
                localStorage.setItem('user', data.user);
                localStorage.setItem('isLoggedIn', "true");
                navigate('/');
            }
            else{
                localStorage.setItem('isLoggedIn', "false");
                alert('Invalid email or password');
            }
          })
          .catch((e) => {
            console.log(e);
          });
    }
    return (
        <LoginView handleLogin={handleLogin}/>
    );
}