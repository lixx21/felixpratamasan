import {React, useState, useEffect} from 'react'

const data = [
  {
  "Image": "assets/experiences/sed.png",
  "Location": "Solve Education",
  "Job": "Data Analyst",
  "Period": "Jan 2024 - Present",
  "Description": [
    "Work with other departments to gain insights and identify opportunities",
    "Find and analyze data for other departments to address their challenges",
    "Present data to other departments to provide insights",
    "Evaluate features to inform the product team about necessary improvements to boost engagement and retention"]
  },
  {
    "Image": "assets/experiences/sed.png",
    "Location": "Solve Education",
    "Job": "Data Engineer",
    "Period": "Sep 2023 - Present",
    "Description": [
      "Developed and managed data pipelines using Airflow",
      "Deployed Airflow on AWS EC2 instances",
      "Designed and created views in BigQuery",
      "Built and maintained dashboards in Metabase and Looker Studio",
      "Optimized SQL queries for improved performance"]
  },
  {
    "Image": "assets/experiences/No-Code.png",
    "Location": "Nocode Magician",
    "Job": "Python Developer Intern",
    "Period": "Feb 2023 - Sep 2023",
    "Description": [
      "Build and deploying API to AWS EC2 and GCP Compute Engine",
      "Pointing IP address to DNS cloudflared using setup tunel in virtual machine (linux)",
      "Build API using python (FastAPI, Flask)",
      "Build user authentication using FastAPI for login and signup",
      "Create automation using Processio software",
      "Build ETL to move data from CSV to PostgreSQL database using Python",
      "Able to work with cloud",
      "Working with SQL"
    ]
  },
  {
    "Image": "assets/experiences/ontime.jpg",
    "Location": "OnTime Technology",
    "Job": "Data Science Intern",
    "Period": "Feb 2023 - Sep 2023",
    "Description": [
      "Build nails segmentation model using Tensorflow",
      "Build age detection model",
      "Image processing to detect wrinkle and face's moisture",
      "Using openCV to image processing",
      "Using tensorflow to build architecture of Yolo and U-net",
      "Able to use transfer learning and fine tuned the dataset"
    ]
  },
];


const Experiences = () => {
  return (
    <section id="Experiences" className='pt-20'>
      <div className='container'>
        <div className='flex flex-wrap justify-center items-center'>

          <div className='w-full px-4 mb-10'>
            <h3 className='font-bold uppercase text-white text-4xl mb-3 text-center lg:text-6xl'>
              Professional <span className='text-primary'>Experiences</span>
            </h3>

            <p className='text-slate-400 lg:w-2/3 mx-auto text-center pt-4 lg:text-2xl '>
            A journey through my career highlights, showcasing my growth, accomplishments, and the diverse roles that have shaped my expertise and passion for technology.
            </p>
          </div>

          {/* card */}
          <div className="pt-3 px-4 flex flex-wrap gap-6">
            {data.map((item,index)=>(
            
            <div key={index} className='flex flex-wrap border-4 rounded-3xl p-4 w-full'>
              <div className='w-full self-center px-4  lg:w-1/4'>
                <img src={item.Image} className='m-auto size-36 w-max'></img>
              </div>

              <div className='w-full self-end lg:w-3/4 lg:order-2 lg:px-8'>
                <h1 className='text-center uppercase font-bold text-2xl text-primary pt-8 lg:text-left lg:text-4xl'>{item.Location}</h1>

                <h4 className='font-bold text-white uppercase text-xl pt-8 lg:text-2xl lg:px-0'>{item.Job}</h4>
                <h5 className='font-semibold pt-2 text-md text-slate-300 lg:text-lg lg:px-0'>{item.Period}</h5>
                
                <ul className='pb-12 list-disc px-6 text-sm pt-2 text-slate-400 lg:text-lg lg:px-4'>
                {item.Description.map((desc,i)=> (
                  <li key={i}>{desc}</li>
                  ))}  
                </ul>
                
              </div>
            </div>

            ))}

          </div>

        </div>


      </div>



    </section>
  )
}

export default Experiences