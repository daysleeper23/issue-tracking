import { ITask } from "./types";

const projectNames = [
  "UI Components", "Task View", "Dashboard Design", "Notifications System", 
  "API Integration", "Authentication Service", "Database Schema Design", 
  "WebSocket Integration", "Performance Optimization", "Testing Automation"
];

const sprintTitles = [
  "MVP Sprint 1", "MVP Sprint 2", "Beta Release Sprint", "Performance Sprint", 
  "Bug Fixing Sprint", "User Feedback Sprint", "UI Optimization Sprint", 
  "API Testing Sprint", "Cross-Platform Testing Sprint", "Final Release Sprint"
];

const assigneeNames = [
  "John Doe", "Jane Smith", "Emily Johnson", "Michael Brown", 
  "Sarah Davis", "David Wilson", "Linda Martinez", "James Garcia", 
  "Patricia Anderson", "Robert Thomas", "Jennifer Lee", "Charles Clark"
];

const priorities = ["No", "Low", "Medium", "High", "Urgent"];
export const statuses = ["Backlog", "Todo", "In Progress", "Review", "Completed", "Canceled"];
const onlineStatuses = ["Online", "Offline", "Busy", "Away"];

function getRandomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomAvatar() {
  const gender = Math.random() < 0.5 ? 'men' : 'women';
  const number = Math.floor(Math.random() * 99) + 1;
  return `https://randomuser.me/api/portraits/${gender}/${number}.jpg`;
  
}

function generateRandomTask(id: number): ITask {
  const taskTitles = [
    `Design ${getRandomItem(projectNames)} UI`,
    `Develop ${getRandomItem(projectNames)} API`,
    `Fix Bug in ${getRandomItem(projectNames)}`,
    `Optimize ${getRandomItem(projectNames)} Performance`,
    `Add Real-Time ${getRandomItem(projectNames)}`,
    `Implement ${getRandomItem(projectNames)} Feature`,
    `Write Tests for ${getRandomItem(projectNames)}`,
    `Refactor ${getRandomItem(projectNames)} Code`,
    `Deploy ${getRandomItem(projectNames)} to Production`,
    `Conduct User Testing for ${getRandomItem(projectNames)}`
  ];

  return {
    id: `task-${id}`,
    title: getRandomItem(taskTitles),
    project: {
      id: `project-${Math.floor(Math.random() * 1000)}`,
      title: generateRandomProjectName()
    },
    sprint: {
      id: `sprint-${Math.floor(Math.random() * 1000)}`,
      title: getRandomItem(sprintTitles)
    },
    dueDate: new Date(Date.now() + Math.random() * 10000000000).toISOString().split('T')[0], // Random future date
    priority: getRandomItem(priorities),
    status: getRandomItem(statuses),
    estimate: Math.floor(Math.random() * 10) + 1, // Random estimate between 1 and 10 hours
    assignee: {
      id: `assignee-${Math.floor(Math.random() * 1000)}`,
      name: getRandomItem(assigneeNames),
      avatarUrl: getRandomAvatar(),
      onlineStatus: getRandomItem(onlineStatuses)
    }
  };
}

// Generate an array of 100 random tasks
export const tasks = Array.from({ length: 100 }, (_, i) => generateRandomTask(i + 1));
export const todo = tasks.filter(task => task.status === 'Todo');
export const inProgress = tasks.filter(task => task.status === 'In Progress');
export const review = tasks.filter(task => task.status === 'Review');
export const completed = tasks.filter(task => task.status === 'Completed');
export const backlog = tasks.filter(task => task.status === 'Backlog');
export const canceled = tasks.filter(task => task.status === 'Canceled');

// console.log(tasks);

//generate random project name with a random emoji at the start
export function generateRandomProjectName() {
  const emojis = ['🚀', '🎨', '🔧', '📊', '📅', '📚', '📈', '🔥', '🌐', '📱'];
  return `${emojis[Math.floor(Math.random() * emojis.length)]} ${getRandomItem(projectNames)}`;
}