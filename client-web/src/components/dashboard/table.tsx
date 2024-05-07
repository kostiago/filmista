import { MdArrowUpward, MdSearch } from "react-icons/md";
import styles from "../../styles/dashboard.module.scss";

const Table = () => {
  return (
    <section className={styles.body}>
      <table className={styles.tab}>
        <thead className={styles.thead}>
          <tr>
            <th>
              Nº Filme
              <span className={styles.icon}>
                <MdArrowUpward />
              </span>
            </th>

            <th>
              Genero
              <span className={styles.icon}>
                <MdArrowUpward />
              </span>
            </th>

            <th>
              Ano
              <span className={styles.icon}>
                <MdArrowUpward />
              </span>
            </th>
          </tr>
        </thead>

        <tbody className={styles.tbody}></tbody>
      </table>
    </section>
  );
};

export default Table;
<section className={styles.body}>
  <table className={styles.tab}>
    <thead className={styles.thead}>
      <tr>
        <th>
          Nº Processo
          <span className={styles.icon}>
            <MdArrowUpward />
          </span>
        </th>

        <th>
          Tipo
          <span className={styles.icon}>
            <MdArrowUpward />
          </span>
        </th>

        <th>
          Cidade
          <span className={styles.icon}>
            <MdArrowUpward />
          </span>
        </th>

        <th>
          Cliente
          <span className={styles.icon}>
            <MdArrowUpward />
          </span>
        </th>

        <th>
          Parte Contrária
          <span className={styles.icon}>
            <MdArrowUpward />
          </span>
        </th>
      </tr>
    </thead>

    <tbody className={styles.tbody}>
      <tr>
        <td> 100205</td>
        <td>Civil</td>
        <td> Seoul </td>
        <td> Flávia Regina </td>
        <td>
          <p className="status delivered">Samira - Juri Vendas</p>
        </td>
      </tr>

      <tr>
        <td> 100205</td>
        <td>Civil Criminal </td>
        <td> Seoul </td>
        <td> Flávia Regina </td>
        <td>
          <p className="status delivered">Samira - Juri Vendas</p>
        </td>
      </tr>

      <tr>
        <td> 100205</td>
        <td>Civil</td>
        <td> Seoul </td>
        <td> Flávia Regina </td>
        <td>
          <p className="status delivered">Samira - Juri Vendas</p>
        </td>
      </tr>
    </tbody>
  </table>
</section>;
