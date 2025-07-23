import './App.css'
import About from './Components/About';
import Alternative from './Components/Alternative';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Projects from './Components/Projects';
import { HashLink } from "react-router-hash-link"
function App() {

  return (
    <div className='flex flex-col w-[100%] shadow-xl shadow-[#C9A74D] h-full overflow-y-auto scrollable '>
      <div className=' w-[100%] text-white flex justify-center self-center gap-[5vw] font-sans rounded-tl-0 rounded-bl-[2vh]
      rounded-tr-0 rounded-br-[2vh]  text-center lg:w-[70%] p-2 bg-red-400'>
        <HashLink smooth to="#aboutme" className='text-[3vh]  transition-transform hover:scale-130 h-fit hover:text-black hover:rounded-[2vh] hover:font-bold cursor-pointer'>
          About
        </HashLink>
        <HashLink smooth to="#projects" className=' text-[3vh] transition-transform  hover:scale-130 h-fit hover:text-black hover:rounded-[2vh] hover:font-bold cursor-pointer'>
          Projects
        </HashLink>
        <HashLink smooth to="#contact" className='  text-[3vh] transition-transform  hover:scale-130 h-fit hover:text-black hover:rounded-[2vh] hover:font-bold cursoor-pointer'>
          Contacts
        </HashLink>
      </div>
      {/* <Header></Header>
      <About></About> */}
      <Alternative></Alternative>
      <div className=' p-5 flex justify-center w-[100%] h-[100%] items-center'><hr className=' p-[0.5px] w-[70%]  bg-red-100'></hr></div>
      <About></About>
      <div className=' p-5 flex justify-center w-[100%] h-[100%] items-center'><hr className=' p-[0.5px] w-[70%]  bg-red-100'></hr></div>
      <Projects></Projects>
      <div className=' p-5 flex justify-center w-[100%] h-[100%] items-center'><hr className=' p-[0.5px] w-[70%]  bg-red-100'></hr></div>
      <Contact></Contact>
    </div>
  )
}

export default App
