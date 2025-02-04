import "../../CSS/ColorPicker.css";

const ColorPicker = ({ handleColorPicker, handleMessagePick }) => {
    return (
        <div>
          <button 
           onClick={() => {
            handleColorPicker();
            handleMessagePick();
           }} className="color-picker-button"
           >
           Change Color
          </button>
        </div>
    );
}

export default ColorPicker;