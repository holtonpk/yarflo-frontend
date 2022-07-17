import React from "react";
import { useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ReactImageMagnify from "react-image-magnify";

import { useState } from "react";
import Image from "next/image";
const ProductImages = ({ images, productData }) => {
  const [productImgs, setProductImgs] = useState(images);
  const [imageCarouselYPos, setImageCarouselYPos] = useState(0);
  const [currentImageGroup, setCurrentImageGroup] = useState(1);
  const [totalImageGroups, setTotalImageGroups] = useState(
    Math.ceil(productImgs.secImages.length / 6)
  );

  const changeSecImages = (imageGroupDir) => {
    const imageCarousel = document.getElementById("imageCarousel");

    if (imageGroupDir > 0) {
      setCurrentImageGroup(currentImageGroup + 1);
      imageCarousel.style.transform = `translate(-50%, ${
        imageCarouselYPos - 100
      }%)`;
      setImageCarouselYPos(imageCarouselYPos - 100);
    } else {
      setCurrentImageGroup(currentImageGroup - 1);
      imageCarousel.style.transform = `translate(-50%, ${
        imageCarouselYPos + 100
      }%)`;
      setImageCarouselYPos(imageCarouselYPos + 100);
    }
  };

  const changeImageClick = (index) => {
    productImgs.mainImage = productImgs.secImages[index];
    setProductImgs({ ...productImgs });
  };
  const configButtons = () => {
    try {
      document.getElementById("upArrow").classList.remove("hide");
      document.getElementById("downArrow").classList.remove("hide");
    } catch {}

    if (totalImageGroups == 1) {
      try {
        document.getElementById("upArrow").classList.add("hide");
        document.getElementById("downArrow").classList.add("hide");
      } catch {}
    } else if (currentImageGroup == 1) {
      try {
        document.getElementById("upArrow").classList.add("hide");
      } catch {}
    } else if (currentImageGroup == totalImageGroups) {
      try {
        document.getElementById("downArrow").classList.add("hide");
      } catch {}
    } else {
      try {
        document.getElementById("upArrow").classList.remove("hide");
        document.getElementById("downArrow").classList.remove("hide");
      } catch {}
    }
  };
  return (
    <div className="z-40 flex flex-row w-1/2 h-550">
      <div className="relative w-40 px-6 overflow-hidden">
        <div
          id="imageCarousel"
          className="absolute grid justify-start w-20 h-full gap-3 mr-6 -translate-x-1/2 left-1/2 auto-rows-auto slow-2"
        >
          {productImgs.secImages.map((image, i) => {
            let border = "";
            if (image == productImgs.mainImage) {
              border = "border-4 border-4-solid border-c1";
            }
            return (
              <button
                onClick={() => changeImageClick(i)}
                key={i}
                className={"w-20 h-20 " + border}
              >
                <Image
                  src={"/assets/Product_imgs/" + productData.id + "/" + image}
                  layout="responsive"
                  width="100%"
                  height="100%"
                />
              </button>
            );
          })}
        </div>
        {configButtons()}
        <button
          id="upArrow"
          onClick={() => changeSecImages(-1)}
          className="absolute z-50 px-2 -translate-x-1/2 left-1/2 bg-c1_70 hide"
        >
          <MdKeyboardArrowUp className="w-8 h-8 fill-white" />
        </button>
        <button
          id="downArrow"
          onClick={() => changeSecImages(1)}
          className="absolute z-50 px-2 -translate-x-1/2 -translate-y-full top-full left-1/2 bg-c1_70"
        >
          <MdKeyboardArrowDown className="w-8 h-8 fill-white" />
        </button>
      </div>
      <div className="relative grid justify-center w-full my-auto h-fit ">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src:
                "/assets/Product_imgs/" +
                productData.id +
                "/" +
                productImgs.mainImage,
            },
            largeImage: {
              src:
                "/assets/Product_imgs/" +
                productData.id +
                "/" +
                productImgs.mainImage,

              width: 1200,
              height: 1800,
            },
            enlargedImageContainerDimensions: {
              width: "150%",
              height: "100%",
            },
            isHintEnabled: true,
          }}
        />
      </div>
    </div>
  );
};

export default ProductImages;
