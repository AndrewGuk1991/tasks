import styles from './TaskDetails.module.css'
import {useTaskDetails} from "../bll/useTaskDetails.ts";

type Props = {
    selectedTaskId: string | null
    selectedTaskBoardId: string | null
}

export const TaskDetails = ({selectedTaskId, selectedTaskBoardId}: Props) => {
    console.log('TaskDetails')

    const  {selectedTask} = useTaskDetails(selectedTaskId, selectedTaskBoardId)

    return (
        <div className={styles.task}>
            <h2>Task Details</h2>
            {!selectedTask && !selectedTaskId && <p>Task is not selected</p>}
            {selectedTaskId && !selectedTask && <p>Loading...</p>}
            {selectedTaskId && selectedTask && selectedTask.id !== selectedTaskId && <p>Loading...</p>}
            {selectedTask && selectedTask.id === selectedTaskId && <ul>
                <li>title: {selectedTask.attributes.title}</li>
                <li>boardTitle: {selectedTask.attributes.boardTitle}</li>
                <li>description: {selectedTask.attributes.description || 'no description'}</li>
            </ul>}

        </div>
    )
}