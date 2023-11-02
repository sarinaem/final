
const products = [
    {
        image: "img/origin.jpg",
        city: "شهر: تهران",
        Name: "خانه ویلایی ",
        price: "قیمت: ۲ میلیون و ۴۰۰ هزار تومان ",
        sellerName: "نام فروشنده: مینا جعفری",
        description: "توضیحات: دو اتاق خوابه، دارای پارکینگ، ۱۲۰ متر زیربنا، غیر دربست، دارای سرویس بهداشتی فرنگی و ایرانی"
      },
    {
      image: "img/product.png",
      city: "منطقه: کردان",
      Name: "ویلای سه‌خوابه استخردار",
      price: "قیمت: ۱ میلیون ",
      sellerName: "نام فروشنده؛ اکبر خسروی",
      description: "توضیحات: دارای سرویس بهداشتی فرنگی و ایرانی، بدون پارکینگ، ۲ اتاق خوابه، آسانسور، جکوزی"
    },
    {
      image: "img/product4.png",
      city: "شهر: رشت",
      Name: "خانه دوبلکس کوچک",
      price: "قیمت: ۲ میلیون و ۵۰۰ هزار تومان",
      sellerName: "نام فروشنده: رضوان محمودی",
      description: "توضیحات: دو طبقه، دربست، ۲ اتاق خواب مجزا، اینترنت، پارکینگ، سیستم سرمایشی، لوازم سرو غذا، حداکثر ۱۰ نفر"
    },
  
    {
      image: "img/product.png",
      city: "شهر: ساری",
      Name: "خانه ساحلی ",
      price: "قیمت: ۹۰۰ هزار تومان ",
      sellerName: "نام فروشنده: مینا رضوی",
      description: "توضیحات: نزدیک دریا، ۲ اتاق خوابه، غیر دربست"
    },
    {
      image: "img/product.png",
      city: "شهر: یاسوج",
      Name: "خانه ویلایی",
      price: "قیمت: ۵۰۰ هزار تومان ",
      sellerName: "نام فروشنده: محمد کویری",
      description: "توضیحات: ۱ اتاق خواب، دارای پارکینگ، اینترنت، تاب و سرسره در حیاط کوچک خانه"
    },
    {
      image: "img/product.png",
      city: "شهر: تهران",
      Name: "آپارتمان ۴۰ متری",
      price: "قیمت: شبی ۱ میلیون تومان   ",
      sellerName: "نام فروشنده: محمد کویری",
      description: "توضیحات: دسترسی آسان به مترو و خدمات شهری، بدون آسانسور، طبقه ۲‌ام"
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
    const productButton = document.createElement ("button");
   

  


    productName.textContent = product.Name;
    productPrice.textContent = product.price;
    productSellerName.textContent = product.sellerName;
    productCity.textContent = product.city;
    produDescription.textContent = product.description;
    productButton.textContent = "اجاره می‌کنم...";

    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    productItem.appendChild(productSellerName);
    productItem.appendChild(productCity);
    productItem.appendChild(produDescription);

    if (product.image) {
      const productImage = document.createElement("img");
      productImage.setAttribute("src", "img/"+"product.image");
       productItem.appendChild(productImage);
  }
    productsDiv.appendChild(productItem);
  
    productItem.appendChild(productButton);
    productButton.setAttribute ("class" , "button");
  
  })