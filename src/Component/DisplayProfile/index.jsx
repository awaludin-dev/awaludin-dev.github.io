import PP from '../Images/PP.png';
import styles from './display.module.css';

const DisplayProfile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.outlineImg}>
                <img src={PP} alt='Not Found' className={styles.imgStyles}/>
            </div>
            <div className={styles.textDisplay}>
                <h1>Awaludin Nasir U.</h1>
                <h2>Web Developer</h2>
            </div>
        </div>
    )
}

export default DisplayProfile;