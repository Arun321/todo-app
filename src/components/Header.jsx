export function Header(props) {
  const { todos } = props;
  const todoslength = todos.length;
  const isTasksPlural = todoslength != 1;
  const taskOrTasks = isTasksPlural ? "tasks" : "task";

  return (
    <header>
      <h1 className="text-gradient">
        You have {todoslength} open {taskOrTasks}.
      </h1>
    </header>
  );
}
