import { useForm } from '../../../auth/hooks/useForm'
import { ButtonComponentFirst } from "../../components/button/button-first/ButtonComponentFirst";
import styles from './Header.module.css'

export function Header (){
    const {handleLogOut} = useForm()

    return(
        <div className={styles.header}>
            <div className={styles.items}>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" />
                <ButtonComponentFirst onClick={handleLogOut} title="Log Out"/>
            </div>
           
        </div>
       
    )
}