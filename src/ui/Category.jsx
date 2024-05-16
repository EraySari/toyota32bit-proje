import styles from "./Category.module.css";

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
function Category({ children, img }) {
  return (
    <li className={styles.list}>
      <div className={styles.polaroid}>
        <img src={img} />
        <div className={styles.container}>
          <p>{children}</p>
        </div>
      </div>
    </li>
  );
}

export default Category;
