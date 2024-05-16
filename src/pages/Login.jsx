import { useState } from "react";
import Button from "../ui/Button";
import styles from "./Login.module.css";
import { HiMiniUser } from "react-icons/hi2";
import { HiLockClosed } from "react-icons/hi2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className={styles.login}>
      <div className={styles.logo}>
        <img src="../../public/images1.png" className={styles.img} />
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          <h2>Hosgeldiniz</h2>
        </div>
        <form className={styles.form}>
          <div className={styles.row}>
            <label htmlFor="email">
              Lütfen Kullanici Adi ve Sifrenizi Giriniz
            </label>

            <HiMiniUser />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div className={styles.row}>
            <HiLockClosed />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <div className={styles.row}>
            <Button type="primary">Giris</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
