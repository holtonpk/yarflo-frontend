import { useRouter } from "next/router";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

import Catalog from "../../components/Catalog";
import productData from "../../public/Data/products.json";
export default function SearchPage({ data }) {
  const router = useRouter();
  const { search_item } = router.query;

  const showSearch = () => {
    if (!searchInput) {
      document.getElementById("searchInput2").classList.remove("hide");
      setSearchInput(true);
    } else if (
      document.getElementById("searchInput2").value &&
      document.getElementById("searchInput2").value.length >= 3
    ) {
      document.location.href =
        "/Search/" + document.getElementById("searchInput2").value;
    }
  };

  useEffect(() => {
    if (data.length == 0) {
      document
        .getElementById("searchInput2")
        .addEventListener("keyup", function (event) {
          if (event.keyCode === 13) {
            document.location.href =
              "/Search/" + document.getElementById("searchInput2").value;
          }
        });
    }
  });

  const configPage = () => {
    if (data.length == 0) {
      return (
        <div className="flex flex-col items-center justify-between w-1/2 h-48 mx-auto mt-16">
          <h1 className="text-4xl text-c1 font-f1">
            {`We couldn't find results for "` + search_item + `".`}
          </h1>
          <h1 className="text-xl text-c1 font-f2">
            Check the spelling, try a more general term, or use fewer words. You
            can also enter the product catalog item number.
          </h1>

          <div className="relative flex flex-row items-center justify-between w-1/2 h-12">
            <button
              onClick={() => showSearch()}
              className="h-12 p-2 border-2 border-r-0 rounded-l-full border-c1 w-fit"
            >
              <BiSearchAlt className="w-6 h-6 fill-c1" />
            </button>

            <input
              onkeydown={() => search(this)}
              id="searchInput2"
              type="text"
              placeholder="Please try another search..."
              className="w-full h-full border-2 border-l-0 rounded-r-full border-c1 text-c1 font-f2"
            />
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="mt-6 mb-6 ml-10">
            <h1 className="text-4xl font-f1 text-c1">
              {'Search results for "' +
                search_item +
                '" (' +
                data.length +
                " results)"}
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-6 mx-6 h-fit">
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
        </>
      );
    }
  };

  return (
    <>
      <Header searchValue={search_item} />
      {configPage()}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const getSearchResults = () => {
    const data = [];
    const ids = [];
    console.log("&&&&&&&&&&&&&&&&&", params.search_item);
    if (params.search_item) {
      for (let product of productData) {
        if (
          product.title.toUpperCase().includes(params.search_item.toUpperCase())
        ) {
          if (!ids.includes(product.id)) {
            console.log(product.title);
            data.push(product);
            ids.push(product.id);
          }
        }
        if (
          product.description
            .toUpperCase()
            .includes(params.search_item.toUpperCase())
        ) {
          if (!ids.includes(product.id)) {
            data.push(product);
            ids.push(product.id);
          }
        }
      }
    }

    return data;
  };

  const data = await getSearchResults();

  return {
    props: { data: data },
  };
}




