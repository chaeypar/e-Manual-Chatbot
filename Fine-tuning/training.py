import openai
import json
import config
import frequently_asked

api_key = config.key

training_data = frequently_asked.frequently_asked
training_file_name = "training.jsonl"

def convertToJsonl(arraydata, resultFile):
    with open(resultFile, 'w') as f:
        for datum in arraydata:
            json.dump(datum, f, ensure_ascii=False)
            f.write('\n')

convertToJsonl(training_data, training_file_name)

