import styles from "./Hero.module.css"
import Mobile1 from "../../assets/mobile1.png"
import Mobile2 from "../../assets/mobile2.png"

const Hero = () => {
  return (
    <>
    <section className={styles.hero}>
        <div className={`container-xxl d-flex ${styles.heroSec}`}>
            <div className={styles.heroContent}>
                <h2>Promote Your App with SoftLand</h2>
                <p>We are team of talented designers making websites with Bootstrap</p>
                <div className={styles.btn}>
                    <a href="https://play.google.com/" target="blank">
                        <i class="fa-brands fa-google-play"></i>
                        <span>Google Play</span>
                    </a>
                    <a href="https://www.apple.com/app-store/" target="blank">
                        <i class="fa-brands fa-apple"></i>
                        <span>App store</span>
                    </a>
                </div>
            </div>
            <div className={styles.heroImg}>
                <img className={styles.phone1} src={Mobile1} alt="Mobile Image" />
                <img className={styles.phone2} src={Mobile2} alt="Mobile Image" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero;