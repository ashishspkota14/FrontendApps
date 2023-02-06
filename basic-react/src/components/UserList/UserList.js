import { useState, useEffect } from "react";
import getUser from "../../services/getUser";
import styles from "./UserList.module.css";

function UserList() {
  const [state, setState] = useState("");
  // userList();

  useEffect(() => {
    (async function () {
      const result = await getUser();
      //   console.log(result);
      setState(result);
    })();
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>User List</h2>
      <p className={styles.para}>"It shows the list of user fetched form the github users get api."</p>
      <div className={styles.user}>
        {state &&
          state.map((item, i) => (
            <div className={styles.profile}>
              <img
                className={styles.profileImg}
                src={item.avatar_url}
                alt={item.avatar_url}
              />
              <h1 className={styles.username}>{item.login}</h1>
              {/* <h2>{item.id}</h2> */}
            </div>
          ))}
      </div>
    </section>
  );
}

export default UserList;
