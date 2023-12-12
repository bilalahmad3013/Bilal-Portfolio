import React, { useEffect, useState } from 'react'
import "./wish.scss"

export default function Wish() {
  const text = ["नमस्ते", "Hola", "مرحبا", "Bonjour", "你好", "Hallo" ,"Привет", "Olá" ,"こんにちは"];
  const [showText, setShowText] = useState("Hello");
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [first, setFirst]= useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
       setFirst(false); 
      if (index < text.length - 1) {
        setIndex(index + 1);
        setShowText(text[index]);
      }
      else {
        setFadeOut(true);
      }
    }, first ? 700 : 250); 

    return () => clearTimeout(timer);
  }, [index, text]);

  return (
    <div id='wish' className={fadeOut ? 'fade-out' : ''}>
     {showText !="مرحبا"
     ?
     <><span className='dot'></span>{showText}</>
     :
     <>{showText}<span className='urduDot'></span></>
     }     
    </div>
  );
}
