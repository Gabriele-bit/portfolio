import SingleProject from "./SingleProject"

export default function Projects() {
    return (
        <div id='projects' className=" flex flex-col ">
            <h1 className="w-full text-white font-bold text-[5vh] text-center">Projects</h1>
            <div className="h-full w-full flex flex-wrap">
                <SingleProject></SingleProject>
            </div>
        </div>
    )
}