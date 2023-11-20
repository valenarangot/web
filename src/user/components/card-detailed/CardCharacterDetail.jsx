/* eslint-disable react/prop-types */
import styles from './CardCharacterDetail.module.css'

export function CardCharacterDetail ({id, characterimg, name, origin, status, species, gender, location}) {
    return(
        <div className={styles.detailCard}>
        <img className={styles.img} src={characterimg}/>
        <div className={styles.info} id={id}>
            <h1>{name}</h1>
        <div className={styles.origin}>
            <h3>Origin:</h3>
            <h4>{origin}</h4>
        </div>
        <div className={styles.lastSeen}>
            <h3>Last seen:</h3>
            <h4>{location}</h4>
        </div>
        <div className={styles.gender}>
            <h3>Gender:</h3>
            <h4>{gender}</h4>
        </div>
        <div className={styles.species}>
            <h3>Species:</h3> 
            <h4>{species}</h4>
        </div>
        <div className={styles.status}>
            <h3>Status:</h3> 
            <h4>{status}</h4> 
        </div>             
            
            
        </div>
    </div>
    )
}