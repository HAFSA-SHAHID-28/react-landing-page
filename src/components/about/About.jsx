import styles from "./About.module.css"
import Card from "./Card";

const cards = [
  { icon: "fa-solid fa-city", title: "Expert Solutions", desc: "Delivering high-end digital strategies tailored to your specific business needs." },
  { icon: "fa-solid fa-clipboard-list", title: "Creative Excellence", desc: "Turning abstract concepts into stunning visual realities that capture attention." },
  { icon: "fa-solid fa-terminal", title: "Seamless Integration", desc: "Ensuring your tools work together perfectly to optimize your daily workflow." },
  { icon: "fa-solid fa-chart-line", title: "Data-Driven Results", desc: "We don't just build; we analyze and improve to ensure your long-term success." }
]

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
            <div className={styles.aboutCard}>
              <div className={styles.colLeft}>
                <Card {...cards[0]} />
                <Card {...cards[1]} />
              </div>
              <div className={styles.colRight}>
                <Card {...cards[2]} />
                <Card {...cards[3]} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;