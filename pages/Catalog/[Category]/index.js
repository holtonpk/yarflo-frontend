import React from "react";
import { useRouter } from "next/router";
import Collection from "../../../components/Collection";
import ActionCards from "../../../components/ActionCards";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import dataLayout from "../../../public/Data/dataLayout.json";
import Link from "next/link";
import Image from "next/image";
import { getImage, sortProductsByTag } from "../../../components/logic";
import { useState } from "react";
import { motion } from "framer-motion";

export default function catagory() {
  const router = useRouter();
  const { Category } = router.query;

  const setTitle = () => {
    if (Category) {
      return (
        <h1 className="absolute z-30 px-3 text-6xl text-center text-white -translate-x-1/2 -translate-y-1/2 font-f1 left-1/2 top-1/2">
          {Category.replaceAll("_", " ")}
        </h1>
      );
    }
  };

  const configBody = () => {
    if (Category) {
      return (
        <div className="w-full ">
          {Object.keys(dataLayout[Category.replaceAll("_", " ")]).map(
            (category, i) => (
              <div key={i} className="flex flex-col w-full mt-6 mr-6">
                <h1 className="text-4xl text-c1 font-f1">{category}</h1>
                <div className="grid max-w-full grid-cols-5 gap-16 mt-3">
                  {dataLayout[Category.replaceAll("_", " ")][category].map(
                    (subcategory) => (
                      <div key={subcategory} className="w-40">
                        <Link
                          href={
                            "/Catalog/" +
                            Category.replaceAll(" ", "_") +
                            "/" +
                            subcategory.replaceAll(" ", "_")
                          }
                        >
                          <a>
                            <div className="w-full">
                              <Image
                                src={getImage(
                                  sortProductsByTag(
                                    [
                                      Category.replaceAll("_", " "),
                                      category,
                                      subcategory,
                                    ],
                                    true,
                                    true
                                  )[0]
                                )}
                                layout="responsive"
                                width="100%"
                                height="100%"
                              />
                            </div>

                            <h2 className="text-center text-md font-f2 text-c1 ">
                              {subcategory}
                            </h2>
                          </a>
                        </Link>
                      </div>
                    )
                  )}
                </div>
              </div>
            )
          )}
        </div>
      );
    } else {
    }
  };

  const configMenu = () => {
    if (Category) {
      console.log("cccc:", Category);
      return (
        <div className="flex flex-col w-full ">
          {Object.keys(dataLayout[Category.replaceAll("_", " ")]).map(
            (category, i) => (
              <div key={i} className="mb-3">
                <h1 className="mb-2 text-3xl font-bold border-b-1 font-f1 text-c1 border-b-c1">
                  {category}
                </h1>

                {dataLayout[Category.replaceAll("_", " ")][category].map(
                  (subcategory) => (
                    <div key={subcategory}>
                      <Link
                        href={
                          "/Catalog/" +
                          Category.replaceAll(" ", "_") +
                          "/" +
                          subcategory.replaceAll(" ", "_")
                        }
                      >
                        <a>
                          <h2 className="text-lg font-f2 text-c1">
                            {subcategory}
                          </h2>
                        </a>
                      </Link>
                    </div>
                  )
                )}
              </div>
            )
          )}
        </div>
      );
    } else {
    }
  };

  // console.log("data", Object.keys(dataLayout[Category]));

  return (
    <motion.div exit={{ opacity: 0 }}>
      <Nav />
      {/* <h1 className="text-5xl text-center font-f1 text-c1">{Category}</h1> */}

      <div className="relative flex flex-col h-full">
        <div className="relative w-full mx-auto overflow-hidden h-80 ">
          <Image
            src={"/assets/Categories/" + Category + ".jpg"}
            layout="fill"
            objectFit="cover"
            className="relative w-full h-full"
          />
          <div className="absolute z-20 w-full h-full bg-black_5"></div>
          {setTitle()}
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col w-1/5 mt-4">
            <div className="flex flex-col pl-5 mb-4">{configMenu()}</div>
          </div>
          <div className="flex flex-col items-center w-4/5 ml-6">
            {configBody()}
          </div>
        </div>
      </div>
      <ActionCards />
      <Footer />
    </motion.div>
  );
}


