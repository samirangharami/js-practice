const json = {
  "1": {
    todoName: "Todo1",
    tasks: {
      "1": { taskName: "task1", isDone: false },
      "2": { taskName: "task2", isDone: true },
    },
    userId: 1,
  },
  "2": {
    todoName: "Todo2",
    tasks: {
      "1": { taskName: "task1", isDone: true },
      "2": { taskName: "task2", isDone: false },
    },
    userId: 1,
  },
};

const getTaskMarkdown = (task) => {
  if (task.isDone) return `- [x] ~~${task.taskName}~~`;
  return `- [ ] ${task.taskName}`;
};

const createTodoMarkdown = ({ todoName, tasks }) => {
  const todoMd = [];

  const tasksMd = Object.values(tasks).map(getTaskMarkdown).join("\n");

  todoMd.push(`\n## ${todoName}\n`);
  todoMd.push(tasksMd);

  return todoMd;
};

const createMarkdown = (json) => {
  const markdown = [];

  const todos = Object.values(json);
  const todosMarkdown = todos.flatMap(createTodoMarkdown);

  markdown.push("# My TODO Lists");
  markdown.push(...todosMarkdown);

  return markdown.join("\n");
};

console.log(createMarkdown(json));
