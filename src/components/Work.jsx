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
      imgSrc: '/images/Projects/Versenco.png',
      title: 'Stunting Portfolio',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://versenco.vercel.app'
    },
    {
      imgSrc: '/images/Projects/Full/cloud_vault.png',
      title: 'Free stock photo app',
      // title: 'Electronic Mail Management System',
      tags: ['API', 'SPA'],
      projectLink: 'https://preview--vivid-memory-hub.lovable.app/'
    },
    {
      imgSrc: '/images/Projects/Full/DS.png',
      title: 'Recipe app',
      // title: 'Job Application Tracker and Management System',
      tags: ['Development', 'API'],
      projectLink: 'https://preview--gourmand-3d-delights.lovable.app'
    },
    {
      imgSrc: '/images/Projects/Full/VersenStock.png',
      title: 'Stock Management System',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://preview--stock-flow-versen.lovable.app'
    },
    {
      imgSrc: '/images/Projects/Full/DD.png',
      title: 'School Examination Work Collector',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://preview--gourmand-delice-virtuel.lovable.app/'
    },
    {
      imgSrc: '/images/Projects/Full/AutoLux.png',
      title: 'Messenger App',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://preview--voiture-vibes-studio.lovable.app'
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