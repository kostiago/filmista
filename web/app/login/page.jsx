import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftLogin}>
        <h1>IMAGEM AQUI</h1>
      </div>
      <div className={styles.rightLogin}>
        <div className={styles.cardLogin}>
          <h1>Entrar</h1>
          <div className={styles.textfield}>
            <label for="emailUser">Email</label>
            <input
              type="email"
              name="emailUser"
              placeholder="Digite seu email de usuario"
            />
          </div>

          <div className={styles.textfield}>
            <label for="password">Senha</label>
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
