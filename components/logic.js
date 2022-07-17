import productData from "../public/Data/products.json";
// import img from '../public/assets/Product_imgs'
const buttonPress = (group, clickedButton, clickAttribute) => {
  let buttons = document.getElementsByClassName(group);
  for (let button of buttons) {
    button.classList.remove(clickAttribute);
  }
  document.getElementById(clickedButton).classList.add(clickAttribute);
};

const onHover = (event, elem) => {
  if (event == "in") {
    elem.classList.add("border-none");
    elem.getElementsByTagName("h1").item(0).classList.add("hide");
    elem.getElementsByTagName("button").item(0).classList.remove("hide");
    elem.getElementsByTagName("div").item(0).classList.add("dark_back");
  } else {
    elem.classList.remove("border-none");
    elem.getElementsByTagName("h1").item(0).classList.remove("hide");
    elem.getElementsByTagName("button").item(0).classList.add("hide");
    elem.getElementsByTagName("div").item(0).classList.remove("dark_back");
  }
};
const catClick = (Id) => {
  let elements = document.querySelectorAll(".category-headers li button");
  for (let element of elements) {
    element.classList.remove("active");
  }
  document.getElementById("button-" + Id).classList.add("active");
  let bodies = document.getElementsByClassName("catBody");
  for (let body of bodies) {
    body.classList.add("hide");
  }
  document.getElementById("show-" + Id).classList.remove("hide");
};

export function getProductData(id) {
  for (let i = 0; i < productData.length; i++) {
    if (productData[i].id == id) {
      return productData[i];
    }
  }
}

export function calculateTotal(cartItems) {
  let totalPrice = 0;
  for (let product of Object.keys(cartItems)) {
    totalPrice +=
      getProductData(product).price.replaceAll(",", "") *
      cartItems[product].quantity;
  }
  return totalPrice;
}

export function moneyFormat(value) {

  return value
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
    .replace("$", "");
}

export function calculateTotalSingle(cartItems, id) {
  let totalPrice = 0;
  totalPrice +=
    getProductData(id).price.replaceAll(",", "") * cartItems[id].quantity;

  return totalPrice;
}

export function deleteItem(item, cartItems, setCartItems) {
  delete cartItems[item];
  setCartItems({ ...cartItems });
}

export function sortProductsByTag(
  tagName,
  mustIncludeAllTags = true,
  idOnly = false
) {
  let idList = [];
  if (mustIncludeAllTags) {
    let meetsParams = null;
    for (let product of productData) {
      for (let i = 0; i < tagName.length; i++) {
        meetsParams = false;
        if (product.tags.includes(tagName[i])) {
          meetsParams = true;
        } else {
          meetsParams = false;
          break;
        }
      }
      if (meetsParams) {
        if (idOnly) {
          idList.push(product.id);
        } else {
          idList.push(product);
        }
      }
    }
  } else {
    for (let product of productData) {
      for (let i = 0; i < tagName.length; i++) {
        if (product.tags.includes(tagName[i])) {
          if (idOnly) {
            idList.push(product.id);
          } else {
            idList.push(product);
          }
        }
      }
    }
  }
  return idList;
}

export function getImage(id) {
  const image = "/assets/Product_imgs/" + id + "/0_" + id + ".jpg";
  // console.log("img:", image);
  // console.log("id:", id);
  return image;
}

export function getCarouselData(tags, quantity) {
  return sortProductsByTag(tags, true, true).slice(0, quantity);
}

// export default { buttonPress, onHover, catClick, getProductData };
