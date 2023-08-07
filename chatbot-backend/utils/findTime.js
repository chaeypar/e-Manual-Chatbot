export default function findTime(){
    const now = new Date();
    let temp_time = now.getHours();
    let time = '';
    
    if (temp_time >= 12){
        temp_time -= 12;
        time = '오후 '
    }
    else 
        time = '오전 ';
    
        time += temp_time.toString().padStart(2, '0') + ":"+now.getMinutes().toString().padStart(2, '0');
    return time;
}