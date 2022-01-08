import Modal from "./Modal";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={styles["user-details"]}>
        <h3>Name - {props.user.name} </h3>
        <p>Email - {props.user.email}</p>
        <p>Company - {props.user.company.name}</p>
        <p>Website - {props.user.website}</p>
      </div>
    </Modal>
  );
};

export default User;
