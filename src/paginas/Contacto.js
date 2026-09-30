import FormularioContacto from "../componentes/FormularioContacto";

const Contacto = () => {
    return(
        <div>
            <h1>Página de contacto</h1>
            <div>
                <p>
                    Aqui puedes encontrar todas las formas de contactarte con nosotros
                </p>
                <p>
                    Formulario para enviar un correo como parte de la empresa:
                </p>

                <FormularioContacto/>
            </div>
        </div>
    );
};

export default Contacto;