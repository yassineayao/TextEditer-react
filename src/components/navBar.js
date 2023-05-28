
import React ,{ useContext } from "react";
import { AppContext } from './AppContext';

function NavBar(){
  const { state, setState } = useContext(AppContext);
  // const { otherState, setOtherState } = useContext(OtherContext);

  const handleButtonClick = () => {
    // Update the state when the button is clicked
  
    setState('youssef');
  };
  const handleClick = () => {
    // Update the state when the button is clicked
  
    // setOtherState ('youssef');
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
          <button  class="bg-white  hover:bg-gray-100 text-xs m-3 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-gray-900" onClick={handleButtonClick}>outline</button>
          <button  class="bg-white  hover:bg-gray-100 text-xs m-3 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-gray-900" onClick={handleClick}>paragraph</button>
          <button  class="bg-white  hover:bg-gray-100 text-xs m-3 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-gray-900" >image</button>
          <button  class="bg-white  hover:bg-gray-100 text-xs m-3 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-gray-900" >rephrase</button>
          <button  class="bg-white  hover:bg-gray-100 text-xs m-3 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-gray-900" >export</button>
        </div>
        {/* <!-- Header Icons --> */}
        
      </div>
      
    </nav>
    
  </section>
</div>
);
}
export default NavBar;