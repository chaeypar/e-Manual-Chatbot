import steps from "./steps";
import Chatbot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Navigation from "../Navigation/Navigation";

export default function MainView (props){
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#EF6C00',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#F29F05',
        botFontColor: '#FFF',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a'
    }
    return (
        <main>
            <Navigation/>
            <ThemeProvider theme = {theme}>
                <Chatbot headerTitle="Samsung TV E-Manual Chatbot" floating={true} steps={steps}/>
            </ThemeProvider>
        </main>
    );
}

