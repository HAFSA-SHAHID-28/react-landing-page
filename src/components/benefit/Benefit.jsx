import styles from "./Benefit.module.css";
import Card from "./Card";
import Illustra1 from "../../assets/benefit1.png"
import Illustra2 from "../../assets/benefit2.png"
import Illustra3 from "../../assets/benefit3.png"

const cards = [
    {image:Illustra1, icon:"fa-solid fa-layer-group", heading:"Explore Your Team", desc:"Collaborate better with a workspace built for modern teams. SoftLand brings your team together with shared tools, clear communication, and organized workflows — all in one place. Whether you’re managing tasks, tracking progress, or brainstorming ideas, everything stays connected and transparent."},
    {image:Illustra2, icon:"fa-solid fa-sun", heading:"Digital Whiteboard", desc:"Visualize your ideas and turn concepts into clear plans. The digital whiteboard allows teams to brainstorm, sketch, and organize thoughts in real time. From early ideas to final strategies, SoftLand helps you see the bigger picture and make smarter decisions together."},
    {image:Illustra3, icon:"fa-solid fa-calendar-days", heading:"Design To Development", desc:"From concept to launch, SoftLand supports the entire journey. Design with clarity, develop with confidence, and deliver high-quality results without unnecessary delays. By connecting design and development workflows, teams can work faster, reduce errors, and build products that truly make an impact."}
]

const Benefit = () => {
  return (
    <>
        <section className={styles.benefit} id="benefit">
            <div className="container-xxl">
                <div className={styles.benefitContainer}>
                    <h2>Save your time to using SoftLand</h2>
                    <p>Build faster, work smarter, and manage everything from one powerful platform.</p>
                </div>
                <div className={styles.benefitImage}>
                    <Card {...cards[0]}/>
                    <Card {...cards[1]}/>
                    <Card {...cards[2]}/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Benefit;