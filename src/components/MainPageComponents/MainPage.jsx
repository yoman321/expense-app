import { Link } from "react-router-dom";
import AppPic from "../../images/some-profile-pic.jpg";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <h1>Welcome to Expense Report</h1>
        <div className={styles.actions}>
          <table>
            <tbody>
              <tr>
                <td>
                  <button>
                    <Link to="/graph">To Graph</Link>
                  </button>
                </td>
                <td>
                  <button>
                    <Link to="/expense-list">To Expense List</Link>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.section}>
        <h2>About this App</h2>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={AppPic} alt="App Pic"></img>
          </div>
          <section className={styles.text}>
            <p>
              This app has been created by students at McGill University in
              order to help students such as themselves keep track of their
              monthly expenses and help with their monthly budget.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
