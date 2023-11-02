
const products = [
    {
        image: "home1.webp",
        city: "Tehran",
        Name: "خانه ویلایی ",
        price: 50000000,
        sellerName: "mina jafari",
        description: "دو اتاق خوابه، دارای پارکینگ، ۱۲۰ متر زیربنا، غیر دربست، دارای سرویس بهداشتی فرنگی و ایرانی"
      },
    {
      image: "house1.png",
      city: "kordan",
      Name: "ویلای سه‌خوابه استخردار",
      price: 1600000,
      sellerName: "abbas akbari",
      description: "بدون اتاق خواب، یک تخت دو نفره، مبل تخت‌شو، استخر و دارای پارکینگ"
    },
    {
      image: "house2.webp",
      city: "rasht",
      Name: "خانه دوبلکس کوچک",
      price: 10000000,
      sellerName: "mina jafari",
      description: "دو طبقه، دربست، ۲ اتاق خواب مجزا، اینترنت، پارکینگ، سیستم سرمایشی، لوازم سرو غذا، حداکثر ۱۰ نفر"
    },
  
    {
      image: "house8.jpeg",
      city: "amol",
      Name: "خانه ساحلی ",
      price: 50000000,
      sellerName: "mina jafari",
      description: "نزدیک دریا، پارکینگ، بدون اتاق خواب"
    }
  ]

  const productsDiv = document.getElementById ("products")
  products.forEach (product => {
    const productItem = document.createElement ("div");
    productItem.setAttribute ("class" , "product");

    const productName = document.createElement ("div");
    productName.setAttribute ("class" , "name");
    const productPrice = document.createElement ("div");
    productPrice.setAttribute ("class" , "price");

    const productSellerName = document.createElement ("div");
    productSellerName.setAttribute ("class" , "sellerName");

    const productCity = document.createElement ("div");
    productCity.setAttribute ("class" , "city");

    const produDescription = document.createElement ("div");
    produDescription.setAttribute ("class" , "description");
    const productButton = document.createElement ("div")
    productButton.setAttribute ("class" , "button");

  


    productName.textContent = product.Name;
    productPrice.textContent = product.price;
    productSellerName.textContent = product.sellerName;
    productCity.textContent = product.city;
    produDescription.textContent = product.description;

    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    productItem.appendChild(productSellerName);
    productItem.appendChild(productCity);
    productItem.appendChild(produDescription);

    if (products.image) {
        const productsImage = document.createElement("img");        productsImage.setAttribute ("src" , "image/${product.image}");
        productItem.appendChild (productsImage);
    }
    productsDiv.appendChild(productItem);
  })