import styles from "./Card.module.css"

const Card = ({image, icon, heading, desc}) => {
  return (
    <>
        <div className={styles.card}>
            <div className={styles.image}>
                <img className="img-fluid" src={image} alt="illustration" />
            </div>
            <div className={styles.icons}>
                <i className={icon}></i>
            </div>
            <h2>{heading}</h2>
            <p>{desc}</p>
        </div>
    </>
  )
}

export default Card;