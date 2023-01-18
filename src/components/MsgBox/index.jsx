import cx from "classnames";
import styles from "./style.module.css";

export const MsgBox = ({ show }) => {
  return (
    <div className={cx(styles.brPreviewer__msgBox, { [styles.show]: show })}>
      <p>Copied!</p>
    </div>
  );
};
