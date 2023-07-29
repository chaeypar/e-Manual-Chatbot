import choices from "./versions";
import q1 from "./img/question1.png";
import q2 from "./img/question2.jpg";
import q3 from "./img/question3.png";
import q4 from "./img/question4.jpg";

const imgList = [q1, q2, q3, q4];

export default function MainView (props){
    const mapping = function(data, url, idx) {
        return (<div className="select" key={idx}>
            <a href={url}><img className="question_logo" src={imgList[idx]} alt="question logo"/></a>
            <div className="main-description">{data}</div>
        </div>);
    };

    return (
        <main>
            <h1 className="samsung">Samsung TV E-Manual Chatbot</h1>
            <h2 className="option-instruct">Select an option of the chatbot below.</h2>
            <div className="selects">
                {choices.map((choice, index) => mapping(choice.data, choice.url, index))}
            </div>
        </main>
    );
}
