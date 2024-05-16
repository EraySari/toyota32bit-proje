import styles from "./CategorySide.module.css";
import Button from "./Button";
import Category from "./Category";

function CategorySide() {
  return (
    <div className={styles.box}>
      <div className={styles.input}>
        <input type="text" placeholder="Klavyeden Barkod Girisi" />
        <i className="bx bxs-check-circle"></i>
      </div>

      <div className={styles.options}>
        <Button>Kategoriler</Button>
        <Button>Alt Kategoriler</Button>
        <Button>Ürünler</Button>
      </div>

      <div className={styles.categoryList}>
        <ul>
          <Category img={"../../public/market.jpeg"}>Market </Category>
          <Category img={"../../public/temizlik.jpg"}>Ev Temizlik</Category>
          <Category img={"../../public/mutfakEsya.jpg"}>Ev & Mutfak</Category>
          <Category img={"../../public/giyim.jpg"}>Giyim & Aksesur </Category>
          <Category img={"../../public/ev.jpg"}>Ev & Yasam</Category>
          <Category img={"../../public/kitap.jpg"}>Kitap & Kirtasiye</Category>
        </ul>
      </div>
    </div>
  );
}

export default CategorySide;
