const STORAGE_KEY = 'tasks'
export function getTasks() {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
}

export function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

export function addTask(data, tasks) {
    const newTask = { id: Date.now(), ...data }
    const updated = [...tasks, newTask]
    saveTasks(updated)
    return updated
}

export function deleteTask(id, tasks) {
    const updated = tasks.filter(task => task.id !== id)
    saveTasks(updated)
    return updated
}

export function updateTask(id, newData, tasks) {
    const updated = tasks.map(task =>
        task.id === id ? { ...task, ...newData } : task
    )
    saveTasks(updated)
    return updated
}
