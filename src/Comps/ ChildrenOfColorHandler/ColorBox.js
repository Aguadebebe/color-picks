import "../../CSS/ColorBox.css"; 

const ColorBox = ({ color }) => {
    
    return (
        <div 
        style={{ backgroundColor: color }}
        className="color-box"
        >
        </div>
    );
}

export default ColorBox;