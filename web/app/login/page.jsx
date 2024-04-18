"use client";
import { useState } from "react";
import styles from "./login.module.css";
import {
  MdOutlineEmail,
  MdOutlineLock,
  MdOutlineRemoveRedEye,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import Image from "next/image";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <section>
      <header className={styles.logo}>
        <Image src="/assets/logo.svg" width="250" height="250" alt="logo" />
      </header>
      <div className={styles.container}>
        <div className={styles.leftLogin}>
          <Image src="/assets/man.svg" width="600" height="600" alt="logo" />
        </div>
        <div className={styles.rightLogin}>
          <div className={styles.cardLogin}>
            <div className={styles.title}>
              <h1>Login</h1>
            </div>

            <div className={styles.textfield}>
              <div className="">
                <MdOutlineEmail />
                <label for="emailUser">Email</label>
              </div>

              <input
                type="email"
                name="emailUser"
                placeholder="Digite seu email de usuario"
              />
            </div>

            <div className={styles.textfield}>
              <label for="password">
                <MdOutlineLock />
                Senha
              </label>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
              />

              <button
                className={styles.showPassword}
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <MdVisibilityOff size={20} />
                ) : (
                  <MdVisibility size={20} />
                )}
              </button>
            </div>
            <button className={styles.btnLogin}>Entrar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
