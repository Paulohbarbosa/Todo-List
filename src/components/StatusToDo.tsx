import styles from "./StatusToDo.module.css"

interface StatusProps{
  task: number,
  taskCompleted: number
}

export function StatusToDo({ task, taskCompleted }: StatusProps) {

  var tasksCompleteds =
    task > 0 ? (
      <span> {taskCompleted} de {task} </span>
    ) : (
      <span>{taskCompleted}</span>
    );
    
  return (
    <div className={styles.div}>
      <div>
        <strong className={styles.tasks}>Tarefas criadas</strong>
        <span>{task}</span>
      </div>
      <div>
        <strong className={styles.completed}>Concluídas</strong>
        {tasksCompleteds}
      </div>
    </div>
  );
}
