/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const ShopInfoContext = createContext();

function ShopInfoProvider({ children }) {
  const [info, setInfo] = useState("");

  useEffect(function () {
    async function infoData() {
      const res = await fetch("/api/shopInfo");
      const data = await res.json();
      console.log(data);
      setInfo(...data);
    }
    infoData();
  }, []);
  return (
    <ShopInfoContext.Provider value={{ info }}>
      {children}
    </ShopInfoContext.Provider>
  );
}
function useInfo() {
  const context = useContext(ShopInfoContext);

  return context;
}
export { ShopInfoProvider, useInfo };
