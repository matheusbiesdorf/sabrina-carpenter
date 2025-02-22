import ListaPaises from "componentes/ListaPaises";
import styles from "./FormularioSignUp.module.css";
import { useForm } from "react-hook-form";

export default function FormularioSignUp() {
   const { register, handleSubmit } = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formSignUp}>
        <h2>Sign Up</h2>
         <label>Email:</label>
         <input type="email" placeholder="Enter your email" {...register("email")} />

         <label>Password:</label>
         <input type="password" placeholder="Choose a password" {...register("senha")} />

         <label>Country:</label>
         <ListaPaises register={register} />

         <button type="submit">Register</button>
      </form>
   );
}
