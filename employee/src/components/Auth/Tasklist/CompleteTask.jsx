import React from 'react'

const CompleteTask = ({ data }) => {
  const { category, taskDate, taskTitle, taskDescription } = data || {};
  return (
    <div className="w-full sm:w-[320px] p-5 bg-green-600 text-white rounded-xl shadow-md flex-shrink-0">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{category || 'General'}</h3>
        <h4 className="text-sm">{taskDate || ''}</h4>
      </div>
      <h2 className="mt-4 text-2xl font-semibold leading-tight">{taskTitle || 'Untitled Task'}</h2>
      <p className="mt-2 text-sm text-gray-100/90">{taskDescription || ''}</p>
      <div className="flex justify-between mt-4 gap-3">
        <button className="flex-1 bg-white/10 hover:bg-white/20 transition-colors duration-150 py-2 px-3 text-sm rounded-md">Mark as completed</button>
        <button className="flex-1 bg-red-500 hover:bg-red-600 transition-colors duration-150 py-2 px-3 text-sm rounded-md">Mark as failed</button>
      </div>
    </div>
  )
}

export default CompleteTask
