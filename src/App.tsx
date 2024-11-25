import { Route, Routes, useMatch } from 'react-router-dom'
import { TaskPage } from './components/TaskPage'
import ProjectPage from './components/ProjectPage'
import SprintPage from './components/SprintPage'
import { Sidebar } from './components/Sidebar'
import InboxPage from './components/InboxPage'
import MyTasksPage from './components/MyTasksPage'
import DraftsPage from './components/DraftsPage'
import TeamsPage from './components/TeamsPage'

import { Suspense, useEffect, useState } from 'react'
import tasksService from './services/tasks'
import { ITask } from './lib/types'
import PageTitle from './components/PageTitle'
import TaskDetailPage from './components/TaskPage/TaskDetailPage'
import ErrorBoundary from './components/ErrorBoundary'
import { useAppDispatch, useAppSelector } from './store'
import { initializeTasks } from './store/reducers/tasksReducer'
import { initializeUsers } from './store/reducers/usersReducer'
import { initializeProjects } from './store/reducers/projectsReducer'

function App() {
  const dispatch = useAppDispatch();

  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const [tasks, setTasks] = useState<{ title: string; value: string; tasks: ITask[] }[]>([
    { title: 'Backlog', value: 'Backlog', tasks: [] },
    { title: 'To Do', value: 'Todo', tasks: [] },
    { title: 'In Progress', value: 'In Progress', tasks: [] },
    { title: 'Review', value: 'Review', tasks: [] },
    { title: 'Completed', value: 'Completed', tasks: [] },
    { title: 'Canceled', value: 'Canceled', tasks: [] },
  ]);

  useEffect (() => {
    // mapTask();
    dispatch(initializeUsers());
    dispatch(initializeProjects());
    dispatch(initializeTasks());
  }, []);

  // const mapTask = async () => {
  //   const all = await tasksService.getTasks();
  //   const columns = [
  //     { title: 'Backlog', value: 'Backlog', tasks: all.filter((task: ITask) => task.status === 'Backlog') },
  //     { title: 'To Do', value: 'Todo', tasks: all.filter((task: ITask) => task.status === 'Todo') },
  //     { title: 'In Progress', value: 'In Progress', tasks: all.filter((task: ITask) => task.status === 'In Progress') },
  //     { title: 'Review', value: 'Review', tasks: all.filter((task: ITask) => task.status === 'Review') },
  //     { title: 'Completed', value: 'Completed', tasks: all.filter((task: ITask) => task.status === 'Completed') },
  //     { title: 'Canceled', value: 'Canceled', tasks: all.filter((task: ITask) => task.status === 'Canceled') }
  //   ];
  //   setTasks(columns) ;
  // }
  ``

  const toggleSidebar = () => {
    setSidebarVisibility(!sidebarVisibility);
  }

  return (
    <div className="flex h-screen bg-gray-200 p-2">
      <Sidebar isOpen={sidebarVisibility} onClose={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden rounded-sm bg-white">
        <PageTitle setSidebarOpen={toggleSidebar} />
        <Routes>
          <Route path="/tasks/:id" element={<TaskDetailPage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/my-tasks" element={<MyTasksPage />} />
          <Route path="/drafts" element={<DraftsPage />} />
    
          <Route path="/initiatives" element={
            <ErrorBoundary>
              <ProjectPage />
            </ErrorBoundary>
          } />
          <Route path="/team-projects" element={
            // <Suspense fallback={<div>Loading Projects</div>}>
            // <ErrorBoundary>
              <ProjectPage />
            // </ErrorBoundary>
            // </Suspense>
          } />
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
