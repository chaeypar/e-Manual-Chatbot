import childs from 'child_process';

export default function llamaIndexChat(chat, response, suffix, dir, func){
    const result = childs.spawn('python3', ['./llama/llama.py', chat, suffix, dir]);
    result.stdout.on('data', function(data){
        response.json({output: func(data.toString())});
    });
}