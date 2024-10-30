export default function Form() {
  return (
    <form onSubmit={handleTodo}>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button type="submit">등록</button>
    </form>
  );
}
