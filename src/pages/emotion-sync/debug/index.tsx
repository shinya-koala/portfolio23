import { MainLayout } from "@/layout/MainLayout";
import styles from "./debug.module.scss";

const Debug = () => {
  const clearUserData = async () => {};
  const clearFullData = async () => {};
  return (
    <MainLayout>
      <section className={styles["debug"]}>
        <div className={styles["inner"]}>
          <div className={styles["sec-ttl"]}>
            <h1 className={styles["sec-heading"]}>Debug</h1>
          </div>
          <div className={styles["button-area"]}>
            <button className={styles["del-button"]} onClick={clearUserData}>
              ClearUserData
            </button>
            <button onClick={clearFullData}>ClearFullData</button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Debug;
