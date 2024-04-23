import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'



export default function App() {
    return ( 
      <div>
      <h1 className='text-center text-zinc-900 font-bold text-5xl pt-5'>Todo List</h1>
      <div className='flex justify-center items-center my-20'>  
        <div className='flex flex-col gap-6'>
          <TodoForm/>
          <TodoList/>
        </div> 
      </div>
      </div>
    )

}
