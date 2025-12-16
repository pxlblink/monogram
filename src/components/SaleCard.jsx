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
    <div
      className={`${title.toLowerCase().includes("keyboard") && "last:col-span-full"} relative group/card`}
    >
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
          <div className="relative">
            <p className="font-light text-[#1A2456]">{price}</p>
            <a
              href=""
              className="hidden absolute right-0 -bottom-1 py-2 px-4 font-semibold text-white whitespace-nowrap rounded-4xl text-[12px] bg-[#1A2456] group-hover/card:flex"
            >
              SHOP NOW
            </a>
          </div>
        )}
      </div>
      {paragraph ?? (
        <p className="text-sm font-light text-[#1a2456]">{paragraph}</p>
      )}
    </div>
  );
}
