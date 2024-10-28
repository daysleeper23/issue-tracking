import { Route, Routes } from 'react-router-dom'
import { TaskPage } from './components/TaskPage'
import ProjectPage from './components/ProjectPage'
import SprintPage from './components/SprintPage'
import { Sidebar } from './components/Sidebar'
import InboxPage from './components/InboxPage'
import MyTasksPage from './components/MyTasksPage'
import DraftsPage from './components/DraftsPage'
import TeamsPage from './components/TeamsPage'

function App() {

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
          
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/sprints" element={<SprintPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
