import Button from "./Button"
export default function About() {
    return (
        <div id="aboutme" className=" flex flex-col justify-around text-white text-left  min-h-fit lg:min-h-full ">
            {/* <h1 className="w-full text-white font-bold text-[5vh] text-center ">About</h1> */}
            <div className="flex flex-col m-5 gap-10 lg:flex-row ">
                <div className="flex flex-col flex-1/3">
                    <div className="p-5 flex flex-col bg-[#333333a3] border-1 border-[#ffffff5e] rounded-2xl  lg:h-fit " >
                        <h2 className='text-[4.5vh] font-bold '>
                            Hi!
                        </h2>
                        <p className="text-[2.5vh] m-[1vw] mt-0 "  >I’m Gabriele, a 23-year-old web developer with a strong passion for building digital experiences.
                            From designing intuitive front-ends to developing robust back-end systems, I create full-stack web applications that are scalable, responsive, and visually compelling.
                        </p>
                    </div>
                    <div className="hidden lg:flex-1 lg:flex items-center justify-center">
                        <Button></Button>
                    </div>
                </div>


                <div className="flex-1/2 p-5 flex flex-col bg-[#333333a3]  border-1 border-[#ffffff5e] rounded-2xl h-fit">
                    <h2 className='text-[4.5vh] font-bold'>
                        Technologies
                    </h2>
                    <p className="text-[2.5vh] m-[1vw] mt-0">
                        I have experience with a range of technologies across backend, frontend, and database development. Below is a summary of the tools and languages I currently use and continue to learn.
                    </p>

                    <div className=" m-[1vw] mt-0">
                        <div className="mb-[2vh]">
                            <h3 class="text-2xl font-semibold">Backend:</h3>
                            <p className="text-[2.5vh]">Java, Spring Boot, Spring AI</p>
                        </div>
                        <div className="mb-[2vh]">
                            <h3 class="text-2xl font-semibold">Frontend:</h3>
                            <p className="text-[2.5vh]">HTML, CSS, Tailwind CSS, JavaScript, React</p>
                        </div>
                        <div className="mb-[2vh]">
                            <h3 class="text-2xl font-semibold">Databases:</h3>
                            <p className="text-[2.5vh]">MySQL</p>
                        </div>
                        <div className="mb-[2vh]">
                            <h3 class="text-2xl font-semibold">Other Languages:</h3>
                            <p className="text-[2.5vh]">PHP, C, C++, C#, Unity</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}