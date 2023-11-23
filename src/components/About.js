import React from 'react'
import AboutImg from "../assets/images/about-img"
const About = () => {
  return (
    <>
    <section className="about" id="about">
        <h1 className="heading">
            <span>about us</span> 
        </h1>
        <div className="row">
            <div className="image">
                <img src= {AboutImg} alt=""/>
            </div>
           <div className="content">
            <h3>What Makes our Food Special</h3>
             <p>
             Lorem ipsum dolor sit amet. Aut doloremque inventore nam vitae voluptate eum autem internos ut dolorum autem rem aperiam iusto! Ab numquam iure aut quasi repellendus et quia quasi eum tenetur dolore.

              Ut quos aliquam ut laudantium distinctio eum dignissimos consectetur 33 inventore consequatur et iure soluta quo blanditiis consequuntur. Id unde culpa et doloremque quia est exercitationem blanditiis in tempora dolor non dolore autem.
             </p>
             <p>
             With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.
             </p>
             <a href="#" className="btn">
                Learn More

             </a>
           </div>

        </div>
    </section>
    </>
  )
}

export default About