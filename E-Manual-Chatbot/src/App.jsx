import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Chatbot from './components/Chatbot/ChatbotPresenter.jsx';
import Main from './components/Main/MainPresenter';
import Login from './components/Login/LoginPresenter';
import Register from './components/Register/RegisterPresenter';

function App() {
  return (
    <div className="E-Manual">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/langchain_txt/qonly" element={<Chatbot type="/langchain_txt/qonly"/>}/>
          <Route path="/langchain_txt/qna" element={<Chatbot type="/langchain_txt/qna"/>}/>
          <Route path="/langchain_pdf/qonly" element={<Chatbot type="/langchain_pdf/qonly"/>}/>
          <Route path="/langchain_pdf/qna" element={<Chatbot type="/langchain_pdf/qna"/>}/>
          <Route path="/llama_index/pdf/qonly" element={<Chatbot type="/llama_index/pdf/qonly"/>}/>
          <Route path="/llama_index/pdf/qna" element={<Chatbot type="/llama_index/pdf/qna"/>}/>
          <Route path="/llama_index/txt/qonly" element={<Chatbot type="/llama_index/txt/qonly"/>}/>
          <Route path="/llama_index/txt/qna" element={<Chatbot type="/llama_index/txt/qna"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;