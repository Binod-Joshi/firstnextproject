// "use client";
import Image from "next/image"
import styles from "./about.module.css"

const About = () => {
  return (
    // <div>
    //   <div className={styles.imageContainer}>
    //    <Image src='https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?w=1480&t=st=1706606283~exp=1706606883~hmac=f20e6374a3f86a20b59062b3e07e749e3204e1b4051cf95aacabb9b49cb6f2de' alt="" width={800} height={800}/> {/* width property is mandatory here */}
    //   </div>
    // </div>
    <div className={styles.container}>
    <div className={styles.textContainer}>
      <h2 className={styles.subtitle}>About Agency</h2>
      <h1 className={styles.title}>
        We create digital ideas that are bigger, bolder, braver and better.
      </h1>
      <p className={styles.desc}>
        We create digital ideas that are bigger, bolder, braver and better. We
        believe in good ideas flexibility and precission We’re world’s Our
        Special Team best consulting & finance solution provider. Wide range
        of web and software development services.
      </p>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <h1>10 K+</h1>
          <p>Year of experience</p>
        </div>
        <div className={styles.box}>
          <h1>10 K+</h1>
          <p>Year of experience</p>
        </div>
        <div className={styles.box}>
          <h1>10 K+</h1>
          <p>Year of experience</p>
        </div>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image
        
        src = "https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?w=1480&t=st=1706606283~exp=1706606883~hmac=f20e6374a3f86a20b59062b3e07e749e3204e1b4051cf95aacabb9b49cb6f2de"
        alt="About Image"
        fill
        className={styles.img}
      />
    </div>
  </div>
  )
}

export default About
