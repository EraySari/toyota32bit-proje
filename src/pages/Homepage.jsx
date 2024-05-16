import { Link } from "react-router-dom";
import Section from "../ui/Section";
import styles from "./Homepage.module.css";
import { HiMiniCog8Tooth } from "react-icons/hi2";
import { HiShoppingCart } from "react-icons/hi2";
import { useInfo } from "../context/ShopInfoContext";

function Homepage() {
  const { info } = useInfo();

  console.log(info);
  return (
    <div className={styles.main}>
      <div className={styles.shopInfo}>
        <ul className={styles.shopInfoList}>
          <li>Magaza No: {info.shopNo}</li>
          <li>Kasa No: {info.kasaNo}</li>
          <li>Kasa IP No: {info.kasaIP}</li>
          <li>Version: {info.version}</li>
        </ul>
      </div>
      <div className={styles.settingsBtn}>
        <Link to="/settings">
          <button className={styles.btn}>
            <HiMiniCog8Tooth size={70} />
          </button>
        </Link>
      </div>
      <div className={styles.homeLogo}>
        <img src="../../public/images1.png" />
      </div>

      <div className={styles.sections}>
        <div className={styles.box1}>
          <ul>
            <Link to="/sale">
              <Section>
                <HiShoppingCart size={30} />
                <span>Satis</span>
              </Section>
            </Link>

            <Section>Iade Islemi</Section>

            <Section>Raporlar</Section>

            <Section>Direkt Ürün Girisi</Section>
          </ul>
        </div>
        <div className={styles.box2}>
          <ul>
            <Link to="/products">
              <Section>
                <HiShoppingCart size={30} />
                <span>Fiyat Gör</span>
              </Section>
            </Link>

            <Section>Tahsilatlar</Section>

            <Section>Diger Islemler</Section>

            <Section>WWW</Section>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
