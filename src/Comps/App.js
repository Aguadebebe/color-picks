import ColorPicker from "./ColorPicker";
import PreviewBox from "./PreviewBox";
import { useState } from "react";
import '../App.css';

const App = () =>{

  const [currentIndex, setCurrentIndex] = useState(0);

   const colors = [
    {id: 0, title: "blue"},
    {id: 1, title: "green"},
    {id: 2, title: "orange"},
    {id: 3, title: "purple"},
    {id: 4, title: "red"}
   ];

   const messages = [
    {id: 0, title: "Zero is the 1st index of the colors array"},
    {id: 1, title: "One is the 2nd index of the colors array"},
    {id: 2, title: "Two is the 3rd index of the colors array"},
    {id: 3, title: "Three is the 4th index of the colors array"},
    {id: 4, title: "Four is the 5th index of the colors array"},
   ];

   function handleColorPicker() {
    const nextIndex = (currentIndex + 1) % colors.length;
    setCurrentIndex(nextIndex);
   };
   
   function handleMessagePick() {
    const nextIndex = (currentIndex + 1) % messages.length;
    setCurrentIndex(nextIndex);
   };
   
   const currentColor = colors[currentIndex].title;

   const currentMessage = messages[currentIndex].title;
   
   const bra1 = "[";
   const bra2 = "];";
   const curly1 = "{";
   const curly2 = "}";
  
   return (
    <div> 
    <header className="color-picker">Color Picker</header>
     
    <ColorPicker 
      handleColorPicker={handleColorPicker}
      handleMessagePick={handleMessagePick} 
    />
     
    <PreviewBox
      colors={colors}
      color={currentColor}  
      messages={messages}
      message={currentMessage}
      currentIndex={currentIndex}
      bra1={bra1}
      bra2={bra2}
      curly1={curly1}
      curly2={curly2}
    />
    </div>
  );
};

export default App;
