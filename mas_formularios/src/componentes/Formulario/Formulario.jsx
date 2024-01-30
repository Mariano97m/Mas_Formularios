import { Fragment, useState } from "react";
import styles from "./Formulario.module.css";
const InputComponent = ({label, type, state, setState})=> {
    return(
        <div className={styles.inputElement}>
            <label htmlFor={`${label}Input`}>{label}</label>
            <input type={type}
            id={`${label}Input`}
            value={state} onChange={(e)=> setState(e.target.value)}/>
        </div>
    )
}

const Formulario = ()=> {
    const [FirstName, setFistName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Password, setPassword] = useState("");

    return(
        <Fragment>
        <form action="#" className={styles.formulario}>
            <InputComponent label="First Name" type="text" state={ FirstName} setState={setFistName } />
            <br />
            {
                FirstName.length < 4 && FirstName.length > 0 &&
                <p>Nombre debe de tener 4 caracteres</p>
            }
            <InputComponent label="Last Name" type="text" state={LastName } setState={ setLastName} />
            <br />
            {
                LastName.length < 4 && LastName.length > 0 &&
                <p>Apellido debe de tener 4 caracteres</p>
            }
            <InputComponent label="Email" type="email" state={Email } setState={setEmail } />
            <br />
            {
                Email.length < 5 && Email.length > 0 &&
                <p>Email debe de tener 5 caracteres</p>
            }
            <InputComponent label="Confirm Password" type="password" state={ ConfirmPassword} setState={setConfirmPassword } />
            <br />
            {
                ConfirmPassword.length < 10 && ConfirmPassword.length > 0 &&
                <p>La contraseña debe de tener 10 caracteres</p>
            }
            <InputComponent label="Password" type="password" state={ Password} setState={ setPassword} />
            {
                Password.length < 10 && Password.length > 0 &&
                <p>La contraseña debe de tener 10 caracteres</p>
            }
        </form>
            <h2>YOUR DATA</h2>
            <ul>
                <li>First Name: {FirstName} </li>
                <li>Last Name: {LastName} </li>
                <li>Email: {Email}</li>
                <li>Confirm Password:{ConfirmPassword}</li>
                <li>Password: {Password}</li>
            </ul>
        </Fragment>
    )
}
export default Formulario;