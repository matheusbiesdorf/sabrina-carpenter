import FormularioSignUp from 'componentes/FormularioSignUp'
import styles from './SignUp.module.css'

export default function SignUp(){
    return(
        <main className={styles.mainSignUp}>
            <FormularioSignUp/>
        </main>
    )
}