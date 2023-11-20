import { AuthContextProvider } from "../context/AuthContextProvider";
import { useForm } from "../hooks/useForm";
import { ButtonComponentSecond } from "../../user/components/button/button-second/ButtonComponentSecond";
import styles from './LoginPage.module.css'

export function LoginPage(){

const {
    formState,
    handleInputChange,
    handleSubmit,
    showError
  } = useForm();


 return(
  <div className={styles.login}>
  <AuthContextProvider>
    <div className={styles.cardLogin}>
      <img src="https://staticg.sportskeeda.com/editor/2023/01/43f90-16747246599742-1920.jpg"/>
      
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.title}>
                <h1>Log In</h1>
                <p>If you already have an account please log in</p>
              </div>
              <div className={styles.inputs}>
                  <div className={styles.inputContainer}>
                  <label htmlFor="email">E-mail*</label>
                  <input 
                  type="email" 
                  name="email" 
                  placeholder="12345@gmail.com"
                  onChange={handleInputChange}
                  value={formState.email}
                  className={styles.input}
                  />

                </div>
               
                <div className={styles.inputContainer}>
                <label htmlFor="email">Password*</label>
                  <input
                  type="password"
                  name="password"
                  placeholder="********"
                  onChange={handleInputChange}
                  value={formState.password}
                  className={styles.input}
                  />  

                  
                </div>

              </div>
               
                
                {showError && (
                <div className={styles.errorMessage}>
                  Please fill the required fields.
                </div>
              )}

                <ButtonComponentSecond onClick={handleSubmit} title="Log In" disabled={!formState.email || !formState.password}/> 
                
            </form>

    </div>
   
    
      
      </AuthContextProvider>
    </div>
     
  
    
 )
}