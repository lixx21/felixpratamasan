import React from 'react'

const data = [
    {
        "url": "https://github.com/lixx21/legal-document-assistant",
        "Image":"assets/projects/llm-rag-flow.png",
        "Title":"Legal Document Assistant",
        "Description": "A Retrieval-Augmented Generation (RAG) application for querying legal documents. It uses PostgreSQL, Elasticsearch, and LLM to provide summaries and suggestions based on user queries. Features data ingestion with Airflow, real-time monitoring with Grafana, and a Streamlit interface.",
        "Tech": [
            "Python",
            "Elastic Search",
            "PostgreSQL",
            "Airflow",
            "Streamlit",
            "Grafana",
            "Google BERT"
        ]
        
    },
    {
        "url": "https://github.com/lixx21/airflow-dbt-gcp",
        "Image":"assets/projects/airflow-dbt-gcp.png",
        "Title":"Data Warehouse with Airflow, DBT and GCP ",
        "Description": "A comprehensive data pipeline leveraging Airflow, DBT, Google Cloud Platform (GCP), and Docker to extract, transform, and load data seamlessly from a staging layer to a data warehouse and data mart.",
        "Tech": [
            "Python",
            "Airflow",
            "DBT",
            "Docker",
            "BigQuery",
            "GCP"
        ]
        
    },
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
        "url": "https://github.com/lixx21/data-engineer-christmas-data",
        "Image":"assets/projects/christmas-project.png",
        "Title":"Christmas Data Engineer Project",
        "Description": "The Christmas Project is a festive-themed data engineering initiative designed to integrate and analyze diverse datasets, creating a comprehensive view of Christmas-related trends. Leveraging modern cloud and data technologies, it brings together music, movies, sales, and weather data to showcase how technology can enhance the holiday spirit.",
        "Tech": [
            "AWS Glue",
            "AWS S3",
            "Python",
            "Airflow",
            "Snowflake",
            "Power BI"
        ]
        
    }
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
                            <p className='pt-4 text-slate-300 text-left line-clamp-3'>
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