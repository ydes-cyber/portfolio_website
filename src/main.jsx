import { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { profile, projects, categories, researchInterests, skills, project3Feature } from './data/content'
import './styles.css'

const Arrow = () => <span aria-hidden="true">↗</span>

function ProjectCard({ project, featured = false }) {
  return <article className={`project-card tone-${project.tone} ${featured ? 'featured-card' : ''}`}>
    <div className="card-ornament" aria-hidden="true"><i /><i /><i /></div>
    <p className="eyebrow">{project.category} · {project.year}</p>
    <h3>{project.title}</h3>
    <p className="status">{project.status}</p>
    <p>{project.summary}</p>
    {featured && <p className="project-detail">{project.detail}</p>}
    <ul className="tags" aria-label="Technologies">{project.tech.map(item => <li key={item}>{item}</li>)}</ul>
    {project.review && <p className="review-note">Public-link review recommended: this repository includes coursework/starter materials.</p>}
    <a className="text-link" href={project.url} target="_blank" rel="noreferrer">{project.sourceLabel} <Arrow /></a>
  </article>
}

function App() {
  const [filter, setFilter] = useState('All')
  const filtered = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.category === filter), [filter])
  const featured = projects.filter(p => p.featured)
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="monogram" href="#top" aria-label="Yanira De Souza, home">YD</a>
      <nav aria-label="Primary navigation"><a href="#projects">Projects</a><a href="#research">Research</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a className="header-github" href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
    </header>
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="moon" aria-hidden="true" /><div className="constellation" aria-hidden="true"><b /><b /><b /><b /></div>
        <img className="botanical-plate" src="./botanical-plate.svg" alt="" aria-hidden="true" />
        <p className="eyebrow">{profile.school}</p>
        <h1 id="hero-title">Yanira<br /><em>De Souza</em></h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-copy">{profile.introduction}</p>
        <div className="hero-actions"><a className="button" href="#projects">Enter the project gallery <Arrow /></a><a className="quiet-link" href={profile.github} target="_blank" rel="noreferrer">Visit GitHub</a></div>
        <p className="hero-caption">FIELD NOTES IN COMPUTATION, MOTION &amp; EMERGENCE</p>
      </section>

      <section className="featured section-wrap" id="projects" aria-labelledby="featured-title">
        <div className="section-intro"><p className="eyebrow">The collection · 01</p><h2 id="featured-title">Selected <em>exhibits</em></h2><p>Technical work, presented with its evidence and its open questions intact.</p></div>
        <div className="featured-grid">{featured.map(project => <ProjectCard key={project.title} project={project} featured />)}</div>
      </section>

      <section className="project-film" id="forward-kinematics" aria-labelledby="film-title">
        <div className="film-copy"><p className="eyebrow">{project3Feature.eyebrow}</p><h2 id="film-title">{project3Feature.title}</h2><p className="status">{project3Feature.status}</p><p>{project3Feature.summary}</p><p>{project3Feature.detail}</p><p className="choreography">Choreography: <em>{project3Feature.choreography}</em></p><a className="text-link light-link" href={project3Feature.video} download>Download the recorded demonstration <Arrow /></a><p className="attribution">{project3Feature.attribution}</p></div>
        <div className="film-frame"><video controls preload="metadata" poster={project3Feature.poster} aria-label="Video: Fetch robot forward-kinematics choreography"><source src={project3Feature.video} type="video/webm" />Your browser does not support this video format. <a href={project3Feature.video}>Download the recording.</a></video><p>Viewer: Three.js placeholders positioned from live <code>/xform_world</code> matrices.</p></div>
      </section>

      <section className="gallery section-wrap" aria-labelledby="gallery-title">
        <div className="section-heading"><div><p className="eyebrow">The full catalogue · 02</p><h2 id="gallery-title">Every <em>working note</em></h2></div><p>Filter by area to browse all publicly verifiable work.</p></div>
        <div className="filters" aria-label="Project categories">{['All', ...categories.slice(1)].map(category => <button key={category} onClick={() => setFilter(category)} className={filter === category ? 'active' : ''} aria-pressed={filter === category}>{category}</button>)}</div>
        <div className="gallery-grid">{filtered.map(project => <ProjectCard key={project.title} project={project} />)}</div>
      </section>

      <section className="research section-wrap" id="research" aria-labelledby="research-title">
        <div className="research-art" aria-hidden="true"><div className="orbit one"/><div className="orbit two"/><div className="orbit three"/><span>?</span></div>
        <div><p className="eyebrow">A developing inquiry · 03</p><h2 id="research-title">Research interests,<br /><em>not claimed results.</em></h2><p className="research-lede">I am developing questions and technical foundations in these directions. This is an interests section—not a publication list.</p><div className="interest-list">{researchInterests.map(([name, description], i) => <div key={name}><span>0{i + 1}</span><h3>{name}</h3><p>{description}</p></div>)}</div></div>
      </section>

      <section className="about section-wrap" id="about" aria-labelledby="about-title">
        <div><p className="eyebrow">The person behind the work · 04</p><h2 id="about-title">Precise systems;<br /><em>curious eyes.</em></h2></div>
        <div className="about-copy"><p>{profile.about}</p><div className="skills">{skills.map(([group, items]) => <div key={group}><h3>{group}</h3><p>{items.join(' · ')}</p></div>)}</div></div>
      </section>
    </main>
       <footer id="contact">
      <p className="eyebrow">The Next Chapter</p>
      <h2>Building what’s next.<br /><em>Through research and design.</em></h2>
      <p>For opportunities in AI/ML, robotics, data science, and research.</p>

      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub <Arrow />
        </a>
        {profile.email && (
          <a href={`mailto:${profile.email}`}>
            {profile.email} <Arrow />
          </a>
        )}
      </div>

      <small>
        © {new Date().getFullYear()} {profile.name} · Built as an editable portfolio.
      </small>
    </footer>
  </>
}
createRoot(document.getElementById('root')).render(<App />)
