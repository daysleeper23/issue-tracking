import { Route, Routes } from 'react-router-dom'
import { TaskPage } from './components/TaskPage'
import ProjectPage from './components/ProjectPage'
import SprintPage from './components/SprintPage'
import { Sidebar } from './components/Sidebar'
import InboxPage from './components/InboxPage'
import MyTasksPage from './components/MyTasksPage'
import DraftsPage from './components/DraftsPage'
import TeamsPage from './components/TeamsPage'

import { useEffect, useState } from 'react'
import { getAll } from './services/tasks.json-server'
import { ITask } from './lib/types'

function App() {
  const [tasks, setTasks] = useState([
    { title: 'Backlog', value: 'Backlog', tasks: [] },
    { title: 'To Do', value: 'Todo', tasks: [] },
    { title: 'In Progress', value: 'In Progress', tasks: [] },
    { title: 'Review', value: 'Review', tasks: [] },
    { title: 'Completed', value: 'Completed', tasks: [] },
    { title: 'Canceled', value: 'Canceled', tasks: [] },
  ]);

  useEffect (() => {
    const fetchTasks = async () => {
      const all = await getAll();
      const columns = [
        { title: 'Backlog', value: 'Backlog', tasks: all.filter((task: ITask) => task.status === 'Backlog') },
        { title: 'To Do', value: 'Todo', tasks: all.filter((task: ITask) => task.status === 'Todo') },
        { title: 'In Progress', value: 'In Progress', tasks: all.filter((task: ITask) => task.status === 'In Progress') },
        { title: 'Review', value: 'Review', tasks: all.filter((task: ITask) => task.status === 'Review') },
        { title: 'Completed', value: 'Completed', tasks: all.filter((task: ITask) => task.status === 'Completed') },
        { title: 'Canceled', value: 'Canceled', tasks: all.filter((task: ITask) => task.status === 'Canceled') }
      ];
      setTasks(columns);
    }
    fetchTasks();
  }, []);

  return (
    <div className="flex h-screen bg-gray-200 p-2">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden rounded-sm bg-white">
        <Routes>
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/my-tasks" element={<MyTasksPage />} />
          <Route path="/drafts" element={<DraftsPage />} />

          <Route path="/initiatives" element={<ProjectPage />} />
          <Route path="/team-projects" element={<ProjectPage />} />
          <Route path="/views" element={<TeamsPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          
          <Route path="/tasks" element={<TaskPage tasks={tasks}/>} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/sprints" element={<SprintPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
