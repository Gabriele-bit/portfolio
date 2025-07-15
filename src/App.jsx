import './App.css'
import { HashLink } from 'react-router-hash-link';

function App() {

  return (
    <>
      {/*Container padre*/}
      <div className='flex flex-1 flex-col overflow-visible'>
        {/*Container 1 */}  
        <div className='flex flex-1 flex-row min-h-screen'> 
          {/*Container testo */}
          <div className='bg-[#AEC6CF] flex-2/3 flex-col items-center content-center'>
            {/*testo */}
            <div className='w-[30em]  flex flex-col justify-center justify-self-center items-center'>
              <p className='text-white  text-[2rem] font-[bungee] '>Hi! </p>
              <p className='text-[#444444]  font-[bungee] text-[3rem]  '>Gabriele Patanè </p>
              <p className='text-white  text-[2rem] font-[bungee]   '>here. </p>
              <div className='w-[100%] bg-amber-50'>
                <HashLink smooth to="#aboutme">
                  About me
                </HashLink>
                <HashLink smooth to="#projects">
                  About me
                </HashLink>
                <HashLink smooth to="#contact">
                  About me
                </HashLink>
              </div>
            </div>
          </div>
          <div className='bg-[#444444] max-w-[33.3em] flex-1/3 flex justify-center items-center '>
          </div>
        </div>


        <div id='aboutme' className='min-h-screen'>
          ciao
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, quam? Libero praesentium voluptatem delectus similique. Quod impedit tempore, eveniet minima non consequuntur earum quos cum et, delectus accusamus odit possimus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi blanditiis nostrum ad nihil eos qui architecto, cumque distinctio fugit dolore sed quas dolorum, suscipit quasi obcaecati quod eaque, aspernatur ipsam unde! Sapiente, nemo consectetur. Odio rerum, enim architecto ut quasi accusamus rem? Beatae modi veniam enim, atque fugit molestias sapiente, veritatis expedita magni voluptate temporibus porro, iusto incidunt quibusdam voluptatum asperiores. Error dicta minima hic porro sit nam, officiis, culpa tenetur assumenda ducimus beatae iure, asperiores voluptatibus aliquam iste sed dolorem. Aperiam, ducimus soluta! Doloremque rem qui voluptas tenetur expedita sit animi, provident nisi necessitatibus eligendi neque fuga asperiores ipsum sint quam, eos earum suscipit aliquam? Blanditiis repellendus, ducimus veritatis dolor adipisci cupiditate. Molestiae dolorem consequuntur doloremque sint sunt illum itaque optio amet, magnam nostrum ab odit, architecto nesciunt repudiandae provident beatae quos veritatis quam, fuga pariatur cumque voluptates obcaecati doloribus! Quaerat doloremque ipsam eum possimus itaque veritatis velit quasi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur, quibusdam tempora fugiat soluta expedita dolores vel repellat repudiandae enim ipsum alias? Iure deserunt corporis consequuntur dolores suscipit qui sapiente repudiandae facere quisquam laborum impedit, obcaecati quibusdam. Nostrum officiis ad molestias fugiat facere nemo. Vitae facere nesciunt saepe a obcaecati ducimus, quasi voluptatum, laborum sed similique ipsam incidunt illum nemo neque cumque sequi repudiandae soluta quam voluptas porro molestias officia laudantium? Doloribus nostrum laborum esse quo voluptatum, exercitationem dignissimos delectus porro magnam quia laudantium illum architecto magni quasi dolore aperiam temporibus, quibusdam voluptatibus saepe rerum tempora eius. Consequatur, neque est.
        </div>
        <br></br>
        <div id='projects' className='min-h-screen'>
          ciao
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur, quibusdam tempora fugiat soluta expedita dolores vel repellat repudiandae enim ipsum alias? Iure deserunt corporis consequuntur dolores suscipit qui sapiente repudiandae facere quisquam laborum impedit, obcaecati quibusdam. Nostrum officiis ad molestias fugiat facere nemo. Vitae facere nesciunt saepe a obcaecati ducimus, quasi voluptatum, laborum sed similique ipsam incidunt illum nemo neque cumque sequi repudiandae soluta quam voluptas porro molestias officia laudantium? Doloribus nostrum laborum esse quo voluptatum, exercitationem dignissimos delectus porro magnam quia laudantium illum architecto magni quasi dolore aperiam temporibus, quibusdam voluptatibus saepe rerum tempora eius. Consequatur, neque est.
        </div>
        <br></br>
        <div id='contact'className='min-h-screen'>
          ciao
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur, quibusdam tempora fugiat soluta expedita dolores vel repellat repudiandae enim ipsum alias? Iure deserunt corporis consequuntur dolores suscipit qui sapiente repudiandae facere quisquam laborum impedit, obcaecati quibusdam. Nostrum officiis ad molestias fugiat facere nemo. Vitae facere nesciunt saepe a obcaecati ducimus, quasi voluptatum, laborum sed similique ipsam incidunt illum nemo neque cumque sequi repudiandae soluta quam voluptas porro molestias officia laudantium? Doloribus nostrum laborum esse quo voluptatum, exercitationem dignissimos delectus porro magnam quia laudantium illum architecto magni quasi dolore aperiam temporibus, quibusdam voluptatibus saepe rerum tempora eius. Consequatur, neque est.
        </div>
      </div>
    </>
  )
}

export default App
