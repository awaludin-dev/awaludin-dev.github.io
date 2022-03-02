import styles from './main.module.css';
import { Link } from 'react-router-dom';

function Main() {
    const menu = [
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/aww_udin'
        },{
            name: 'Youtube',
            link: 'https://www.youtube.com/channel/UCsP7YBGy5bL0zeSQIENXB3Q'
        },{
            name: 'Tiktok',
            link: 'https://www.tiktok.com/@aww.udin'
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
            <Link to='/portfolio' className={styles.itemChoose}>Portfolio</Link>
        </div>
    )
}

export default Main;