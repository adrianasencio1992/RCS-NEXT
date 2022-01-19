import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCSolicitaPresupuesto from "./reformas-solicita-presupuesto.styled";
import SCFormulario from "../components/formulario";
import SCWatsap from "../components/watsap";

export default function ReformasSolicitaPresupuesto() {
  return (
    <SCSolicitaPresupuesto>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1
          className="h1-obra-nueva"
          data-aos="flip-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          Solicita tu Presupuesto
        </h1>
        <p
          className="p-obra-nueva"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          ¡Contáctanos ahora!
        </p>
      </div>
      <SCFormulario></SCFormulario>
      <SCWatsap></SCWatsap>
      <SCFooter></SCFooter>
    </SCSolicitaPresupuesto>
  );
}
