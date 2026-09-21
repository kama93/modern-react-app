import { useState } from 'react';

function ToggleContent() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px', padding: '20px', border: '1px solid #ccc' }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Secret Message' : 'Show Secret Message'}
      </button>

      {isVisible && (
        <p style={{ marginTop: '15px', color: 'green', fontWeight: 'bold' }}>
          🕵️‍♂️ Secret Agent Code: 4-YEARS-OF-JS-MASTERY
        </p>
      )}
    </div>
  );
}

export default ToggleContent;