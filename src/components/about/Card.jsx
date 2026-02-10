import styles from "./Card.module.css";

const Card = ({icon, title, desc}) => {
  return (
    <>
        <div className={styles.card}>
            <span><i class={icon}></i></span>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    </>
  )
}

export default Card;