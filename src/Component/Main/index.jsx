import styles from './main.module.css';
import { Link } from 'react-router-dom';

function Main() {
    const menu = [
        {
            name: 'Biodata',
            link: '/biodata'
        },{
            name: 'Instagram',
            link: '/youtube'
        },{
            name: 'Youtube',
            link: '/youtube'
        },{
            name: 'Tiktok',
            link: '/tiktok'
        },{
            name: 'Portfolio',
            link: '/portfolio'
        }];

    return (
        <div className={styles.mainArea}>
            {
                menu.map((item, i) => {
                    return(
                        <Link to={item.link} className={styles.itemChoose} key={i}>{item.name}</Link>
                    )
                }) 
            }
        </div>
    )
}

export default Main;