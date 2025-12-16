import SaleCard from "../components/SaleCard";
import { secondSectionData } from "../data/productData.js";

export default function ProductSection2() {
  return (
    <div className="grid gap-8 place-content-stretch px-10 pt-14 pb-20 md:grid-cols-2 lg:grid-cols-3 lg:px-20 bg-[#F0EFED]">
      {secondSectionData.map((consoleData, index) => (
        <SaleCard
          key={index}
          title={consoleData.title}
          imgSrc={consoleData.imgSrc}
          hoverImgSrc={consoleData.hoverImgSrc}
          price={consoleData.price}
          canPreOrder={consoleData.canPreOrder}
          isSoldOut={consoleData.isSoldOut}
          paragraph={consoleData.paragraph}
        />
      ))}
    </div>
  );
}
