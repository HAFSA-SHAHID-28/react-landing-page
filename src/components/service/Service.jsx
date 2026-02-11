import styles from "./Service.module.css";
import Card from "./Card";
import serviceImg from "../../assets/serviceImg.svg"

const cards = [
    { num: "01", heading: "Sign Up", desc: "Create your account in seconds and get instant access to all features. Enjoy a smooth onboarding process with no hassle." },
    { num: "02", heading: "Team Collaboration", desc: "Work together effortlessly. Share ideas, assign tasks, and track progress in real time — everything your team needs to stay connected." },
    { num: "03", heading: "Efficient Management", desc: "Streamline your workflow from start to finish. Organize projects, set priorities, and deliver results faster with SoftLand." }
]

const Service = () => {
    return (
        <>
            <section className={styles.service} id="service">
                <div className="container-xxl">
                    <div className={styles.serviceContainer}>
                        <div className={styles.serviceImg}>
                            <img src={serviceImg} alt="Service" />
                        </div>
                        <div className={styles.serviceCard}>
                            <Card {...cards[0]} />
                            <Card {...cards[1]} />
                            <Card {...cards[2]} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service;