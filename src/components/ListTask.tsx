import { ChangeEvent, useState } from "react";
import { StatusToDo } from "./StatusToDo";
import { Task } from "./Task";
import styles from "./ListTask.module.css";
import { NewTask } from "./NewTask";
import { v4 as uuid4 } from "uuid";
import clipboard from "../assets/Clipboard.svg";


export function ListTask() {
  const [tasks, setTasks] = useState([
    {
      id: "c58e04ac-05ab-42ff-8959-9df8f44fccc1",
      label: "Trocar o filtro de óleo.",
      completed: true,
    },
    {
      id: "77cbfaaa-7e2f-47dd-9b62-f3e756b769e8",
      label:
        "Marcar a consulta no endocrinologista, devido ao desânimo que venho passando estes dias.",
      completed: false,
    },
    {
      id: "6354fabb-2abd-427e-a7a4-6c27e7d19521",
      label: "Dever de casa",
      completed: false,
    },
  ]);

  const [newText, setNewText] = useState("");

  function handleCreateNewTask() {
    event?.preventDefault();

    const newTask = {
      id: uuid4(),
      label: newText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewText("");
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewText(event?.target.value);
  }

  function deleteTask(id: string) {
    const tasksDeleted = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(tasksDeleted);
  }

  function completeTask(id: string) {
    const taskToBeCompleted = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(taskToBeCompleted);
  }

  var tarefa = tasks.filter((task) => task.completed);

  var taskArea =
    tasks.length > 0 ? (
      <div>
        {tasks.map((task) => {
          if (!task.completed) {
            return (
              <Task
                key={task.id}
                id={task.id}
                completed={task.completed}
                label={task.label}
                onDeleteTask={deleteTask}
                onCompleteTask={completeTask}
              />
            );
          }
        })}
        {tasks.map((task) => {
          if (task.completed) {
            return (
              <Task
                key={task.id}
                id={task.id}
                completed={task.completed}
                label={task.label}
                onDeleteTask={deleteTask}
                onCompleteTask={completeTask}
              />
            );
          }
        })}
      </div>
    ) : (
      <div className={styles.noTasks}>
        <img src={clipboard} alt="" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    );

  return (
    <div className={styles.wrapper}>
      <NewTask
        handleCreateNewTask={handleCreateNewTask}
        newText={newText}
        handleNewTask={handleNewTask}
      />
      <div>
        <StatusToDo task={tasks.length} taskCompleted={tarefa.length} />
        {taskArea}
      </div>
    </div>
  );
}
