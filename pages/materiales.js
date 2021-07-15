import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCMateriales from "./materiales.styled";
import SCNavbarMateriales from "../components/navbar-materiales";

export default function Materiales() {
  return (
    <SCMateriales>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Materiales</h1>
        <p className="p-obra-nueva">Escoje los materiales</p>
      </div>
      <SCNavbarMateriales></SCNavbarMateriales>
      <SCFooter></SCFooter>
    </SCMateriales>
  );
}
