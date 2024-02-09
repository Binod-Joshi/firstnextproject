import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.logo}>Binod Joshi</div>
    <div className={styles.text}>
      Binod creative thoughts © All rights reserved.
    </div>
  </div>
  )
}

export default Footer
