export default function SaleCard({
  title,
  imgSrc,
  hoverImgSrc,
  canPreOrder,
  isSoldOut,
  paragraph,
  price,
}) {
  return (
    <div className="relative">
      <div
        style={{
          "--img-url": `url(${imgSrc})`,
          "--img-hover-url": `url(${hoverImgSrc})`,
        }}
        className={`bg-(image:--img-url) hover:bg-(image:--img-hover-url) bg-center bg-cover bg-no-repeat h-78`}
      ></div>
      {canPreOrder && (
        <p className="absolute right-0 top-4 py-1 px-4 font-semibold text-[12px] bg-[#FF8D6B] text-[#212529] font-prompt">
          PRE-ORDER
        </p>
      )}

      <div className="flex justify-between my-1">
        <h2 className="font-bold text-[18.75px] text-[#1A2456]">{title}</h2>
        {isSoldOut ? (
          <p className="text-[#6C757D]">Sold Out</p>
        ) : (
          <p className="font-light text-[#1A2456]">{price}</p>
        )}
      </div>
      {paragraph ?? (
        <p className="text-sm font-light text-[#1a2456]">{paragraph}</p>
      )}
    </div>
  );
}
