import react from "react";
import emailjs from '@emailjs/browser';

const FormularioContacto = () =>{
    const handleSubmit = (event) => {
        event.preventDefault();

        const nombre = event.target.nombre.value;
        const correo = event.target.correo.value;
        const mensaje = event.target.mensaje.value;

        console.log("Nombre ingresado:", nombre);
        console.log("Correo ingresado:", correo);
        console.log("Mensaje ingresado:", mensaje);

        const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; 
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nombre.trim() === "") {
            alert("Error: El campo 'Nombre y Apellido' no puede estar vacío.");
            return; // El return detiene la ejecución de la función para que no se envíe el correo
        }
        
        if (!regexNombre.test(nombre)) {
            alert("Error: El 'Nombre y Apellido' solo debe contener letras y espacios.");
            return;
        }

        if (correo.trim() === "") {
            alert("Error: El campo 'Correo Electrónico' es obligatorio.");
            return;
        }

        if (!regexCorreo.test(correo)) {
            alert("Error: El 'Correo Electrónico' ingresado no tiene un formato válido.");
            return;
        }

        if (mensaje.trim() === "") {
            alert("Error: El 'Mensaje' no puede estar vacío.");
            return;
        }

        emailjs.sendForm('service_5v56rbn', 'template_66a4o1z', event.target, '7A0SpQR7rcGPhwYTn')
            .then((resultado) => {
                console.log("Correo enviado con éxito", resultado.text);
                alert("Mensaje enviado correctamente.");
            }, (error) => {
                console.log("Error al enviar el correo:", error.text);
                alert("Hubo un error al enviar el mensaje.");
            });
    };

    return(
        <div className="contenedor-formulario">
            <form onSubmit={handleSubmit}>
                <div className="grupo-formulario">
                    <label>Nombre y apellido:</label>
                    <input type="text" name="nombre"></input>
                </div>
                <div className="grupo-formulario">
                    <label>Correo electrónico:</label>
                    <input type="email" name="correo"></input>
                </div>
                <div className="grupo-formulario">
                    <label>Mensaje (maximo de 300 caracteres): </label>
                    <textarea name="mensaje" maxLength={300} rows={5}></textarea>
                </div>
                <button type="submit" className="boton-enviar">Enviar</button>
            </form>
        </div>
    );
};

export default FormularioContacto;