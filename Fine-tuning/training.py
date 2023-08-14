import openai
import json
import frequently_asked

training_data = frequently_asked.frequently_asked
training_file_name = "training.jsonl"

def convertToJsonl(arraydata, resultFile):
    with open(resultFile, 'w') as f:
        for datum in arraydata:
            datum['prompt'] += '/n/n###/n/n'
            datum['completion'] = '/n/n' + datum['completion'] + '###'
            json.dump(datum, f, ensure_ascii=False)
            f.write('\n')

convertToJsonl(training_data, training_file_name)

