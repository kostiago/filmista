"use client";
import { useState } from "react";
import styles from "../../../styles/login.module.scss";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <section className={styles.container}>
      <div className={styles.leftLogin}>
        <img src="/images/man.svg" alt="logo" />
      </div>
      <div className={styles.rightLogin}>
        <div className={styles.cardLogin}>
          <div className={styles.title}>
            <h1>Login</h1>
          </div>

          <div className={styles.textfield}>
            <div className="">
              <label htmlFor="emailUser" className={styles.label}>
                Email
              </label>
            </div>

            <input
              type="email"
              name="emailUser"
              placeholder="Digite seu email de usuario"
            />
          </div>

          <div className={styles.textfield}>
            <label htmlFor="password" className={styles.label}>
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

          <div className={styles.cu}>
            <div className={styles.checkbox}>
              <input type="checkbox" /> <span>Lembrar de mim.</span>
            </div>
            <div className={styles.needHelp}>
              <Link href={"/"}>Precisa de ajuda?</Link>
            </div>
          </div>
          <div className={styles.information}>
            <span>
              Novo por aqui?{" "}
              <Link href={"/"}>
                <strong>Assine agora.</strong>
              </Link>
            </span>
            <span>
              Esta página é protegida pelo Google{" "}
              <Link href={"/"}>
                <strong>reCAPTCHA</strong>
              </Link>{" "}
              para garantir que você não é um robô.{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
