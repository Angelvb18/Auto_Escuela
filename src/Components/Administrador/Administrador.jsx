import React, { useState } from "react";
import './Administrador.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

function Administrador() {
    const [action,setAction] = useState("Login");
    return (
      <div className="container">
        <text>Hola Mundo</text>
      </div>
    );
  }
  
  export default Administrador;