import {answers, reject_message, greeting_message} from '../text.js';

export function isNumber(ch){
    if (ch >= '0' && ch <= '9')
        return true;
    return false;
}

export function changeText(text){
    const len = text.length;
    let i = 0;
    while (i < len){
        if (isNumber(text[i]))
            break;
        i++;
    }
    if (i == len)
        return reject_message;
    
    let num = 0;
    while (i < len){
        if (isNumber(text[i])){
            num = num * 10 + (text[i]-'0');
            i++;
        }
        else break;
    }
    return answers[num - 1];
}

export function changeText_full(text){
    if (text[0] === '없' && text[1] === '다')
        return reject_message;
    else
        return text;
}