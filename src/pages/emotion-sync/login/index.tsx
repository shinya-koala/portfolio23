import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import styles from "./login.module.scss";
import { useRouter } from "next/router";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import { Input } from "@mui/material";

export default function Login() {
  const { validate } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("guest");
  const [password, setPassword] = useState("guest");
  const [errMsg, setErrMsg] = useState("");

  const onPressLogin = () => {
    const result = validate(username, password);
    if (result) {
      setErrMsg("");
      router.push("../../emotion-sync/emotion");
    } else {
      setErrMsg("ユーザー名もしくは、パスワードが一致しません。");
    }
  };

  /* style */
  const iconStyle = {
    width: 40,
    height: 40,
    marginRight: 16,
    marginLeft: 8,
    color: "#BBB",
    fontSize: "1.6rem",
  };

  return (
    <div className={styles["wrap"]}>
      <div className={styles["inner"]}>
        <div className={styles["card"]}>
          <div className={styles["card-form"]}>
            <div className={styles["card-form-inner"]}>
              <div className={styles["logo-title"]}>
                <p className={styles["logo-text"]}>EmotionSync</p>
              </div>
              <form action="" className={styles["flex-d"]}>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  startAdornment={<PersonIcon style={iconStyle} />}
                  className={styles["input"]}
                />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  startAdornment={<KeyIcon style={iconStyle} />}
                  className={styles["input"]}
                />
              </form>
              <p className={styles["err-msg"]}>{errMsg}</p>
            </div>
            <button onClick={onPressLogin} className={styles["login-btn"]}>
              ログイン
            </button>
          </div>
          <div className={styles["card-text"]}>
            <h1 className={styles["title"]}>ログイン</h1>
            <p className={styles["text"]}>アカウントにログインしてください。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
