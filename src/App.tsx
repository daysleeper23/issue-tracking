import { useState } from 'react'
import { Toast } from './components/Toast'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { TaskPage } from './components/TaskPage'
import ProjectPage from './components/ProjectPage'
import SprintPage from './components/SprintPage'
import { Sidebar } from './components/Sidebar'
import KanbanColumn from './components/TaskPage/Kanban/Column/KanbanColumn'
import KanbanBoard from './components/TaskPage/Kanban/KanbanBoard'
import { backlog, canceled, completed, inProgress, review, todo } from './lib/data'

function App() {

  const columns = [
    { title: 'Backlog', tasks: backlog },
    { title: 'To Do', tasks: todo },
    { title: 'In Progress', tasks: inProgress },
    { title: 'Review', tasks: review },
    { title: 'Completed', tasks: completed },
    { title: 'Canceled', tasks: canceled }
  ];

  return (
    <div className="flex h-screen bg-gray-200 p-2">
      <div className="w-80 h-full bg-gray-200">
        Sidebar
      </div>
      <div className="flex-1 flex flex-col overflow-hidden rounded-sm bg-white">
        <div className="text-2xl font-bold p-4 border-b text-gray-800">
          Kanban Board
        </div>
        <KanbanBoard columns={columns} />
      </div>
    </div>



    // <div className="flex h-screen">
    //   <div className="w-64 bg-gray-800 text-white p-4">
    //     <div className="text-xl font-bold mb-6">Navigation</div>
    //     <nav className="space-y-2">
    //       <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Dashboard</a>
    //       <a href="#" className="block px-4 py-2 rounded bg-gray-700">Kanban Board</a>
    //       <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Projects</a>
    //       <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Calendar</a>
    //     </nav>
    //   </div>
      
    //   <div className="flex-1 flex flex-col overflow-hidden">
    //     <div className="p-2 bg-white border-b">
    //       <h1 className="text-2xl font-bold">Kanban Board</h1>
    //     </div>
    //     <div className="flex-1 p-2 overflow-x-auto">
    //       <div className="inline-flex h-full gap-2">
    //         {
    //           columns.map((column, index) => (
    //             <div key={index} className="flex-shrink-0 w-80 flex flex-col h-full rounded-lg p-2 bg-zinc-100">
    //                 <h2 className="font-medium mb-2">{column.title}</h2>
    //                 <div className="flex-1 overflow-y-auto space-y-2">
    //                   {
    //                     column.cards.map((card, cardIndex) => (
    //                       <div
    //                         key={cardIndex}
    //                         className="bg-white p-4 rounded shadow hover:shadow-md transition-shadow cursor-pointer"
    //                       >
    //                         {card}
    //                       </div>
    //                     ))
    //                   }
    //                 </div>
    //               </div>
    //           ))
    //         }
    //       </div>
    //     </div>
    //   </div>
    // </div> 
  )
}

export default App
