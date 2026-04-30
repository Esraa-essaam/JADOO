import styles from './Hero.module.css'
import Hero1 from '../../assets/Hero1.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
function Hero() {
    return (
        <div className={`${styles.Hero} d-flex`}>
        <div className={`${styles.helf} col-12 col-lg-6`}>
            <div className={`${styles.content} `}>
                <h6>Best Destinations around the world</h6>
                <h1>Travel, enjoy and live a new and full life</h1>
                <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                </div>
                <div className={`${styles.forMore} d-flex gap-5`}>
                    <button className={styles.button1}>Find out more</button>
                    <div className={styles.button2}>
                        
                        <button id="conroler-icon"><i className="fa-solid fa-play"></i></button>
                        <label htmlFor="conroler-icon">Play Demo</label>
                    </div>

                </div>
            </div>
            <div className={`${styles.HeroPhoto} col-12 col-lg-6`}>
                <img src={Hero1} alt="" />
            </div>

        </div>
        
        
    )
}

export default Hero;