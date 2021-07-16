import Layout from "../../components/layout";
import SCFooter from "../../components/footer";
import SCMueblesCocina from "./muebles-cocina.styled";
import SCNavbarMateriales from "../../components/navbar-materiales";

export default function MueblesCocina() {
  return (
    <SCMueblesCocina>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Muebles cocina</h1>
        <p className="p-obra-nueva">Nuestra gamma de productos</p>
      </div>

      <SCFooter></SCFooter>
    </SCMueblesCocina>
  );
}
