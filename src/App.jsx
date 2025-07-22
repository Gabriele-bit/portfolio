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
      <div className=' w-[100%] text-black flex justify-center self-center gap-[5vw] font-[jersey] bg-white rounded-tl-0 rounded-bl-[2vh]
      rounded-tr-0 rounded-br-[2vh] p-[2vh] text-center lg:w-[70%] lg:p-[1vh]'>
        <HashLink smooth to="#aboutme" className='text-[3vh]  transition-transform hover:text-[#C9A74D] hover:scale-130 h-fit cursor-pointer'>
          About me
        </HashLink>
        <HashLink smooth to="#projects" className=' text-[3vh] transition-transform hover:text-[#C9A74D] hover:scale-130 h-fit cursor-pointer'>
          My Projects
        </HashLink>
        <HashLink smooth to="#contact" className='  text-[3vh] transition-transform hover:text-[#C9A74D] hover:scale-130 h-fit cursoor-pointer'>
          Contact me
        </HashLink>
      </div>
      {/* <Header></Header>
      <About></About>
      <Contact></Contact> */}
      <Alternative></Alternative>
      <hr className='p-[0.5px] w-[70%] self-center mb-[8vh] bg-red-100'></hr>
      <About></About>
      <hr className='p-[0.5px] w-[70%] self-center mb-[8vh] bg-red-100'></hr>
      <Projects></Projects>
    </div>
  )
}

export default App
