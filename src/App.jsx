import { useState, useEffect } from "react";

//comments
import TodoList from "./components/TodoList";
function App() {
  const [url, seturl] = useState(
    "https://online-json-server-api.up.railway.app/project/6659a25a4a1552ef80d13ab6/todos"
  );

  const [data, setdata] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((todos) => {
        setdata(todos.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <ul>{data && <TodoList data={data} />}</ul>;
}

export default App;
