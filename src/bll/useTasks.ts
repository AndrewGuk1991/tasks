import type {GlobalTaskListItemJsonApiData} from "../dal/types.ts";
import {useEffect, useState} from "react";
import {getTasks} from "../dal/api.ts";


export const useTasks = () => {
    const [tasks, setTasks] = useState<GlobalTaskListItemJsonApiData[] | null>(null)

    useEffect(() => {
        getTasks()
            .then(json => setTasks(json.data))
    }, [])

    return {
        tasks
    }
}