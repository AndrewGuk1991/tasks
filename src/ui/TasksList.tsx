import {TaskItem} from "./TaskItem.tsx";
import styles from './TasksList.module.css'
import style from './TaskItem.module.css'
import {useTasks} from "../bll/useTasks.ts";


type Props = {
    selectedTaskId: string | null
    onTaskSelect: (selectedTaskId: string, selectedTaskBoardId: string) => void
    onReset: () => void
}

export const TasksList = ({onTaskSelect, selectedTaskId, onReset}: Props) => {
    console.log('TasksList')

    const {tasks} = useTasks()

    const handleOnTaskSelect = (taskId: string, boardId: string) => {
        onTaskSelect(taskId, boardId)
    }

    return (
        <div className={styles.tasks}>
            <div>
                <button onClick={onReset}>reset</button>
                <hr/>
            </div>
            {tasks === null && <div className={style.task}>Loading...</div>}
            {tasks && <div className={styles.tasks}>
                {
                    tasks?.map(task => {
                        return (
                            <TaskItem task={task}
                                      key={task.id}
                                      isSelected={task.id === selectedTaskId}
                                      onTaskSelect={handleOnTaskSelect}/>
                        )
                    })
                }
            </div>
            }
        </div>
    )
}


