import {useEffect, useState} from "react";
import type {TaskDetailsData} from "../dal/types.ts";
import {getTask} from "../dal/api.ts";


export const useTaskDetails = (selectedTaskId: string | null, selectedTaskBoardId: string | null) => {

    const [selectedTask, setSelectedTask] = useState<TaskDetailsData | null>(null)

    useEffect(() => {
        if (!selectedTaskId && !selectedTaskBoardId) {
            setSelectedTask(null)
            return
        }

        getTask(selectedTaskBoardId, selectedTaskId)
            .then(json => setSelectedTask(json.data))
    }, [selectedTaskId, selectedTaskBoardId])

    return {
        selectedTask
    }
}