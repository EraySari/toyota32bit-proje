import styles from "./Section.module.css";

/* eslint-disable react/prop-types */
function Section({ children }) {
  return <li className={styles.list}>{children}</li>;
}

export default Section;
