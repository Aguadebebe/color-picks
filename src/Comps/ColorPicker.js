

const ColorPicker = ({ handleColorPicker }) => {
    return (
        <div>
          <button onClick={handleColorPicker} className="button">Change Color</button>
        </div>
    );
};

export default ColorPicker;