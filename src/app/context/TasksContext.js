"use client";
import { createContext, useContext } from "react";

export const TaskContext = createContext(); 

export const useTasks = () => {
  const context = useContext(TaskContext)
  if(!context) throw new Error('useTasks must used within a provider')
  return context
}

export const TaskProvider = ({children}) => {

  const tasks = [{
    id: 1,
    title: "My first Task",
    description: "some task"
  },
  {
    id: 2,
    title: "My Second Task",
    description: "some task 2"
  },
  {
    id: 3,
    title: "My Third Task",
    description: "some task 3"
  }
];

 return <TaskContext.Provider 
 value={{
    tasks,
  }}>
    {children}
 </TaskContext.Provider>;
}