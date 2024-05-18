import styles from "./SalesScreen.module.css";

import { useProducts } from "../context/ProductsContext.jsx";

import CategorySide from "../ui/CategorySide.jsx";
import CardList from "../ui/CardList.jsx";
import SalePageBar from "../ui/salePageBar.jsx";
import ButtonSide from "../ui/ButtonSide.jsx";
import SaleFooter from "../ui/saleFooter.jsx";

function SalesScreen() {
  const { products } = useProducts();
  console.log(products);
  return (
    <main className={styles.main}>
      <SalePageBar />
      <div className={styles.context}>
        <CategorySide />
        <CardList />
        <ButtonSide />
      </div>
      <SaleFooter />
    </main>
  );
}

export default SalesScreen;
