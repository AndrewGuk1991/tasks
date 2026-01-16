import type {GetTaskOutput, GlobalTaskListResponse} from "./types.ts";


export const getTask = (boardId: string | null, taskId: string | null): Promise<GetTaskOutput> => {
    return fetch('https://trelly.it-incubator.app/api/1.0/boards/' + boardId + '/tasks/' + taskId, {
        headers: {
            'api-key': 'b980f3b1-9992-4c88-83e5-eb17a410ba8f'
        }
    })
        .then(res => res.json())
}

export const getTasks = (): Promise<GlobalTaskListResponse> => {
    return fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
        headers: {
            'api-key': 'b980f3b1-9992-4c88-83e5-eb17a410ba8f'
        }
    })
        .then(res => res.json())
}


