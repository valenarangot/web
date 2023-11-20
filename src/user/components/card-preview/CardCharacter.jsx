/* eslint-disable react/prop-types */
import styles from './CardCharacter.module.css'

export function CardCharacter ({id, characterimg, name, origin, gender, species, onClick}) {

    return(
        <div className={styles.cardCharacter}
            onClick={() => onClick(id)}>
            <div className={styles.flipCard}>
                        <div className={styles.frontCard}>
                            <img src={characterimg} className={styles.cardImage}/>
                            <h2>{name}</h2>
                        </div>
                    
                        <div className={styles.cardInfo}>
                            <h4>Origin: {origin}</h4>
                            <h4>Gender: {gender}</h4>
                            <h4>Species: {species}</h4> 
                        </div>

            </div>
            
        </div>
        
    )
}