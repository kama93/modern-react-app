import CustomButton from './CustomButton';
import Counter from './Counter';
import ToggleContent from './ToggleContent';

import TextInput from './TextInput'
import TextPreview from './TextPreview';

import { useState } from 'react';


function App() {
        const [sharedText, setSharedText] = useState("");


  return (
    <div>
      <h1>Component Dashboard</h1>
      <p>Look at these independent button instances:</p>
      
      <CustomButton text="A"/>
      <CustomButton text="B"/>
      <CustomButton text="C"/>

      <Counter/>

      <ToggleContent/>

          <h1 style={{ textAlign: 'center' }}>State Sharing</h1>
      
      {/* 1. Pass the updater function to the input child */}
      <TextInput value={sharedText} onTextChange={setSharedText} />
      
      {/* 2. Pass the raw value to the preview display child */}
      <TextPreview text={sharedText} />
    </div>
  );
}

export default App;
