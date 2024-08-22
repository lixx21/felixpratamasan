import React from 'react'


const data = 
  [
  "assets/tech_icons/airflow.png",
  "assets/tech_icons/kafka.png",
  "assets/tech_icons/javascript.png",
  "assets/tech_icons/typescript.png",
  "assets/tech_icons/python.png",
  "assets/tech_icons/mongodb.png",
  "assets/tech_icons/mysql.png",
  "assets/tech_icons/postgresql.png",
  "assets/tech_icons/aws-s3.png",
  "assets/tech_icons/aws-ec2.png",
  "assets/tech_icons/docker.png",
  "assets/tech_icons/gcp.png",
  "assets/tech_icons/bigquery.png",
  "assets/tech_icons/flask.png",
  "assets/tech_icons/fastapi.png",
  "assets/tech_icons/expressjs.png",
  "assets/tech_icons/tensorflow.png",
  "assets/tech_icons/opencv.png",
  "assets/tech_icons/css.png",
  "assets/tech_icons/html.png",
  "assets/tech_icons/nodejs.png",
  "assets/tech_icons/react.png",
  "assets/tech_icons/Nest.js.png"
  
  ]

const TechStack = () => {
  return (
    <section id="techStack" className='pt-20'>
        <div className='container'>
          <div className='flex flex-wrap'>
            {/* TechStacks */}
            <div className='w-full px-4 mb-10'>

              <h3 className='font-bold uppercase text-white text-4xl mb-3 text-center lg:text-6xl'>
                Professional <span className='text-primary'>Skills</span>
              </h3>

              <p className='text-slate-400 lg:w-2/3 mx-auto text-center pt-4 lg:text-2xl '>
              {/* As a dedicated software engineer, I have cultivated a diverse set of professional skills that enable me to deliver high-quality solutions and drive innovative projects forward. Here are some technologies and tools I'm skilled in: */}
              A blend of technical expertise and creative problem-solving. Here are the skills that power my projects and drive my passion for innovation.
                    </p>

              <div className='flex justify-center pt-10  flex-wrap gap-2 lg:pt-14 md:pt-12'>
                        
                {data.map((src, index) => (
                    <div className='bg-white w-20 h-20 mr-3 p-2 lg:p-4 lg:w-32 lg:h-32 2xl:w-36 2xl:h-36 rounded flex justify-center items-center border border-secondary'>
                      <img src={src} alt={`tech icon ${index}`} />
                    </div>
                  ))}
                 
              </div>         

            </div>
          </div>

        </div>
    </section>
  )
}

export default TechStack