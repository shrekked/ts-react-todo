import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context/useTodo'
import { Input } from './Input'

export const AddTodo = () => {
  const [input, setInput] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const { addTodo } = useTodo()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() !== '') {
      addTodo(input)
      setInput('')
      toast.success('Todo added successfully!')
    } else {
      toast.error('Todo field cannot be empty!')
    }
  }

  return (
    <form onSubmit={handleSubmission}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <Input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          className="w-full text-sm px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white h-auto"
          placeholder="start typing..."
          id="todoInput"
        />
        <button
          type="submit"
          className="px-10 py-2 text-sm font-normal text-blue-300 bg-blue-900 boreder-2 border-blue-900 active:scale-95 rounded-xl whitespace-nowrap h-auto"
        >
          Add Todo
        </button>
      </div>
    </form>
  )
}
