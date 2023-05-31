
import React ,{ useContext } from "react";
import { AppContext } from './AppContext';

function NavBar(){
  const { state, setState } = useContext(AppContext);
  

  const handleOutlineClick = () => {
    // Update the state when the button is clicked
  
    setState('outline');
  };
  const handleParagraphClick = () => {
    // Update the state when the button is clicked
    setState('paragraph');
    
  };
  const handleImageClick = () => {
    // Update the state when the button is clicked
    setState('image');
    
  };
  const handleRephrasClick = () => {
    // Update the state when the button is clicked
    setState('refrase');
    
  };
  const handleExportClick = () => {
    // Update the state when the button is clicked
    setState('export');
    
  };

  return(
//     <!-- component -->
// <!-- follow me on twitter @asad_codes -->

<div class="place-items-center ">
  <section class="relative mx-auto">
      {/* <!-- navbar --> */}
    <nav class="flex justify-between bg-gray-900 text-white w-screen">
      <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <a class="text-3xl font-bold font-heading" href="#">
          {/* <!-- <img class="h-9" src="logo.png" alt="logo"> -->
          Logo Here. */}
        </a>
        {/* <!-- Nav Links --> */}
        <div class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <button  class="bg-white  hover:bg-gray-100 text-xs m-3 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-gray-900" onClick={handleOutlineClick}>outline</button>
          <button  class="bg-white  hover:bg-gray-100 text-xs m-3 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-gray-900" onClick={handleParagraphClick}>paragraph</button>
          <button  class="bg-white  hover:bg-gray-100 text-xs m-3 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-gray-900"onClick={handleImageClick} >image</button>
          <button  class="bg-white  hover:bg-gray-100 text-xs m-3 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-gray-900" onClick={handleRephrasClick}>rephrase</button>
          <button  class="bg-white  hover:bg-gray-100 text-xs m-3 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-gray-900" onClick={handleExportClick}>export</button>
        </div>
        {/* <!-- Header Icons --> */}
        
      </div>
      
    </nav>
    
  </section>
</div>
);
}
export default NavBar;