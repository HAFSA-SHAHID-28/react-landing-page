import styles from "./Features.module.css"
import Feature1 from "../../assets/features1.svg"
import Feature2 from "../../assets/features2.svg"
import Feature3 from "../../assets/features3.svg"
import Feature4 from "../../assets/features4.svg"

const Features = () => {
  return (
    <>
        <section className={styles.features} id="features">
            <div className="container-xxl">
                <div className={styles.featuresContent}>
                    <h2>Features</h2>
                    <p>SoftLand is built to simplify your workflow, improve collaboration, and help teams deliver better results.</p>
                </div>
                <div className={styles.featuresCards}>
                    <div className={styles.featuresCardsContent}>
                        <div className={styles.featuresCardsImage}>
                            <img className="img-fluid" src={Feature1} alt="feature" />
                        </div>
                        <div className={styles.featuresCardsText}>
                            <h3>Smart Workflow Management</h3>
                            <p><em>Plan, organize, and track your tasks with clarity. SoftLand allows you to manage multiple projects efficiently while keeping deadlines, priorities, and responsibilities clearly defined.</em></p>
                            <ul>
                                <li><i class="fa-solid fa-check"></i> Real-time task updates</li>
                                <li><i class="fa-solid fa-check"></i> Easy progress tracking</li>
                                <li><i class="fa-solid fa-check"></i> Organized project timelines</li>
                            </ul>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className={styles.featuresCardsContent}>
                        <div className={styles.featuresCardsText}>
                            <h3>Powerful Analytics & Insights</h3>
                            <p><em>Make smarter decisions with data-driven insights. Monitor performance, track team productivity, and identify opportunities for improvement with clear and simple reports.</em></p>
                            <ul>
                                <li><i class="fa-solid fa-check"></i> Performance tracking dashboards</li>
                                <li><i class="fa-solid fa-check"></i> Custom reports</li>
                                <li><i class="fa-solid fa-check"></i> Data visualization tools</li>
                            </ul>
                        </div>
                         <div className={styles.featuresCardsImage}>
                            <img className="img-fluid" src={Feature2} alt="feature" />
                        </div>
                    </div>
                    {/* 3 */}
                    <div className={styles.featuresCardsContent}>
                        <div className={styles.featuresCardsImage}>
                            <img className="img-fluid" src={Feature3} alt="feature" />
                        </div>
                        <div className={styles.featuresCardsText}>
                            <h3>Seamless Collaboration Tools</h3>
                            <p><em>Work together without confusion. SoftLand ensures smooth communication between team members with shared workspaces and instant updates.</em></p>
                            <ul>
                                <li><i class="fa-solid fa-check"></i> Shared task boards</li>
                                <li><i class="fa-solid fa-check"></i> Instant notifications</li>
                                <li><i class="fa-solid fa-check"></i> File and document sharing</li>
                            </ul>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className={styles.featuresCardsContent}>
                        <div className={styles.featuresCardsText}>
                            <h3>Secure & Reliable Platform</h3>
                            <p><em>Your data is protected with advanced security standards. SoftLand provides a stable and secure environment so you can focus on growth without worrying about safety.</em></p>
                            <ul>
                                <li><i class="fa-solid fa-check"></i> Encrypted data protection</li>
                                <li><i class="fa-solid fa-check"></i> Cloud-based backups</li>
                                <li><i class="fa-solid fa-check"></i> High-performance reliability</li>
                            </ul>
                        </div>
                        <div className={styles.featuresCardsImage}>
                            <img className="img-fluid" src={Feature4} alt="feature" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features;