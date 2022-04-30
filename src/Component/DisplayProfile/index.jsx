import PP from '../Images/PP.png';
import styles from './display.module.css';

const DisplayProfile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.outlineImg} data-aos="fade-down" data-aos-duration="1000">
                <img src={PP} alt='Not Found' className={styles.imgStyles}/>
            </div>
            <div className={styles.textDisplay} data-aos="zoom-in" data-aos-duration="1000">
                <h1>Awaludin Nasir U.</h1>
                <h4>Web Developer</h4>
            </div>
        </div>
    )
}

export default DisplayProfile;