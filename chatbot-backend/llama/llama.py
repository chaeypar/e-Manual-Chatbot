import os 
import sys
import openai
from llama_index import SimpleDirectoryReader, GPTVectorStoreIndex, LLMPredictor, PromptHelper
from langchain.chat_models import ChatOpenAI
from llama_index import StorageContext, load_index_from_storage
from config import configuration

os.environ["OPENAI_API_KEY"] = configuration['api_key']
openai.api_key = configuration['api_key']

def index_documents(folder):
    max_input_size    = 4096
    num_outputs       = 512
    chunk_size_limit  = 600
    chunk_overlap_ratio = 0.1

    prompt_helper = PromptHelper(max_input_size, num_outputs, chunk_overlap_ratio, chunk_size_limit)
    llm_predictor = LLMPredictor(llm = ChatOpenAI(temperature = 0.7, model_name = "gpt-3.5-turbo", max_tokens = num_outputs))
    documents = SimpleDirectoryReader(folder).load_data()
    index = GPTVectorStoreIndex.from_documents(documents, llm_predictor = llm_predictor, prompt_helper = prompt_helper)
    index.storage_context.persist(persist_dir=folder)

def my_chatGPT_bot(input_text, dir):
    storage_context = StorageContext.from_defaults(persist_dir = dir)
    index = load_index_from_storage(storage_context)
    query_engine = index.as_query_engine()
    response = query_engine.query(input_text)
    return response.response

#for folder in ['./data/pdf_qna', './data/pdf_qonly', './data/txt_qna', './data/txt_qonly']:
#    index_documents(folder)

if __name__ == "__main__":
    print(my_chatGPT_bot(sys.argv[1]+sys.argv[2], sys.argv[3]))
