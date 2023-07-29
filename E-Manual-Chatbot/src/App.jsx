import './App.css';
import Langchain from './components/Langchain/LangchainPresenter.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './components/Main/MainPresenter';

function App() {
  return (
    <div className="E-Manual">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/langchain_txt/qonly" element={<Langchain type="/langchain_txt/qonly"/>}/>
          <Route path="/langchain_txt/qna" element={<Langchain type="/langchain_txt/qna"/>}/>
          <Route path="/langchain_pdf/qonly" element={<Langchain type="/langchain_pdf/qonly"/>}/>
          <Route path="/langchain_pdf/qna" element={<Langchain type="/langchain_pdf/qna"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;