//We can use any word we like, but styles is most common used
import styles from './EventList.module.css';

const EventList = () => {
    return(
        <div className={styles.card}>
            <h2>Random Title</h2>
            <button onClick={() => console.log('random button')}>Click Me</button>
        </div>
    )
}

export default EventList;