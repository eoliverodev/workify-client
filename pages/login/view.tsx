import HeadTag from '../../components/html/head';
import styles from "../../styles/Home.module.css";
import AppBar from "../../components/appbar";
import { ILoginPage } from "./index.d.ts";
import { useEffect } from "react";

function LoginPageContent(props: ILoginPage) {
  useEffect(() => {
    console.log(props);
  }, []);

  const { handleSubmitLoginForm, handleSetInputValue } = props;
  return (
    <div className={styles.container}>

      <HeadTag title="Login" />

      <AppBar />

      <div
        style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
      >
        <h3>Temporary form</h3>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">email</label>
          <input
            onChange={(event) =>
              handleSetInputValue(event.target.name, event.target.value)
            }
            type="text"
            name="email"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <label htmlFor="password">password</label>
          <input
            onChange={(event) =>
              handleSetInputValue(event.target.name, event.target.value)
            }
            type="text"
            name="password"
          />
        </div>

        <button
          onClick={handleSubmitLoginForm}
          style={{ padding: "5px", width: "150px" }}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default LoginPageContent;
