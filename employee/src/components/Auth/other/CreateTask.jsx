import React from 'react'

function CreateTask() {
  return (
    <div className="mt-10 w-full">
        <form className="flex flex-wrap gap-10 w-full p-8 bg-[#111111] rounded-2xl border border-[#2a2a2a]">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI design"
                className="px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Date</h3>
              <input
                type="date"
                className="px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Assign to</h3>
              <input
                type="text"
                placeholder="employee name"
                className="px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">Category</h3>
              <input
                type="text"
                placeholder="design, dev, etc"
                className="px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <h3 className="text-lg font-medium">Description</h3>

            <textarea
              rows="10"
              placeholder="Enter Task Description"
              className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
            ></textarea>
          </div>

          {/* BUTTON */}
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-10 py-3 rounded-xl transition-all"
            >
              Create Task
            </button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask