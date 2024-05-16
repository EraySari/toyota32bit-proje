import styles from "./salePageBar.module.css";
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi2";
import Section from "./Section.jsx";

function SalePageBar() {
  return (
    <div className={styles.bar}>
      <Link to="/homepage">
        <HiChevronLeft size={50} />
      </Link>
      <h2>Satis Belgesi</h2>
      <Link to="/products">
        <Section>
          <span>Fiyat Gör</span>
        </Section>
      </Link>
    </div>
  );
}

export default SalePageBar;
