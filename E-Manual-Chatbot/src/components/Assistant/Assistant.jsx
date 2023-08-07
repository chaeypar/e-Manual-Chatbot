import { steps, theme } from "./steps";
import Chatbot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

export default function Assistant (props){
    return (
        <ThemeProvider theme = {theme}>
            <Chatbot headerTitle="Samsung TV E-Manual Chatbot" floating={true} steps={steps}/>
        </ThemeProvider>
    );
}
