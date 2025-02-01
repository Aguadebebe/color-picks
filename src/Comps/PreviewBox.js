import NakedColor from "./NakedColor";
import Description from "./Description";
 
const PreviewBox = ({ colors, color, curly1, curly2, bra1, bra2, currentIndex, messages, message }) => {
    
   

    return (
        <div> 
          <div className="colors-array">colors = {bra1}</div>
            <div className="colors-array">
                {colors.map((colorItem, index) => {
                  const appliedColor = index === currentIndex ? color : "black"; // applys color only to the currentIndex
                  return ( 
                   <NakedColor 
                    key={colorItem.id}
                    colors={colorItem}
                    curly1={curly1} 
                    curly2={curly2}
                    appliedColor={appliedColor}
                   />
                    
                  );
              })}
            </div>
         <div style={{ textAlign: "center", fontSize: "2em" }}>{bra2}</div>
         <div>
           {message && (
            <Description 
              key={messages[currentIndex].id}
              message={message}
            />
           )}
         </div>
        </div>
        
    );
};

export default PreviewBox;

   //messages={messages[currentIndex]}