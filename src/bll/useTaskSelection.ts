import {useState} from "react";

export const useTaskSelection = () => {
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
    const [selectedTaskBoardId, setSelectedTaskBoardId] = useState<string | null>(null)
    const handleReset = () => {
        setSelectedTaskId(null)
        setSelectedTaskBoardId(null)
    }

    const handleTaskSelect = (taskId: string, boardId: string) => {
        setSelectedTaskId(taskId)
        setSelectedTaskBoardId(boardId)
    }

    return {
        selectedTaskId,
        selectedTaskBoardId,
        handleReset,
        handleTaskSelect
    }

}