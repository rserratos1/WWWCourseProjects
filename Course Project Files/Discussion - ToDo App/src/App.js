import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (inputText.trim() !== "") {
      setTasks([...tasks, { text: inputText, completed: false }]);
      setInputText("");
    }
  };

  const handleDeleteTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const handleToggleComplete = (taskIndex) => {
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    setTasks(newTasks);
  };

  return (
    <div
      className="App-wrapper"
      style={{
        backgroundImage: "url('/wavePattern.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "top left",
        backgroundColor: "rgba(255, 255, 255, 0.5)", // <-- add soft white over it
        backgroundBlendMode: "lighten", // <-- blend the background pattern
        minHeight: "100vh", // <-- make sure it covers the full screen
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="App">
        <header className="App-header"></header>
        <main>
          <h1>Todo List</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddTask();
            }}
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
          </form>

          <section>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className={task.completed ? "completed" : ""}>
                  <button
                    className="checkbox"
                    onClick={() => handleToggleComplete(index)}
                  >
                    ✓
                  </button>
                  {task.text}
                  <button
                    className="deleteBt"
                    onClick={() => handleDeleteTask(index)}
                  >
                    <img
                      src="/trash.png"
                      title="ui icons"
                      alt="Delete"
                      className="trash"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
