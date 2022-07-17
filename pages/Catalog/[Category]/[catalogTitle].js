import React from "react";
import { useRouter } from "next/router";
import Nav from "../../../components/Nav";
import Catalog from "../../../components/Catalog";
import Footer from "../../../components/Footer";
import { sortProductsByTag, getCarouselData } from "../../../components/logic";
import Carousel from "../../../components/Carousel";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineArrowBack,
  MdClose,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
export default function catalog({ products, tags }) {
  console.log("t", tags);

  const [data, setData] = useState(sortProductsByTag(tags));

  const [activeFilters, setActiveFilters] = useState({});

  const setFilter = (filterType) => {
    let filterList = [];
    for (let i = 0; i < data.length; i++) {
      if (!filterList.includes(data[i][filterType])) {
        filterList.push(data[i][filterType]);
      }
    }
    return filterList;
  };

  const [sortText, setSortText] = useState("Best Selling");

  const [colorList, setColorList] = useState(setFilter("color"));
  const [typeList, setTypeList] = useState(setFilter("productType"));
  const [materialList, setMaterialList] = useState(setFilter("material"));
  const [featuresList, setFeaturesList] = useState(setFilter("features"));

  useEffect(() => {
    setData(sortProductsByTag(tags));
    if (!Object.keys(activeFilters).length == 0) {
      filterData(activeFilters);
    } else {
      setData(sortProductsByTag(tags));
    }
  }, [activeFilters, tags]);

  const collapseFilter = (id) => {
    const dropDown = document.getElementById(id);
    const icon = document.getElementById(id + "-icon");
    if (dropDown.classList.contains("hide")) {
      dropDown.classList.remove("hide");
      icon.classList.remove("rotate-180");
    } else {
      dropDown.classList.add("hide");
      icon.classList.add("rotate-180");
    }
  };

  const sortData = (sortType, data) => {
    const orderedParam = [];
    const sortedData = [];
    if (sortType == "p-h2l" || sortType == "p-l2h") {
      for (let i = 0; i < data.length; i++) {
        orderedParam.push(data[i]["salePrice"]);
      }
      if (sortType == "p-h2l") {
        orderedParam.sort(function (a, b) {
          return b - a;
        });
      }
      if (sortType == "p-l2h") {
        orderedParam.sort(function (a, b) {
          return a - b;
        });
      }
      for (let i = 0; i < orderedParam.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (data[j]["salePrice"] == orderedParam[i]) {
            sortedData.push(data[j]);
          }
        }
      }
    }
    if (sortType == "ratings") {
      for (let i = 0; i < data.length; i++) {
        orderedParam.push(data[i]["rating"]);
      }

      orderedParam.sort(function (a, b) {
        return b - a;
      });

      for (let i = 0; i < orderedParam.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (data["rating"] == orderedParam[i]) {
            sortedData.push(data[j]);
          }
        }
      }
    }

    if (sortType == "newest") {
      for (let i = 0; i < data.length; i++) {
        orderedParam.push(new Date(data[i]["date"]));
      }
      orderedParam.sort((a, b) => b - a);

      for (let i = 0; i < orderedParam.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (
            new Date(data[j]["date"]).toLocaleDateString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }) ==
            orderedParam[i].toLocaleDateString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })
          ) {
            sortedData.push(data[j]);
          }
        }
      }
    }

    if (sortType == "recom") {
      return data;
    }
    return sortedData;
  };

  const clickRadio = (filter) => {
    if (!document.getElementById(filter["buttonId"]).checked) {
      subtractFilter(filter, false);
    } else {
      try {
        document
          .getElementById(filter["filterId"] + "-filter")
          .classList.remove("hide");
      } catch {
        // Element has never been hidden
      }

      addFilter(filter);
    }
  };

  const addFilter = (filter) => {
    // Add Filter to activeFilters
    // apply filter to data
    // only allow one Sort filter

    if (filter["Sort"]) {
      // Prevents multi Sort Filters
      const checkBoxes = document.getElementsByClassName("sortBy");
      for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes.item(i).checked = false;
      }
      document.getElementById(filter["buttonId"]).checked = true;
      Object.keys(activeFilters).map((activeFilter) => {
        if (activeFilters[activeFilter]["sort"]) {
          // Remove any Sort filter
          delete activeFilters[activeFilter];
        }
      });
    }

    // Create new object and append to State
    let updatedValue = {};
    updatedValue = {
      [filter["filterId"]]: {
        buttonId: filter["buttonId"],
        text: filter["text"],
        filter: filter["filter"],
        sort: filter["Sort"],
      },
    };

    setActiveFilters((activeFilters) => ({
      ...activeFilters,
      ...updatedValue,
    }));

    // filterData(activeFilters);
  };

  const subtractFilter = (filter, fromState) => {
    // remove Filter from activeFilters
    // hide filter element
    // apply to data
    if (fromState) {
      document.getElementById(
        activeFilters[filter]["buttonId"]
      ).checked = false;
      delete activeFilters[filter];
      setActiveFilters({ ...activeFilters });
      document.getElementById(filter + "-filter").classList.add("hide");
    } else {
      document.getElementById(filter["buttonId"]).checked = false;
      delete activeFilters[filter["filterId"]];
      setActiveFilters({ ...activeFilters });
      document
        .getElementById(filter["filterId"] + "-filter")
        .classList.add("hide");
    }
  };

  const filterData = (allFilters) => {
    const filteredData = [];
    const sortParam = null;
    Object.keys(allFilters).map((filter) => {
      if (!activeFilters[filter]["sort"]) {
        for (let i = 0; i < sortProductsByTag(tags).length; i++) {
          if (
            sortProductsByTag(tags)[i][
              activeFilters[filter]["filter"]["filterParam"]
            ] == activeFilters[filter]["filter"]["filterValue"]
          ) {
            if (!filteredData.includes(sortProductsByTag(tags)[i])) {
              filteredData.push(sortProductsByTag(tags)[i]);
            }
          }
        }
      } else {
        sortParam = filter;
      }
    });

    if (sortParam) {
      if (filteredData.length >= 1) {
        setData(sortData(sortParam, filteredData));
      } else {
        setData(sortData(sortParam, sortProductsByTag(tags)));
      }
    } else {
      setData(filteredData);
    }
  };

  return (
    <motion.div className="w-screen overflow-x-hidden" exit={{ opacity: 0 }}>
      <Nav />
      {/* <h1 className="text-3xl">{catalogTitle}</h1> */}
      <div className="flex flex-col">
        {/* <button className="w-11/12 p-3 mx-auto mt-3 border-4 border-solid h-fit border-c1">
          <div className="flex flex-row items-center justify-start mx-auto w-fit">
            <MdOutlineArrowBack className="w-6 h-6 fill-c1" />
            <h1 className="text-xl font-f1 text-c1 text-bold">
              Shop ALL Outdoor
            </h1>
          </div>
        </button> */}
        <div className="flex flex-row items-center w-full">
          <div className="flex flex-row items-center justify-start p-4 ml-12">
            <Link href={"/Catalog/" + tags[0].replaceAll(" ", "_")}>
              <a>
                <h1 className="text-2xl font-f1 text-c1 text-bold">
                  {tags[0]}
                </h1>
              </a>
            </Link>

            <div className="w-0 h-10 mx-3 border-l-2 border-solid border-c1 "></div>
            <h1 className="text-4xl font-f1 text-c1 text-bold">{tags[1]}</h1>
            <div className="h-10 mx-3 border-l-2 border-l-solid border-c1 "></div>

            <h1 className="text-xl font-f1 text-c3">
              {data.length + " Items"}
            </h1>
          </div>
          {Object.keys(activeFilters).map((filter) => (
            <div
              key={activeFilters[filter]["text"]}
              id={filter + "-filter"}
              className="flex flex-row items-center justify-start p-2 scale-in-hor-left"
            >
              <div className="flex flex-row items-center justify-start p-2 border-2 border-solid border-c1 rounded-xl">
                <button onClick={() => subtractFilter(filter, true)}>
                  <MdClose className="w-8 h-8 fill-c1" />
                </button>
                <h2 className="text-lg font-f2 text-c1">
                  {activeFilters[filter]["text"]}
                </h2>
              </div>
            </div>
          ))}
          <button
            onClick={() => {
              document.getElementById("sortMenu").classList.toggle("hide");
              document.getElementById("sortIcon").classList.toggle("rotate-90");
            }}
            className="relative flex flex-row items-center justify-between w-56 px-1 py-1 text-lg text-center rounded-lg border-1 border-c3 font-f2 text-c1 h-fit "
          >
            <h1>{sortText}</h1>
            <MdOutlineKeyboardArrowDown
              id="sortIcon"
              className="w-6 h-6 fill-c1 "
            />
            <div
              id="sortMenu"
              className="absolute z-40 flex flex-col items-start justify-between w-full bg-white border-solid top-10 h-fit border-1 border-c3 hide"
            >
              <button
                onClick={() => {
                  setSortText("Recommended");
                  document.getElementById("sortMenu").classList.toggle("hide");
                  document
                    .getElementById("sortIcon")
                    .classList.toggle("rotate-90");
                }}
                className="mx-2 ml-2 text-md font-f1 text-c1 hover:text-c3"
              >
                Best Selling
              </button>
              <button
                onClick={() => {
                  setSortText("Price: Low to High");
                  document.getElementById("sortMenu").classList.toggle("hide");
                  document
                    .getElementById("sortIcon")
                    .classList.toggle("rotate-90");
                }}
                className="mx-2 ml-2 font-f1 text-md text-c1 hover:text-c3"
              >
                Price: Low to High
              </button>
              <button
                onClick={() => {
                  setSortText("Price: High to Low");
                  document.getElementById("sortMenu").classList.toggle("hide");
                  document
                    .getElementById("sortIcon")
                    .classList.toggle("rotate-90");
                }}
                className="mx-2 ml-2 font-f1 text-md text-c1 hover:text-c3"
              >
                Price: High to Low
              </button>

              <button
                onClick={() => {
                  setSortText("Customer Ratings");
                  document.getElementById("sortMenu").classList.toggle("hide");
                  document
                    .getElementById("sortIcon")
                    .classList.toggle("rotate-90");
                }}
                className="mx-2 ml-2 font-f1 text-md text-c hover:text-c3"
              >
                Customer Ratings
              </button>
              <button
                onClick={() => {
                  setSortText("Newest");
                  document.getElementById("sortMenu").classList.toggle("hide");
                  document
                    .getElementById("sortIcon")
                    .classList.toggle("rotate-90");
                }}
                className="mx-2 ml-2 font-f1 text-md text-c1 hover:text-c3"
              >
                Newest
              </button>
            </div>
          </button>
        </div>
        <div className="flex flex-row w-full">
          {/* <div className="flex flex-col pl-6 ml-6 w-fit">
            <h1 className="w-full pb-5 mb-6 text-xl font-f1 text-c1 border-b-1 border-b-c1">
              SORT BY:
            </h1>
            <label className="container text-md font-f1 text-c1">
              Recommended
              <input
                id="recom-check"
                type="checkbox"
                className="sortBy"
                onClick={() =>
                  clickRadio({
                    filterId: "recom",
                    buttonId: "recom-check",
                    text: "Recommended",
                    Sort: true,
                  })
                }
              />
              <span className="rounded-full checkmark"></span>
            </label>

            <label className="container font-f1 text-md text-c1">
              Price: Low to High
              <input
                id="p-l2h-check"
                type="checkbox"
                className="sortBy"
                // onClick={() => setData(sortData("p-l2h", "Price: Low to High"))}
                onClick={() =>
                  clickRadio({
                    filterId: "p-l2h",
                    buttonId: "p-l2h-check",
                    text: "Price: Low to High",
                    filter: null,
                    Sort: true,
                  })
                }
              />
              <span className="rounded-full checkmark"></span>
            </label>

            <label className="container font-f1 text-md text-c1">
              Price: High to Low
              <input
                id="p-h2l-check"
                type="checkbox"
                className="sortBy"
                onClick={() => setData(sortData("p-h2l", "Price: High to Low"))}
                onClick={() =>
                  clickRadio({
                    filterId: "p-h2l",
                    buttonId: "p-h2l-check",
                    text: "Price: High to Low",
                    filter: null,
                    Sort: true,
                  })
                }
              />
              <span className="rounded-full checkmark"></span>
            </label>

            <label className="container font-f1 text-md text-c1">
              Customer Ratings
              <input
                id="ratings-check"
                type="checkbox"
                className="sortBy"
                onClick={() =>
                  clickRadio({
                    filterId: "ratings",
                    buttonId: "ratings-check",
                    text: "Customer Ratings",
                    filter: null,
                    Sort: true,
                  })
                }
              />
              <span className="rounded-full checkmark"></span>
            </label>
            <label className="container font-f1 text-md text-c1">
              Newest
              <input
                id="newest-check"
                type="checkbox"
                className="sortBy"
                onClick={() =>
                  clickRadio({
                    filterId: "newest",
                    buttonId: "newest-check",
                    text: "Newest",
                    filter: null,
                    Sort: true,
                  })
                }
              />
              <span className="rounded-full checkmark"></span>
            </label>

            <h1 className="w-full pb-5 mt-6 mb-6 text-xl font-f1 text-c1 border-b-1 border-b-c1">
              FILTER BY:
            </h1>
            <button
              onClick={() => collapseFilter("productType")}
              className="flex flex-row items-center justify-start w-fit"
            >
              <h1 className="w-full pb-5 text-xl font-f1 text-c1 ">Type</h1>
              <MdOutlineKeyboardArrowUp
                id="productType-icon"
                className="w-10 h-10 mb-3 rotate-180 fill-c1"
              />
            </button>

            <div id="productType" className="hide">
              {typeList.map((productType) => (
                <label
                  key={productType}
                  id={productType}
                  className="container font-f1 text-md text-c1"
                >
                  {productType}
                  <input
                    type="checkbox"
                    className="productTypeCheck"
                    id={productType + "-check"}
                    onClick={() =>
                      clickRadio({
                        filterId: "productType-" + productType,
                        buttonId: productType + "-check",
                        text: "Type: " + productType,

                        filter: {
                          filterParam: "productType",
                          filterValue: productType,
                        },

                        Sort: false,
                      })
                    }
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
            <button
              onClick={() => collapseFilter("color")}
              className="flex flex-row items-center justify-start w-fit "
            >
              <h1 className="w-full pb-5 text-xl font-f1 text-c1 ">Color</h1>
              <MdOutlineKeyboardArrowUp
                id="color-icon"
                className="w-10 h-10 mb-3 rotate-180 fill-c1"
              />
            </button>
            <div id="color" className="hide">
              {colorList.map((color) => (
                <label
                  key={color}
                  id={color}
                  className="container font-f1 text-md text-c1"
                >
                  {color}
                  <input
                    id={color + "-check"}
                    type="checkbox"
                    className="colorCheck"
                    onClick={() =>
                      clickRadio({
                        filterId: "color-" + color,
                        buttonId: color + "-check",
                        text: "Color: " + color,
                        filter: { filterParam: "color", filterValue: color },
                        Sort: false,
                      })
                    }
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
            <button
              onClick={() => collapseFilter("material")}
              className="flex flex-row items-center justify-start w-fit"
            >
              <h1 className="w-full pb-5 text-xl font-f1 text-c1 ">Material</h1>
              <MdOutlineKeyboardArrowUp
                id="material-icon"
                className="w-10 h-10 mb-3 rotate-180 fill-c1"
              />
            </button>
            <div id="material" className="hide">
              {materialList.map((material) => (
                <label
                  key={material}
                  id={material}
                  className="container font-f1 text-md text-c1"
                >
                  {material}
                  <input
                    type="checkbox"
                    className="materialCheck"
                    id={material + "-check"}
                    onClick={() =>
                      clickRadio({
                        filterId: "material-" + material,
                        buttonId: material + "-check",
                        text: "Material: " + material,

                        filter: {
                          filterParam: "material",
                          filterValue: material,
                        },
                        Sort: false,
                      })
                    }
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
            <button
              onClick={() => collapseFilter("features")}
              className="flex flex-row items-center justify-start w-fit"
            >
              <h1 className="w-full pb-5 text-xl font-f1 text-c1 ">Features</h1>
              <MdOutlineKeyboardArrowUp
                id="features-icon"
                className="w-10 h-10 mb-3 rotate-180 fill-c1"
              />
            </button>
            <div id="features" className="hide">
              {featuresList.map((feature) => (
                <label
                  key={feature}
                  id={feature}
                  className="container font-f1 text-md text-c1"
                >
                  {feature}
                  <input
                    type="checkbox"
                    className="featuresCheck"
                    onClick={() =>
                      clickRadio({
                        filterId: "features-" + feature,
                        buttonId: feature + "-check",
                        text: "Feature: " + feature,

                        filter: {
                          filterParam: "features",
                          filterValue: feature,
                        },

                        Sort: false,
                      })
                    }
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
          </div> */}

          <div className="grid w-full grid-cols-3 gap-6 mx-6 h-fit">
            {data.map((product) => (
              <div key={product.id}>
                <Catalog
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                />
              </div>
            ))}
          </div>
        </div>
        <Carousel title="Just For You" data={getCarouselData(tags, 10)} />
        <Footer />
      </div>
    </motion.div>
  );
}

export async function getServerSideProps({ params }) {
  // const req = await fetch(`http://localhost:3000/Data/Outdoor_furniture.json`);
  // const data = await req.json();
  const tags = [
    params.Category.replaceAll("_", " "),
    params.catalogTitle.replaceAll("_", " "),
  ];

  return {
    props: { tags: tags },
  };
}
