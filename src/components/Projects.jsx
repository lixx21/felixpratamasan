import React from 'react'

const data = [
    {
        "url": "https://github.com/lixx21/OCR-KTP",
        "Image":"assets/projects/ocr.png",
        "Title":"Object Character Recognition",
        "Description": "OCR KTP is used for detect name and gender in KTP, therefore user doesn't need to input their name and gender and this is used for verified user's account.",
        "Tech": [
            "Python",
            "Tensorflow",
            "Flask",
            "OpenCV",
            "Tesseract"
        ]
        
    },
    {
        "url": "https://github.com/lixx21/LLM-DataTalks-FAQ",
        "Image":"assets/projects/llm.png",
        "Title":"LLM DataTalks FAQ Chatbot",
        "Description": "Developed a sophisticated Chatbot App designed to handle Frequently Asked Questions (FAQs) for DataTalks, leveraging the capabilities of Large Language Models (LLMs)",
        "Tech": [
            "Python",
            "ElasticSearch",
            "Mistral.AI",
            "Docker",
            "Streamlit"
        ]
        
    },
    {
        "url": "https://github.com/lixx21/Movies-List-API",
        "Image":"assets/projects/crud-typescript.png",
        "Title":"Movies List REST API",
        "Description": "This project focuses on building a robust CRUD API using Express.js, TypeScript, and MongoDB. The goal is to create a scalable backend system that can perform Create, Read, Update, and Delete operations on movie data.",
        "Tech": [
            "Javascript",
            "Typescript",
            "Express.JS",
            "MongoDB"
        ]
        
    },
    {
        "url": "https://github.com/lixx21/simple_object_localization_app",
        "Image":"assets/projects/object-localization.png",
        "Title":"Object Localization",
        "Description": "This project is to localization and predict an object in the image note: this project only detect cucumber, eggplant, and mushroom due the dataset that I used only contains those object.",
        "Tech": [
            "Python",
            "Tensorflow",
            "Flask",
            "OpenCV",
            "HTML"
        ]
        
    },
]

const Projects = () => {
  return (
    <section id="projects" className='pt-20 px-6 retalive'>
        <div className='container'>
            <div className='flex flex-wrap'>
                <div className='w-full px-4'>
                    <h1 className='font-bold uppercase text-white text-4xl mb-3 text-center lg:text-6xl'>
                        Highligted <span className='text-primary'>Projects</span></h1>
                    <p className='text-slate-400 lg:w-2/3 mx-auto text-center pt-4 lg:text-2xl '>
                    Here's a glimpse into some of the projects I'm most proud of. These highlights showcase my journey through innovative solutions and creative problem-solving
                    </p>
                </div>
                
                {/* project group*/}
                <div className='flex flex-wrap w-full pt-10 gap-6 item-center justify-center lg:gap-10'>

                    {/* project 1 group 1 */}
                    {data.map((item, index)=> (
                    <a key={index} href = {item.url} target="_blank" className='flex self-center flex-wrap shadow-blue-400 rounded-3xl shadow-lg p-4 lg:w-2/5'>
                        <div className='w-full'>
                            <img src={item.Image} className='m-auto size-64 w-full'></img>
                        </div>

                        <div className='min-h-48'>
                            <h4 className='text-left uppercase text-white font-bold text-xl pt-6'>
                                {item.Title}</h4>
                            <p className='pt-4 text-slate-300 text-left'>
                                {item.Description}
                            </p>
                            
                            <skills className="flex flex-wrap pt-4 gap-2">

                                {item.Tech.map((tech, i)=>(
                                <p key={i} className='text-white font-bold text-4 py-1 px-3 bg-slate-500 rounded-full'>{tech}</p>
                                ))}
                            </skills>
                        </div>
                    </a>
                    ))}
                </div>
            </div>

    

        </div>
        
    </section>
  )
}

export default Projects