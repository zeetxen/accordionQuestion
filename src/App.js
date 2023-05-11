import { useState } from "react";
import "./App.css";
import data from "./components/data";
import Questions from "./components/Questions";

function App() {
  const [questions, setQuestion] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
}
export default App;
