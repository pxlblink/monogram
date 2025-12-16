export default function Hero() {
  return (
    <div className="relative bg-gray-600 bg-center bg-cover font-prompt text-[#EFC2B3] bg-[url(/images/hero-img.webp)] bg-blend-multiply">
      <div className="flex flex-col justify-center items-center py-32 px-5 text-center sm:py-67">
        <h1 className="mb-4 font-semibold tracking-widest leading-tight text-[37.5px] max-w-[700px] text-balance">
          A CONSOLE FOR EVERY WORKFLOW
        </h1>
        <p className="text-lg font-light">
          Discover the perfect console for yours.
        </p>
        <a
          href="#product-section-1"
          className="absolute bottom-0 left-1/2 my-10 text-4xl text-white -translate-x-1/2"
        >
          <svg
            width="1.2em"
            height="1.2em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="transition-transform duration-500 ease-out hover:scale-[1.3]"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
