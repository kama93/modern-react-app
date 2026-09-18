
// This is a self-contained child component
function CustomButton(props) {
  return (
    <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
      {props.text}
    </button>
  );
}

export default CustomButton;
