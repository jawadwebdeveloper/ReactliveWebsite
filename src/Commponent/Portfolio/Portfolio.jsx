import React from 'react'
import './Portfolio.css'
import IMAGE1 from '../../assets/portfolio1.jpg'
import IMAGE2 from '../../assets/portfolio2.jpg'
import IMAGE3 from '../../assets/portfolio3.jpg'
import IMAGE4 from '../../assets/portfolio4.jpg'
import IMAGE5 from '../../assets/portfolio5.png'
import IMAGE6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        <article className='portfolio__item'>
          <div className="portfolio_item-image">
              <img src={IMAGE1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jawadwebdeveloper" target="_blank" className='btn'>Github</a>
            <a href="https://dribbble.com/" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio_item-image">
              <img src={IMAGE2} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jawadwebdeveloper" target="_blank" className='btn'>Github</a>
            <a href="https://dribbble.com/" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
          </article>

        <article className='portfolio__item'>
          <div className="portfolio_item-image">
              <img src={IMAGE3} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jawadwebdeveloper" target="_blank" className='btn'>Github</a>
            <a href="https://dribbble.com/" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio_item-image">
              <img src={IMAGE4} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jawadwebdeveloper" target="_blank" className='btn'>Github</a>
            <a href="https://dribbble.com/" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio_item-image">
              <img src={IMAGE5} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jawadwebdeveloper" target="_blank" className='btn'>Github</a>
            <a href="https://dribbble.com/" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio_item-image">
              <img src={IMAGE6} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jawadwebdeveloper" target="_blank" className='btn'>Github</a>
            <a href="https://dribbble.com/" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Portfolio