import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCSolicitaPresupuesto from "./reformas-solicita-presupuesto.styled";
import SCFormulario from "../components/formulario";

export default function ReformasSolicitaPresupuesto() {
  return (
    <SCSolicitaPresupuesto>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Solicita tu Presupuesto</h1>
        <p className="p-obra-nueva">Pasos para pedir cita.</p>
      </div>
      <SCFormulario></SCFormulario>
      <SCFooter></SCFooter>
    </SCSolicitaPresupuesto>
  );
}
