import DefineColorsArray from "./ ChildrenOfPreviewBox/DefineColorsArray";
import ColorsArrayObjects from "./ ChildrenOfPreviewBox/ColorsArrayObjects";
import CloseColorsArray from "./ ChildrenOfPreviewBox/CloseColorsArray";
import Description from "./ ChildrenOfPreviewBox/Description";
 
 
const PreviewBox = ({ 
  colors, 
  color, 
  sBrackets, 
  cBrackets,
  currentIndex, 
  messages, 
  message 
}) => 

{
  const { bra1, bra2 } = sBrackets; // de-structure sBrackets instead of sbrackets.bra1 etc. 
  const { curly1, curly2 } = cBrackets;  // de-structure cBrackets instead of cBrackets.curly1 etc.
    

    return (
        <div> 
            <DefineColorsArray  bra1={bra1} />
            <div className="define-colors-array">
                {colors.map((colorItem, index) => {
                  const appliedColor = index === currentIndex ? color : "black"; // applys color only to the currentIndex
                  return ( 
                   <ColorsArrayObjects 
                    key={colorItem.id}
                    colors={colorItem}
                    curly1={curly1}
                    curly2={curly2}
                    appliedColor={appliedColor}
                   />
                    
                  );
              })}
            </div>
            <CloseColorsArray  bra2={bra2} />
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
}

export default PreviewBox;

  