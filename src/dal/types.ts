type GlobalTaskListItemDto = {
    title: string
    boardId: string
    status: number
    priority: number
    addedAt: string
}

export type GlobalTaskListItemJsonApiData = {
    id: string
    attributes: GlobalTaskListItemDto
}

type TaskDetailsDto = {
    id: string
    title: string
    boardId: string
    boardTitle: string
    description: string
}

export type TaskDetailsData = {
    id: string
    attributes: TaskDetailsDto
}

export type GetTaskOutput = {
    data: TaskDetailsData
}

export type GlobalTaskListResponse = {
    data: GlobalTaskListItemJsonApiData[]
}