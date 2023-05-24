import React from "react";


function sideBar(){
  return(
  <div class="bg-gray-900 text-white h-screen border-t border-white  shadow">
      <div
        class="m-5 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
      >
        <textarea
          type="text"
          placeholder="send a message"
          class="m-0 w-full resize-none border-0 bg-transparent p-0  focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0 focus:outline-none max-h-200 h-24 overflow-y-hidden"
        />
      </div>
    </div>
  )
}
export default sideBar;