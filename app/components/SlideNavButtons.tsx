import { useSwiper } from "swiper/react";

const SlideNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className=" w-fit px-2 py-1 rounded-xl mt-4 space-x-4">
      <button
        className="bg-blue-200 p-1 rounded-md bg-center"
        onClick={() => swiper.slidePrev()}
      >
        Prev
      </button>
      <button
        className="bg-blue-200 p-1 rounded-md bg-center"
        onClick={() => swiper.slideNext()}
      >
        Next
      </button>
    </div>
  );
};

export default SlideNavButtons;
