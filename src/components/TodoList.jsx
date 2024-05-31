function TodoList({ data }) {
  return (
    <>
      {data.map((todo) => {
        return (
          <li key={todo.id}>
            <h3>{todo.id}</h3>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
          </li>
        );
      })}
    </>
  );
}

export default TodoList;
