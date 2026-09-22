import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Master Git Local Workflow' },
    { id: 2, name: 'Understand React Components' }
  ]);
  
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      name: inputValue
    };

    setTasks([...tasks, newTask]);
    setInputValue("");

  }



  return (
     <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>🎯 Engineering Milestone Tracker</h2>
      
      {/* Form Submission Handling */}
      <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Add a new engineering goal..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ flexGrow: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }}>Add</button>
      </form>

      {/* Render Dynamic Tasks Lists via .map() mapping */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ padding: '10px', borderBottom: '1px solid #eee', background: '#f9f9f9', marginBottom: '5px' }}>
            {task.name}
          </li>
              ))}
      </ul>
    </div>
  );
}

export default App;
