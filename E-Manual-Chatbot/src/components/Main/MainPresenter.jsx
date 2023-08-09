import MainView from "./MainView";
import { useEffect } from 'react';

export default function Main(props){
    useEffect(()=>{
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: .2, 
          }
          
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              console.log(entry.isIntersecting);
              if (entry.isIntersecting) {
                entry.target.classList.add("active");
              } else {
                entry.target.classList.remove("active");
              }
            });
          }, options);
        
        const entryList = document.querySelectorAll('.main-title');
        const entryList2 = document.querySelectorAll('.main-select');
        entryList.forEach(el => observer.observe(el));
        entryList2.forEach(el => observer.observe(el));
        return ()=>{observer.disconnect();}
    },[]);
    return (
        <MainView />
    )
}