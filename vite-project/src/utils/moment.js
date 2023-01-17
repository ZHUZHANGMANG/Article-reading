function addZero(n){
    return n>9?n:'0'+n
}

const moment=(time)=>{
    let d=new Date()
    d.setTime(time);
    let year=d.getFullYear();
    let month=d.getMonth()+1;
    let date=d.getDate();
    let hour=d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    return `${year}年${addZero(month)}月${addZero(date)}日 ${addZero(
        hour
  )}:${addZero(min)}:${addZero(sec)}`;
}
export default moment;
