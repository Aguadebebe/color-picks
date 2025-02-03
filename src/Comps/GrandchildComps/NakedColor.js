

const NakedColor = ({ colors, curly1, curly2, appliedColor }) => {
    return (
        <div style={{ color: appliedColor }}>
          {curly1} id: {colors.id} , title: {colors.title} {curly2}
        </div>
    );

};

export default NakedColor;