import { useState } from 'react';

function Counter () {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>The Count is: {count}</h2>
      
      <button onClick={() => setCount(count + 1)}>
        Increment Number
      </button>
    </div>
    )

}
export default Counter;