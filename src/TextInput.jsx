function TextInput(props) {
  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      <input 
        type="text" 
        placeholder="Type something..." 
        value={props.value} 
        onChange={(e) => props.onTextChange(e.target.value)} 
      />
    </div>
  );
}

export default TextInput;