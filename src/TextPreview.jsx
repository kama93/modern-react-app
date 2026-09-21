function TextPreview(props) {
  return (
    <h3 style={{ textAlign: 'center', color: 'blue' }}>
      Live Preview: {props.text || "..."}
    </h3>
  );
}
export default TextPreview;
