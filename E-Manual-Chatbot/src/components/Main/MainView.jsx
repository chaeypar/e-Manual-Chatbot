import Assistant from '../Assistant/Assistant';
import Navigation from "../Navigation/Navigation";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';

export default function MainView (props){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
      };
    return (
        <main className="main-page">
            <Navigation/>
            <Slider className="top-slider" {...settings}>
                <div className="main-slider">
                    <img src={img1} className="slider"/>
                </div>
                <div className="main-slider">
                    <img src={img2} className="slider"/>
                </div>
                <div className="main-slider">
                    <img src={img3} className="slider"/>
                </div>
            </Slider>
            <div className="main-wrapper">
                <div className="main-selects">  
                    <div className="main-title">Langchain 기반 챗봇 소개</div>
                    <div className="main-selects-inside">
                        <div className="main-select">
                            <a className="main-anchor" href="/langchain/txt/qonly">
                                <h5 className="select-title">질문 Text 매뉴얼</h5>
                                <div className="select-content"><div className="core">질문</div>만으로 구성된 <div className="core">Text 매뉴얼</div>을 이용한 <div className="core">Langchain</div> 기반 모델을 만나보세요.</div>
                            </a>
                        </div>
                        <div className="main-select">
                            <a className="main-anchor" href="/langchain/pdf/qonly">
                                <h5 className="select-title">질문 PDF 매뉴얼</h5>
                                <div className="select-content"><div className="core">질문</div>만으로 구성된 <div className="core">PDF 매뉴얼</div>을 이용한 <div className="core">Langchain</div> 기반 모델을 만나보세요.</div>
                            </a>
                        </div>
                        <div className="main-select">
                            <a className="main-anchor" href="/langchain/txt/qna">
                                <h5 className="select-title">Q&A Text 매뉴얼</h5>
                                <div className="select-content"><div className="core">질문과 답변</div>으로 구성된 <div className="core">Text 매뉴얼</div>을 이용한 <div className="core">Langchain</div> 기반 모델을 만나보세요.</div>
                            </a>
                        </div>
                        <div className="main-select">
                            <a className="main-anchor" href="/langchain/pdf/qna">
                                <h5 className="select-title">Q&A PDF 매뉴얼</h5>
                                <div className="select-content"><div className="core">질문과 답변</div>으로 구성된 <div className="core">PDF 매뉴얼</div>을 이용한 <div className="core">Langchain</div> 기반 모델을 만나보세요.</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="main-selects">
                    <div className="main-title">Llama Index 기반 챗봇 소개</div>
                    <div className="main-selects-inside">
                        <div className="main-select">
                            <a className="main-anchor" href="/llama_index/txt/qonly">
                                <h5 className="select-title">질문 Text 매뉴얼</h5>
                                <div className="select-content"><div className="core">질문</div>만으로 구성된 <div className="core">Text 매뉴얼</div>을 이용한 <div className="core">Llama index</div> 기반 모델을 만나보세요.</div>
                            </a>
                        </div>
                        <div className="main-select">
                            <a className="main-anchor" href="/llama_index/pdf/qonly">
                                <h5 className="select-title">질문 PDF 매뉴얼</h5>
                                <div className="select-content"><div className="core">질문</div>만으로 구성된 <div className="core">PDF 매뉴얼</div>을 이용한 <div className="core">Llama index</div> 기반 모델을 만나보세요.</div>
                            </a>
                        </div>
                        <div className="main-select">
                            <a className="main-anchor" href="/llama_index/txt/qna">
                                <h5 className="select-title">Q&A Text 매뉴얼</h5>
                                <div className="select-content"><div className="core">질문과 답변</div>으로 구성된 <div className="core">Text 매뉴얼</div>을 이용한 <div className="core">Llama index</div> 기반 모델을 만나보세요.</div>
                            </a>
                        </div>
                        <div className="main-select">
                            <a className="main-anchor" href="/llama_index/pdf/qna">
                                <h5 className="select-title">Q&A PDF 매뉴얼</h5>
                                <div className="select-content"><div className="core">질문과 답변</div>으로 구성된 <div className="core">PDF 매뉴얼</div>을 이용한 <div className="core">Llama index</div> 기반 모델을 만나보세요.</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Assistant />
        </main>
    );
}

