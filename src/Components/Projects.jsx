import SingleProject from "./SingleProject"

export default function Projects() {
    return (
        <div id='projects' className=" flex flex-col h-fit">
            <h1 className="w-full text-white font-bold text-[5vh] text-center">Projects</h1>
            <div className="h-full w-full flex flex-col flex-wrap justify-start gap-5.5
            lg:flex-row  p-3 pt-5.5">
                <SingleProject
                    title="shoPOP"
                    screenMobile="src\assets\images\Immagine WhatsApp 2025-07-22 ore 22.42.53_914f590b.jpg"
                    screenDesktop="src\assets\images\Screenshot 2025-07-22 224038.png"
                    technologies="React, HTML, CSS"
                    description="shoPOP is your sleek and intuitive web app designed to make grocery shopping easier than ever. 
                    Add items to your list, remove them, check them off
                         when they're bought or mark them as out of stock – all in a few clicks.
                          Whether you're planning your weekly groceries or managing a shared list, 
                          shoPOP keeps everything organized and right at your fingertips. 
                          Shopping smart starts here."
                    subtitle="Smart & Simple Shopping Lists"
                    link="https://shopop.netlify.app/"></SingleProject>

                <SingleProject
                    title="Just ToDo It"
                    screenMobile="src\assets\images\Immagine WhatsApp 2025-07-22 ore 22.44.19_4fb1d88b.jpg"
                    screenDesktop="src\assets\images\Screenshot 2025-07-22 224504.png"
                    technologies="React, HTML, CSS"
                    description=" Just To Do List is your minimalist yet powerful task manager designed to help you stay focused and productive. Easily create new reminders, set priorities, assign due dates, and categorize your tasks by type. Whether it’s work, personal goals, or errands, Just To Do List keeps everything in order so you can tackle your day with clarity and confidence. Simple, smart, and tailored to your needs."
                    subtitle="Organize Your Day, Your Way"
                    link="https://just-to-do-list.netlify.app/">
                </SingleProject>




            </div>
        </div>
    )
}