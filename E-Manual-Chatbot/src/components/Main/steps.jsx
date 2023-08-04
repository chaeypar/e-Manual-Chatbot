const steps = [
    {
        id: '0',
        message: '안녕하세요. 삼성 TV E-Manaul Chatbot 입니다.',
        trigger: '1'
    },
    {
        id: '1',
        message: '간단한 문항에 응답해주시면 Customized Chatbot 서비스를 이용하실 수 있습니다.',
        trigger: '2'
    },
    {
        id: '2',
        message: 'Langchain 버전과 Llama Index 버전 중 선택하세요.',
        trigger: '3'
    },
    {
        id: '3',
        options: [
            {value: 'langchain', label: 'LangChain', trigger : '4-lang'},
            {value: 'llama_index', label: 'LlamaIndex', trigger : '4-llama'}
        ]
    },
    {
        id: '4-lang',
        message: '텍스트 파일과 PDF 파일 중 어떤 파일 형식의 E-Manaul을 사용할지 선택하세요.',
        trigger: '5-lang'
    
    },
    {
        id: '4-llama',
        message: '텍스트 파일과 PDF 파일 중 어떤 파일 형식의 E-Manaul을 사용할지 선택하세요.',
        trigger: '5-llama'
    
    },
    {
        id: '5-lang',
        options : [
            {value: 'txt', label: '텍스트 파일', trigger: '6-lang-txt'},
            {value: 'pdf', label: 'PDF 파일', trigger: '6-lang-pdf'}
        ]
    },
    {
        id: '5-llama',
        options : [
            {value: 'txt', label: '텍스트 파일', trigger: '6-llama-txt'},
            {value: 'pdf', label: 'PDF 파일', trigger: '6-llama-pdf'}
        ]
    },
    {
        id: '6-lang-txt',
        message: '질문만 있는 E-Manual과 질문과 답변이 모두 있는 E-Manual 중 어떤 것을 사용할지 선택하세요.', 
        trigger: '7-lang-txt'
    },
    {
        id: '6-lang-pdf',
        message: '질문만 있는 E-Manual과 질문과 답변이 모두 있는 E-Manual 중 어떤 것을 사용할지 선택하세요.', 
        trigger: '7-lang-pdf'
    },
    {
        id: '6-llama-txt',
        message: '질문만 있는 E-Manual과 질문과 답변이 모두 있는 E-Manual 중 어떤 것을 사용할지 선택하세요.', 
        trigger: '7-llama-txt'
    },
    {
        id: '6-llama-pdf',
        message: '질문만 있는 E-Manual과 질문과 답변이 모두 있는 E-Manual 중 어떤 것을 사용할지 선택하세요.', 
        trigger: '7-llama-pdf'
    },
    {
        id: '7-lang-txt',
        options : [
            {value: 'qonly', label: '질문만 있는 파일', trigger: ()=>{window.location='/langchain/txt/qonly'}},
            {value: 'qna', label: '질문과 답변 모두 있는 파일', trigger: ()=>{window.location='/langchain/txt/qna'}}
        ]
    },
    {
        id: '7-lang-pdf',
        options : [
            {value: 'qonly', label: '질문만 있는 파일', trigger: ()=>{window.location='/langchain/pdf/qonly'}},
            {value: 'qna', label: '질문과 답변 모두 있는 파일', trigger: ()=>{window.location='/langchain/pdf/qna'}}
        ]
    },
    {
        id: '7-llama-txt',
        options : [
            {value: 'qonly', label: '질문만 있는 파일', trigger: ()=>{window.location='/llama_index/txt/qonly'}},
            {value: 'qna', label: '질문과 답변 모두 있는 파일', trigger: ()=>{window.location='/llama_index/txt/qna'}}
        ]
    },
    {
        id: '7-llama-pdf',
        options : [
            {value: 'qonly', label: '질문만 있는 파일', trigger: ()=>{window.location='/llama_index/pdf/qonly'}},
            {value: 'qna', label: '질문과 답변 모두 있는 파일', trigger: ()=>{window.location='/llama_index/pdf/qna'}}
        ]
    },
];

export default steps; 