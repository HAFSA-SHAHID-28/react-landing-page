import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <>
        <footer className={styles.footer}>
            <div className="container-xxl">
                <h3 className={styles.heading}>SoftLand</h3>
                <p className={styles.para}>SoftLand helps you build responsive websites faster using modern tools and clean design.</p>
                <div className={styles.socialLinks}>
                    <a href="https://x.com/" target="blank"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://github.com/HAFSA-SHAHID-28" target="blank"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/" target="blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/hafsa-shahid-b43339339/" target="blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://hafsa-portfoolio.netlify.app/" target="blank"><i class="fa-solid fa-address-book"></i></a>
                </div>
                <div className={styles.footerContainer}>
                    
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;