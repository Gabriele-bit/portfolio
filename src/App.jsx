
import './App.css'


function App() {

  return (
    <>
      {/*Container padre*/}
      <div className='flex flex-1 flex-col '>
        {/*Container 1 */}
        <div className='flex flex-1 flex-row h-[100vh]'>
          {/*Container testo */}
          <div className='bg-[#AEC6CF] flex-2/3 flex-col items-center content-center  relative'>
            {/*testo */}
            <div className='w-[30em]  flex flex-col justify-center justify-self-center items-center'>
              <p className='text-white  text-[2rem] font-[bungee] '>Hi! </p>
              <p className='text-[#444444]  font-[bungee] text-[3rem]  '>Gabriele Patanè </p>
              <p className='text-white  text-[2rem] font-[bungee]   '>here. </p>
              <p className='text-white text-[1.5rem] text-justify m-[10px] '>I like creating complete web solutions that build functional, scalable applications with great user experience.</p>
            </div>
          </div>
          <div className='bg-[#444444] flex-1/3 relative'>
          <img src='src\assets\images\fotoSeria.jpg' className='w-[280px] absolute top-[20%] left-[-10%] shadow-2xl'></img>
          </div>
        </div>


        <div className='bg-white'>
          ciao
        </div>
      </div>
    </>
  )
}

export default App
