import { useEffect, useState } from "react";
import { moneyFormat, getCarouselData } from "../../../components/logic";
import {
  MdOutlineAdd,
  MdArrowForwardIos,
  MdArrowBackIosNew,
  MdOutlineArrowBack,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Reviews from "../../../components/Reviews";
import Image from "next/image";
import ActionCards from "../../../components/ActionCards";
import Carousel from "../../../components/Carousel";
import info from "../../../public/Data/info.json";
import { useCart } from "react-use-cart";
import ProductImages from "../../../components/productImages";
import { motion } from "framer-motion";

export default function Product({ productData, currentPage, images }) {
  const [product, setProduct] = useState(productData);
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(product.price * quantity);

  const [ids, setIds] = useState(productData.id);

  const { addItem, items, updateItemQuantity, emptyCart } = useCart();

  // emptyCart();

  const addToCart = (product) => {
    if (items.includes(product.id)) {
      updateItemQuantity(product.id, product.id.quantity + quantity);
    } else {
      addItem(product, quantity);
    }
    document.getElementById("cartPreview").classList.remove("hide");
  };

  const [dropDownButtons, setDropDownButtons] = useState({
    overview: {
      title: "OVERVIEW",
      text: productData.description,
      button: <AiOutlineMinus className="w-8 h-8 fill-c1" />,
      startStatus: "",
    },
    warranty: {
      title: "WARRANTY",
      text: info.Warranty,
      button: <MdOutlineAdd className="w-8 h-8 fill-c1" />,
      startStatus: "hide",
    },

    shipping: {
      title: "SHIPPING & RETURNS",
      text: info.Shipping,
      button: <MdOutlineAdd className="w-8 h-8 fill-c1" />,
      startStatus: "hide",
    },
  });

  const viewDetails = (elem) => {
    const elementBody = document.getElementById(elem + "-body");
    if (elementBody.classList.contains("hide")) {
      elementBody.classList.remove("hide");
      dropDownButtons[elem].button = (
        <AiOutlineMinus className="w-8 h-8 fill-c1" />
      );
      setDropDownButtons({ ...dropDownButtons });
    } else {
      elementBody.classList.add("hide");
      dropDownButtons[elem].button = (
        <MdOutlineAdd className="w-8 h-8 fill-c1" />
      );
      setDropDownButtons({ ...dropDownButtons });
    }
  };

  useEffect(() => {
    // setTotalImageGroups(Math.ceil(images.secImages.length / 6));
    // configButtons();

    setProduct(productData);
    setSubtotal(productData.price * quantity);
  }, [quantity, productData]);

  const setTotalPrice = (quantityDirection) => {
    if (quantity + quantityDirection < 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity + quantityDirection);
    }
  };

  return (
    <motion.div className="relative" exit={{ opacity: 0 }}>
      <Nav />
      <Link
        href={
          "/Catalog/" +
          product.tags[0].replaceAll(" ", "_") +
          "/" +
          product.tags[2].replaceAll(" ", "_")
        }
      >
        <a className="relative flex flex-row items-center justify-start w-5/6 p-3 mx-auto mt-3 border-4 border-solid h-fit border-c1">
          <div className="flex flex-row items-center mx-auto">
            <MdOutlineArrowBack className="w-6 h-6 mt-1 fill-c1" />
            <h1 className="text-2xl font-f1 text-c1 text-bold">
              {"Shop ALL " + product.tags[2]}
            </h1>
          </div>
        </a>
      </Link>
      <div className="relative w-full px-10 mt-3 h-fit slide-in-bottom ">
        <div className="flex flex-row h-full mb-6">
          <ProductImages
            key={productData.id}
            images={images}
            productData={productData}
          />

          <div className="flex flex-col justify-start w-1/2 ml-8 ">
            <h1 className="text-5xl font-f1 text-c1">{product.title}</h1>

            <h1 className="mt-3 text-4xl text-c1 font-f2">
              {"$" + moneyFormat(product.price) + " USD"}
            </h1>

            <div className="flex flex-row items-center mt-3 w-fit">
              <Reviews
                rating={product.rating}
                size="w-8 h-8 "
                color="fill-c2"
                textSize="text-xl"
              />
            </div>

            <div className="flex flex-col justify-between w-5/6 mt-6">
              <div className="flex flex-row items-center">
                <h1 className="mr-3 text-xl font-f2 text-c1 text-bold">Qty:</h1>
                <div className="flex flex-row items-center mr-3 border-1 border-c1">
                  <button onClick={() => setTotalPrice(-1)}>
                    <AiOutlineMinus className="w-8 h-8 text-c1" />
                  </button>
                  <h1 className="w-10 p-2 text-xl text-center border-l-2 border-r-2 font-f2 text-c1 text-bold border-l-solid border-l-c1 border-r-solid border-r-c1">
                    {quantity}
                  </h1>
                  <button onClick={() => setTotalPrice(1)}>
                    <MdOutlineAdd className="w-8 h-8 fill-c1" />
                  </button>
                </div>
                <div className="flex flex-row items-center">
                  <h1 className="mr-3 text-xl font-f2 text-c1">Total:</h1>
                  <h1 className="mr-3 text-xl font-f2 text-c1 text-bold">
                    {"$" + moneyFormat(subtotal) + " USD"}
                  </h1>
                </div>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="flex flex-row items-center p-3 px-20 mt-3 mr-3 text-white rounded-full bg-c1 w-fit"
              >
                <h1 className="text-3xl">Add To Bag</h1>
              </button>
            </div>
            <div className="flex flex-col w-full mx-auto mt-4 ml-1/2">
              {Object.keys(dropDownButtons).map((row, i) => (
                <div key={i}>
                  <button
                    onClick={() => viewDetails(row)}
                    className="flex flex-row items-center justify-between w-full py-3 border-t-2 border-t-solid border-t-c3 "
                  >
                    <h1 className="text-3xl font-f1 text-c1">
                      {dropDownButtons[row].title}
                    </h1>
                    <div id="overview-icon">{dropDownButtons[row].button}</div>
                  </button>
                  <div
                    id={row + "-body"}
                    className={
                      "w-full overflow-y-scroll h-fit " +
                      dropDownButtons[row].startStatus
                    }
                  >
                    <p className="text-xl font-p text-c1">
                      {dropDownButtons[row].text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <Carousel
          title="You May Also Like"
          data={getCarouselData(productData.tags, 10)}
        />
      </div>
      <ActionCards />

      <Footer />
    </motion.div>
  );
}

const getProductData = (data, params) => {
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].title.slice(0, 25).replaceAll(" ", "_").replaceAll("/", "") ==
      params
    ) {
      return data[i];
    }
  }
};

// export const getStaticPaths = async () => {
//   const req = await fetch(`http://localhost:3000/Data/products.json`);
//   const data = await req.json();

//   const paths = data.map((product) => {
//     return {
//       params: {
//         key: product.id,
//         Product: product.title
//           .slice(0, 25)
//           .replaceAll(" ", "_")
//           .replaceAll("/", ""),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.Product;
//   const req = await fetch(`http://localhost:3000/Data/products.json`);
//   const data = await req.json();

//   // props.key = id;

//   return {
//     props: {
//       key: id,
//       productData: getProductData(data, id),
//       images: {
//         mainImage: getProductData(data, id).images[0],
//         secImages: getProductData(data, id).images,
//       },
//     },
//   };
// };

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/Data/products.json`);
  const data = await req.json();

  // data.key = getProductData(data, params.Product).id;

  return {
    props: {
      key: params.Product,

      productData: getProductData(data, params.Product),
      currentPage: params,
      images: {
        mainImage: getProductData(data, params.Product).images[0],
        secImages: getProductData(data, params.Product).images,
      },
    },
  };
}
