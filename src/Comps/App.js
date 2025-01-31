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

   function handleColorPicker() {
    const nextIndex = (currentIndex + 1) % colors.length;
    setCurrentIndex(nextIndex);
   };
   
   const currentColor = colors[currentIndex].title;
   
   const bra1 = "[";
   const bra2 = "];";
   const curly1 = "{";
   const curly2 = "}";
  
   return (
    <div> 
    <header className="color-picker">Color Picker</header>
     <ColorPicker handleColorPicker={handleColorPicker} />
     <PreviewBox
      colors={colors} 
      color={currentColor} 
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
