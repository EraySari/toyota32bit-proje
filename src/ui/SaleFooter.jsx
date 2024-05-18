import styles from "./saleFooter.module.css";

function SaleFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.right}>
        <h4>SATICI: /MUSTERI:</h4>
        <p>Merkeze Gönderilecek: 0</p>
      </div>
      <div className={styles.middle}>
        <h4>SATIS BELGESI</h4>
        <p>1057/1/10.0.2.16</p>
      </div>
      <div>
        <h4>Ingenico</h4>
        <p>Magaza Cevrimici</p>
      </div>
    </div>
  );
}

export default SaleFooter;
