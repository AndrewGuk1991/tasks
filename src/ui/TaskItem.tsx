import styles from './TaskItem.module.css'
import clsx from "clsx";
import type {GlobalTaskListItemJsonApiData} from "../dal/types.ts";

type Props = {
    task: GlobalTaskListItemJsonApiData
    onTaskSelect: (taskId: string, boardId: string) => void
    isSelected: boolean
}

export const TaskItem = ({task, onTaskSelect, isSelected}: Props) => {
    console.log('TaskItem')

    const classIsDoneTitle = clsx([{
        [styles.isDoneTitle]: task.attributes.status === 2
    }])
    const classTask = clsx([{
        [styles.task]: true,
        [styles.isDone]: task.attributes.status === 2,
        [styles.isSelected]: isSelected,
    }])

    const handleTaskSelect = () => {
        onTaskSelect(task.id, task.attributes.boardId)
    }

    return (
        <li className={classTask} onClick={handleTaskSelect}>
            <p>
                <b>Заголовок: </b><span className={classIsDoneTitle}>{task.attributes.title}</span>
            </p>
            <p>
                <b>Статус: </b><input type='checkbox' checked={task.attributes.status === 2} />
            </p>
            <p>
                <b>Дата создания задачи: </b><span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span>
            </p>
        </li>
    )
}