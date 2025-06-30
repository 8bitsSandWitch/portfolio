/**
 * @copyright 2024 Versenco
 * @license Apache-2.0
 */


/**
 * Components 
 */
import ProjectCard from "./ProjectCard";





const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Online Education Platform',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://onlineeducation.serv00.net/'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Electronic Mail Management System',
      tags: ['API', 'SPA'],
      projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Job Application Tracker and Management System',
      tags: ['Development', 'API'],
      projectLink: ''
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Stock Management System',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'School Examination Work Collector',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'Messenger App',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
];



const Work = () => {
  return (
    <section 
        id="work"
        className="section"
    >
        <div className="container">

            <h2 className="headline-2 mb-8">
                My portofolio highlights
            </h2>
            
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
              {works.map(({ imgSrc, title, tags, projectLink }, 
              key) => (
                <ProjectCard
                  key={key}
                  imgSrc={imgSrc}
                  title={title}
                  tags={tags}
                  projectLink={projectLink}
                  classes="reveal-up"
                />
              ))}
            </div>
        </div>
    </section>
  )
}

export default Work