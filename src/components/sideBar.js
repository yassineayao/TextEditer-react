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
          class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        />
      </div>
    </div>
  )
}
export default sideBar;