import styles from "./checkbox.module.css";

export default function Checkbox({ children }) {
  return (
    <div className="div-general-input">
      <ul className={styles.ul}>
        <div className="div-subgeneral-input">
          <p className="titulo-input">PRESUPUESTO BAÑO</p>

          <li className={styles.li1}>
            <input type="checkbox" name="" id="box1" />
            <label for="box1">Baño completo</label>
          </li>
          <li className={styles.li2}>
            <input type="checkbox" name="" id="box2" />
            <label for="box2">Aseo</label>
          </li>
          <li className={styles.li3}>
            <input type="checkbox" name="" id="box3" />
            <label for="box3">Cambio bañera por plato</label>
          </li>
        </div>
        <div className={styles.count}>Total de la reforma: </div>
      </ul>
    </div>
  );
}
