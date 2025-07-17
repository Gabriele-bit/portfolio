export default function About() {
    return (
        <div id='aboutme' className='flex flex-col gap-10 min-h-full  m-[5vh]'>
            <div>
                <h1 className=' text-[5vh] font-[bungee] text-[#444444] text-center'>
                 
                </h1>
            </div>

            {/*Contenitore principale */}
            <div className="flex h-full ">
                {/*Contenitore 1 per Who Am I e Technologies */}
                <div>
                    {/*Who Am I */}
                    <div className="flex flex-col left w-[40vw] h-fit mt-[2vh]" >
                        <h2 className=' text-[5vh] font-[bungee] text-[#444444] text-left'>
                            Who am I?
                        </h2>
                        <p className="text-[2.5vh] text-justify">Hi! I’m Gabriele, a 23-year-old web developer with a strong passion for building digital experiences.
                            From designing intuitive front-ends to developing robust back-end systems, I create full-stack web applications that are scalable, responsive, and visually compelling.
                        </p>
                    </div>
                    {/*Technologies*/}
                    <div className="flex ml-[7vw] w-[40vw] flex-col justify-center h-[100%]">
                        <h2 className=' text-[5vh] font-[bungee] text-[#444444] text-left'>
                            Technologies
                        </h2>
                        <p className="text-[2.5vh] text-justify">Hi! I’m Gabriele, a 23-year-old web developer with a strong passion for building digital experiences.
                            From designing intuitive front-ends to developing robust back-end systems, I create full-stack web applications that are scalable, responsive, and visually compelling.
                        </p>

                    </div>
                </div>

                {/*Contenitore 2 per my studies  */}
                <div className="flex w-full items-center ">
                    <div className="flex flex-col ml-[5vw] w-[40vw] h-fit  ">
                        <h2 className=' text-[5vh] font-[bungee] text-[#444444] text-left'>
                            My studies
                        </h2>
                        <p className="text-[2.5vh] text-justify">Hi! I’m Gabriele, a 23-year-old web developer with a strong passion for building digital experiences.
                            From designing intuitive front-ends to developing robust back-end systems, I create full-stack web applications that are scalable, responsive, and visually compelling.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}