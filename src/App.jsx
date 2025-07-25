import './App.css'
import About from './Components/About';
import Alternative from './Components/Alternative';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Projects from './Components/Projects';

function App() {

  return (
    <div className='flex flex-col w-[100%] shadow-xl shadow-[#C9A74D] h-[100%] overflow-y-auto scrollable relative'>
      <Menu></Menu>
      <Alternative></Alternative>
      <About></About>
      {/* <div className=' p-5 flex justify-center w-[100%] h-[100%] items-center'><hr className=' p-[0.5px] w-[70%]  bg-red-100'></hr></div> */}
      <Projects></Projects>
      {/* <div className=' p-5 flex justify-center w-[100%] h-[100%] items-center'><hr className=' p-[0.5px] w-[70%]  bg-red-100'></hr></div> */}
      <Contact></Contact>
    </div>
  )
}

export default App
