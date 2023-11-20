import { CardCharacter } from "../../components/card-preview/CardCharacter"
import { useApp } from "../../hooks/useApp"
import { useNavigate } from "react-router-dom"
import styles from './Dashboard.module.css'
import { Header } from "../../components/header/Header";

export function Dashboard(){
    const navigate = useNavigate();
    const {data} = useApp();


    const characters = [];

    const onClick = (id) => {
        navigate('/Details/'+id)
    }

    if(data !== null ) {
        data.forEach((character) => {
            characters.push(<CardCharacter 
                 characterimg = {character.image}
                 name = {character.name} 
                 origin = {character.origin.name}  
                 gender = {character.gender} 
                 species = {character.species}
                 onClick={onClick}
                 key={character.id}
                 id={character.id}
             />)
         })
    }

    if (data === null) return <p>Data is loading...</p>

    return (

        <div className={styles.dashboardGeneral}>
            <Header />
        <div className={styles.dashboardCards}>
            
            {characters}
           
        </div>
       
        </div>
    );
}