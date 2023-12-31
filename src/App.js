import './App.css';
import { useState, useEffect } from 'react';
import Spline  from '@splinetool/react-spline';

function App() {

  const phrases = ["Incredibly", "Stunningly", "Impossibly", "Remarkably", "Elegantly"];
  const keywords = ["Fast", "Small", "Light", "Affordable", "Compact"];

  const [subtitle, setSubtitle] = useState(0);

  useEffect(() => {
    const updateSubtitle = () => {
      if(subtitle === 4)
      {
        setSubtitle(0);
      }
      else
      {
        setSubtitle(subtitle + 1);
      }
    };
    const interval = setInterval(updateSubtitle, 4000);
    document.getElementById('subtitle').classList.add('subtitle_animation');
    setTimeout(() => {
      document.getElementById('subtitle').classList.remove('subtitle_animation');
    }, 4000);
    return () => clearInterval(interval);
  }, [subtitle]);

  return (
    <div>
      <h3 id="header">The <span class="highlight">Future</span> is now.</h3>
      <h4 id="subtitle">{phrases[subtitle]} <span class="highlight">{keywords[subtitle]}</span></h4>
      <Spline scene="https://prod.spline.design/qbwtt5tHsl9AswKs/scene.splinecode" id="viewer"/>
      <div id="title">
        <h1 id="title_header"><span class="highlight">PineApple</span> Book <span class="highlight">11</span></h1>
        <p>Starting at $645</p>
      </div>
    </div>
  );
}

export default App;
