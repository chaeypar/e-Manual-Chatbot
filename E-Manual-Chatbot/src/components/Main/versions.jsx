const choices = [
    {data : "It provides sets of questions to the gpt-api with the 'txt' format and ask it to answer the index of the question corresponding to the user's situation. Then, it is designed to show the solution of a question with the index to the user.", url: "/langchain_txt/qonly"},
    {data : "It provides sets of questions and answers to the gpt-api with the 'txt' format and ask it to find the solution corresponding to the user's situation.", url: "/langchain_txt/qna"},
    {data : "It provides sets of questions to the gpt-api with the 'pdf' format and ask it to answer the index of the question corresponding to the user's situation. Then, it is designed to show the solution of a question with the index to the user.", url: "/langchain_pdf/qonly"},
    {data : "It provides sets of questions and answers to the gpt-api with the 'pdf' format and ask it to find the solution corresponding to the user's situation.", url: "/langchain_pdf/qna"}
];

export default choices; 