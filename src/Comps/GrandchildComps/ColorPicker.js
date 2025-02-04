

const ColorPicker = ({ handleColorPicker, handleMessagePick }) => {
    return (
        <div>
          <button 
           onClick={() => {
            handleColorPicker();
            handleMessagePick();
           }} className="button"
           >
           Change Color
          </button>
        </div>
    );
}

export default ColorPicker;