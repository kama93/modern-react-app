import CustomButton from './CustomButton';

function App() {
  return (
    <div>
      <h1>Component Dashboard</h1>
      <p>Look at these independent button instances:</p>
      
      {/* Rendering our custom component multiple times */}
      <CustomButton text="A"/>
      <CustomButton text="B"/>
      <CustomButton text="C"/>
    </div>
  );
}

export default App;
