import {TasksList} from "./TasksList.tsx";
import {TaskDetails} from "./TaskDetails.tsx";
import styles from './MainPage.module.css'
import {useTaskSelection} from "../bll/useTaskSelection.ts";


export const MainPage = () => {
    console.log('MainPage')
    const {selectedTaskId, selectedTaskBoardId, handleReset, handleTaskSelect} = useTaskSelection()

    return (
        <>
            <hr />
            <div className={styles.container}>
                <TasksList
                    onReset={handleReset}
                    selectedTaskId={selectedTaskId}
                    onTaskSelect={handleTaskSelect}/>
                <TaskDetails selectedTaskId={selectedTaskId} selectedTaskBoardId={selectedTaskBoardId}/>
            </div>
        </>
    )
}