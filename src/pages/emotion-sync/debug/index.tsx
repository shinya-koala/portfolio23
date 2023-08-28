import { MainLayout } from "@/layout/MainLayout";
import styles from "./debug.module.scss";

const Debug = () => {
  const onClickClearFullData = async () => {
    const response = await fetch("/api/writeJson", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("### data", data);
    /*
    const json = JSON.stringify({
      A: "B",
      C: "D",
      E: "F",
    });
    const response = await fetch("/api/writeJson", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });
    console.log("### response", response);
    */
  };

  return (
    <MainLayout>
      <section className={styles["debug"]}>
        <div className={styles["inner"]}>
          <div className={styles["sec-ttl"]}>
            <h1 className={styles["sec-heading"]}>Debug</h1>
          </div>
          <div className={styles["button-area"]}>
            <button
              className={styles["del-button"]}
              onClick={onClickClearFullData}
            >
              ClearUserData
            </button>
            <button>ClearFullData</button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Debug;
