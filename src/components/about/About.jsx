import styles from "./About.module.css"

const About = () => {
  return (
    <>
        <section className={styles.about} id="about">
            <div className="container-xxl">
                <div className={styles.aboutContainer}>
                  <div className={styles.aboutContent}>
                     <h3>About Us</h3>
                     <h2>Empowering Your Business Through Innovation</h2>
                     <p>We believe that technology should simplify your life, not complicate it. Our mission is to bridge the gap between complex ideas and seamless digital experiences. With a focus on scalability and user-centric design, we help brands grow in an ever-evolving digital landscape.</p>
                     <a href="#!" className={styles.readMore}>
                        <span>Read Me</span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                     </a>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About;