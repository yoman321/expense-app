import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.main}>
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
  );
};
export default MainPage;
