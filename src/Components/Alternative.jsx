import Button from "./Button"
export default function Alternative() {
    return (
        <div className="flex flex-col justify-around text-white min-h-full items-center bg-neutral-900 " >
            <div className="flex flex-col w-fit items-center leading-[5vh]">
                <span className=" font-[jersey] text-[3vh] self-start">Hi there!</span>
                <span className="text-[#C9A74D] font-[bungee] text-[6vh] text-center
                lg:text-[8vh]">Gabriele<span className=" text-[#F5F5F5] font-[jersey] text-[5vh]"> here</span> </span>
                <span className="text-[4.5vh] lg:text-[5.5vh] font-[jersey] text-center">I build stuff for the <span className="font-mono font-bold"> web</span>.</span>
            </div>
            <br></br>
            <div className="flex items-start justify-center ">
                <Button></Button>
            </div>
        </div>
    )
}