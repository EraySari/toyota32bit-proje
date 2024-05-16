import styles from "./SalesScreen.module.css";

import { useProducts } from "../context/ProductsContext.jsx";

import CategorySide from "../ui/CategorySide.jsx";
import CardList from "../ui/CardList.jsx";
import SalePageBar from "../ui/salePageBar.jsx";

function SalesScreen() {
  const { products } = useProducts();
  console.log(products);
  return (
    <main className={styles.main}>
      <SalePageBar />
      <div className={styles.context}>
        <CategorySide />
        <CardList />
        <div className={styles.box2}></div>
      </div>
    </main>
  );
}

export default SalesScreen;

//kategoriler alt kategoriler arasi gecis cities countires gibi olacak
