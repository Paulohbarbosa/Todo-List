import styles from "./Task.module.css";
import { Circle, CheckCircle, Trash } from "@phosphor-icons/react";

interface TaskProps {
  id: string;
  label: string;
  completed: boolean;
  onDeleteTask: (arg0: string) => void;
  onCompleteTask: (arg0: string) => void;
}

export function Task({ id, label, completed, onDeleteTask, onCompleteTask }: TaskProps) {
  
  var titleButton = completed ? "Tarefa concluída" : "Concluir a tarefa";
  var classButton = completed ? styles.completed : styles.notCompleted;
  var icons = completed ? <CheckCircle weight="fill" /> : <Circle />;
  var classLabel = completed ? styles.completedText : styles.notCCompletedText;

  function handleCompleteTask() {
    onCompleteTask(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div id={id} className={styles.body}>
      <button
        title={titleButton}
        onClick={handleCompleteTask}
        className={classButton}
      >
        {icons}
      </button>
      <label className={classLabel} onClick={handleCompleteTask}>
        {label}
      </label>
      <button
        title="Deletar tarefa"
        onClick={handleDeleteTask}
        className={styles.delete}
      >
        <Trash />
      </button>
    </div>
  );
}
