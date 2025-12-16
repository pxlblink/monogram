import SaleCard from "../components/SaleCard";
import { firstSectionData } from "../data/productData.js";

export default function ProductSection1() {
  return (
    <div
      id="product-section-1"
      className="grid gap-8 place-content-stretch py-14 px-10 md:grid-cols-2 lg:px-20 bg-[#F0EFED]"
    >
      {firstSectionData.map((consoleData, index) => (
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
