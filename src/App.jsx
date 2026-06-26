// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";

const name = "Matvey";
const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1280px-Cat03.jpg"
const animal = "cat"
const obj = {
  nameUrl: "Wikipedia",
  urlSite: "https://uk.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0_%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B0"
}
const array = ["Червоний", "Синій", "Зелений"]
function App() {
  return (
    <>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={url} alt={animal}/>
      <a href={obj.urlSite}>{obj.nameUrl}</a>
      <p>{2+2}</p>
      <ul>
        {array.map((color) => {
          return (
            <li>{color}</li>
          )
        })}
      </ul>
    </>
  );
}

export default App;
