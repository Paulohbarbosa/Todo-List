import { PlusCircle } from "@phosphor-icons/react";
import styles from "./NewTask.module.css";
import { ChangeEvent } from "react";

interface NewTaskProps {
  handleCreateNewTask: () => void;
  newText: string;
  handleNewTask: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function NewTask({ handleCreateNewTask, newText, handleNewTask }: NewTaskProps) {

  const isNewTextEmpty = newText.length === 0;

  return (
    <form className={styles.form} onSubmit={handleCreateNewTask}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={newText}
        onChange={handleNewTask}
        required
      />
      <button type="submit" disabled={isNewTextEmpty}>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
