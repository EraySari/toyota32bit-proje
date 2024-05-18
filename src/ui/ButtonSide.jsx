import styles from "./ButtonSide.module.css";
import Button from "./Button";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi2";
import { HiBackspace } from "react-icons/hi2";

function ButtonSide() {
  return (
    <div className={styles.box2}>
      <div className={styles.buttons}>
        <Button>Isimden Ara</Button>
        <Button>Satici</Button>
        <Button>A101 Hadi</Button>
        <Button>Taksitli</Button>
      </div>
      <div className={styles.buttons}>
        <Button>Belge Iptal</Button>
        <Button>Satir Iptal</Button>
        <Button>Taksitli</Button>
      </div>
      <div className={styles.input}>
        <input type="text" placeholder="0" />
        <i className={styles.mark}>
          <HiOutlineXMark size={30} />
        </i>
        <i className={styles.minus}>
          <HiMinus size={30} />
        </i>
      </div>
      <div className={styles.numberButtons}>
        <Button>00</Button>
        <Button>
          <HiBackspace size={40} />
        </Button>
        <Button>Kampanya Listesi</Button>
      </div>
      <div className={styles.numberButtons2}>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>Miktar</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>Ara Toplam</Button>
      </div>
      <div className={styles.numberButtons2}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </div>
      <div className={styles.numberButtons4}>
        <Button>0</Button>
        <Button>.</Button>
        <Button>Giris</Button>
      </div>
    </div>
  );
}

export default ButtonSide;
