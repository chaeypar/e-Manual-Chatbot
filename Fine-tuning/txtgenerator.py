import frequently_asked
import problem_diagnosis

qna1 = frequently_asked.frequently_asked
qna2 = problem_diagnosis.problem

filename = "questions.txt"
idx = 1

with open(filename, 'w') as f:
    for entry in qna1:
        f.write(str(idx)+':')
        f.write(entry["prompt"])
        f.write(',\n')
        idx += 1

with open(filename, 'a') as f:
    for key in qna2:
        arr = qna2[key]
        for entry in arr:
            f.write(str(idx)+':')
            f.write(entry["prompt"])
            f.write(',\n')
            idx = idx + 1

