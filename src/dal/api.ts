import type {GetTaskOutput, GlobalTaskListResponse} from "./types.ts";

const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY
    if (!apiKey) return undefined
    return {
        'api-key': apiKey
    }
}

export const getTask = (boardId: string | null, taskId: string | null): Promise<GetTaskOutput> => {
    return fetch('https://trelly.it-incubator.app/api/1.0/boards/' + boardId + '/tasks/' + taskId, {
        headers: prepareHeaders()
    })
        .then(res => res.json())
}

export const getTasks = (): Promise<GlobalTaskListResponse> => {
    return fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
        headers: prepareHeaders()
    })
        .then(res => res.json())
}


