export default function Register(props){
    return (
        <>
        <form action="http://localhost:8000/login/register" method="post"> 
            <input type="text" name="email" placeholder="email"/>
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <input type="submit"/>
        </form>
        </>
    )
}