import NakedColor from "./NakedColor";
 
const PreviewBox = ({ colors, color, curly1, curly2, bra1, bra2, currentIndex }) => {
    
   

    return (
        <div> 
          <div style={{ textAlign: "center", fontSize: "3em" }}>colors = {bra1}</div>
            <div style={{ textAlign: "center", fontSize: "3em" }}>
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
        </div>
        
    );
};

export default PreviewBox;

 