import styles from './main.module.css';
import { Link } from 'react-router-dom';

function Main() {
    const menu = [{
            name: 'Instagram',
            link: 'https://www.instagram.com/aww_udin'
        },{
            name: 'Youtube',
            link: 'https://www.youtube.com/channel/UCsP7YBGy5bL0zeSQIENXB3Q'
        },{
            name: 'Tiktok',
            link: 'https://www.tiktok.com/@aww.udin'
        },{
            name: 'Portofolio',
            link: 'https://drive.google.com/file/d/1G9fLp2kQ18DlsNiLrTxwiAe700nmV1zn/view?usp=sharing'
        }];

    return (
        <div className={styles.mainArea}>
            <Link to='/biodata' className={styles.itemChoose}>Biodata</Link>
            {
                menu.map((item, i) => {
                    return(
                        <a href={item.link} className={styles.itemChoose} target="_blank" key={i} rel="noreferrer">{item.name}</a>
                    )
                }) 
            }
        </div>
    )
}

export default Main;