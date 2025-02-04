import { useState } from "react";
import ColorPicker from "../ ChildrenOfColorHandler/ColorPicker";
import PreviewBox from "../ ChildrenOfColorHandler/PreviewBox";
import ColorBox from "../ ChildrenOfColorHandler/ColorBox";

const ColorHandler = () => {
    const [currentIndex, setCurrentIndex] = useState(0); 
  
    const colors = [
        {id: 0, title: "blue"},
        {id: 1, title: "green"},
        {id: 2, title: "orange"},
        {id: 3, title: "purple"},
        {id: 4, title: "red"}
    ];
    
    const messages = [
        {id: 0, title: "0 is the 1st index of the colors array"},
        {id: 1, title: "1 is the 2nd index of the colors array"},
        {id: 2, title: "2 is the 3rd index of the colors array"},
        {id: 3, title: "3 is the 4th index of the colors array"},
        {id: 4, title: "4 is the 5th index of the colors array"},
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
   
    const cBrackets = {
     curly1: "{",
     curly2: "}"
    };

    const sBrackets = {
     bra1: "[",
     bra2: "];"
    };

    return (
      <div>
       <ColorPicker
         handleColorPicker={handleColorPicker}
         handleMessagePick={handleMessagePick}
       />
       <ColorBox color={currentColor}/>

       <PreviewBox
      colors={colors}
      color={currentColor}  
      messages={messages}
      message={currentMessage}
      currentIndex={currentIndex}
      cBrackets={cBrackets}
      sBrackets={sBrackets}
    />
     </div>
    );
}

export default ColorHandler;