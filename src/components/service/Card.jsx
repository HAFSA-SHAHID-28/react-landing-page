import styles from "./Card.module.css"

const Card = ({num, heading, desc}) => {
  return (
    <>
        <div className={styles.card}>
            <span>{num}</span>
            <h4>{heading}</h4>
            <p>{desc}</p>
        </div>
    </>
  )
}

export default Card;