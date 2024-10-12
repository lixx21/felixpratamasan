import {React, useState, useEffect} from 'react'

const data = [
  {
  "Image": "assets/experiences/sed.png",
  "Location": "Solve Education",
  "Job": "Data Analyst",
  "Period": "Jan 2024 - Present",
  "Description": [
    "Collaborated with various departments to gather insights and identify opportunities for improvement.",
    "Created dynamic reports and dashboards in Spreadsheets to visualize program performance metrics, which were regularly presented to the program team for review and decision-making.",
    "Assessed features and provided recommendations to the product team for enhancing user engagement and retention.",
    "Developed custom queries in BigQuery to analyze large datasets, identifying trends, patterns, and key performance indicators (KPIs) critical to program success.",
    "Monitored data for anomalies and inconsistencies, issuing timely alerts to the team when critical issues or potential risks were detected that could negatively impact business operations."]
  },
  {
    "Image": "assets/experiences/sed.png",
    "Location": "Solve Education",
    "Job": "Data Engineer",
    "Period": "Sep 2023 - Present",
    "Description": [  
      "Developed and maintained a scalable data pipeline using Apache Airflow, ensuring efficient and automated data flow across multiple sources.",
      "Designed and implemented DAGs (Directed Acyclic Graphs) to orchestrate ETL (Extract, Transform, Load) processes, including data extraction, transformation, and loading into a data warehouse.",
      "Deployed and maintained Airflow environments on AWS EC2 instances.",
      "Designed and implemented views in Google BigQuery.",
      "Proficient in containerizing Airflow using Docker and Docker Compose.",
      "Built and maintained analytical dashboards using Metabase and Looker Studio.",
      "Optimized pipeline and SQL performance, reducing the time to process data by 40%, resulting in faster access to key insights for decision-making.",
      "Automated complex workflows, reducing manual intervention by 80%, which significantly improved data processing efficiency.",
      "Collaborated with cross-functional teams to define data pipeline requirements, troubleshoot issues, and ensure continuous data delivery for analytics and reporting.",
      "Integrated monitoring using Grafana and alerting features in Airflow to track task execution, detect failures, and trigger notifications, ensuring smooth operations."]
  },
  {
    "Image": "assets/experiences/No-Code.png",
    "Location": "Nocode Magician",
    "Job": "Python Developer Intern",
    "Period": "Feb 2023 - Sep 2023",
    "Description": [
      "Built and deployed APIs to AWS EC2 and GCP Compute Engine.",
      "Configured IP address routing to DNS using Cloudflare Tunnel on Linux virtual machines.",
      "Developed APIs using Python frameworks such as FastAPI and Flask.",
      "Implemented user authentication for login and signup functionalities using FastAPI.",
      "Automated processes using Processio software.",
      "Developed ETL pipelines to transfer data from CSV files to a PostgreSQL database using Python.",
      "Proficient in working with cloud platforms.",
      "Experienced in writing and optimizing SQL queries."
    ]
  },
  {
    "Image": "assets/experiences/ontime.jpg",
    "Location": "OnTime Technology",
    "Job": "Data Science Intern",
    "Period": "Feb 2023 - Sep 2023",
    "Description": [
      "Developed a nail segmentation model using TensorFlow.",
      "Created an age detection model.",
      "Implemented image processing techniques to detect wrinkles and facial moisture.",
      "Utilized OpenCV for advanced image processing tasks.",
      "Designed and built YOLO and U-Net architectures with TensorFlow.",
      "Proficient in transfer learning and fine-tuning datasets for improved model performance."
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