import { useParams } from "react-router-dom";
import { useDetails } from "../../hooks/useDetails";
import { CardCharacterDetail } from "../../components/card-detailed/CardCharacterDetail";
import { useNavigate } from "react-router-dom"
import { ButtonComponentSecond } from "../../components/button/button-second/ButtonComponentSecond";
import styles from './Details.module.css'
import { Header } from "../../components/header/Header";

export function Details() {
    const navigate = useNavigate();
    const routeParams = useParams();
    const idCharacter = routeParams.id;
    const {data} = useDetails(idCharacter);
 

    if (data === null) return <p>Data is loading...</p>

    return(
        <div className={styles.detailGeneral}>
            <Header />
        <div className={styles.detailPage}>
            <div className={styles.upperSection}>
                <ButtonComponentSecond onClick={() => navigate('/dashboard')} title="Back"/>
            </div>
            <div className={styles.lowerSection}>
                <CardCharacterDetail
                    characterimg = {data.image}
                    name = {data.name} 
                    origin = {data.origin.name} 
                    location = {data.location.name}
                    gender={data.gender} 
                    status = {data.status} 
                    species = {data.species}
                    id={data.id}
                    />
            </div>
        </div>
        </div>
    )
}