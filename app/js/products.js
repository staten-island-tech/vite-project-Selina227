const snacks = [
  {
    title: "Pocky Sticks",
    price: 3.5,
    originCountry: "Japan",
    flavor: "Chocolate",
    imageUrl:
      "https://japanhaul.com/cdn/shop/products/JH1.31_20230119_02_04_large.jpg?v=1674545059",
    altText: "Cookie sticks covered with chocolate on a plate.",
  },
  {
    title: "Biscotti",
    price: 4.0,
    originCountry: "Italy",
    flavor: "Almond",
    imageUrl:
      "https://theplantbasedschool.com/wp-content/uploads/2023/08/Almond-biscotti-2.jpg",
    altText: "Crispy almond cookies on a plate.",
  },
  {
    title: "Tortilla Chips",
    price: 2.5,
    originCountry: "Mexico",
    flavor: "Salty",
    imageUrl:
      "https://www.allrecipes.com/thmb/YZgIEBUG_a2lGC6Oywia0q2ZoTk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20482-baked-tortilla-chips-DDMFS-4x3-9c0db75a920c4bebbb6166984c8ecf00.jpg",
    altText: "Baked tortilla chips with a tomatoes and lime.",
  },
  {
    title: "Baklava",
    price: 5.0,
    originCountry: "Greece",
    flavor: "Honey",
    imageUrl:
      "https://www.modernhoney.com/wp-content/uploads/2023/03/Baklava-8-crop-scaled.jpg",
    altText: "Pastry dough filled with nuts and sweetened with honey.",
  },
  {
    title: "Churros",
    price: 3.75,
    originCountry: "Spain",
    flavor: "Cinnamon",
    imageUrl:
      "https://recipe30.com/wp-content/uploads/2017/01/churros-848x477.jpg",
    altText: "Fried pastry dough shaped like pipes.",
  },
  {
    title: "Vegemite on Toast",
    price: 1.5,
    originCountry: "Australia",
    flavor: "Savory",
    imageUrl:
      "https://www.196flavors.com/wp-content/uploads/2020/01/vegemite-toast-1-FP-500x375.jpeg",
    altText: "A toasted sandwich with brewers' yeast spread.",
  },
  {
    title: "Samosas",
    price: 4.5,
    originCountry: "India",
    flavor: "Spicy",
    imageUrl:
      "https://www.foodandwine.com/thmb/iQ-Y-y_5moivan3ltEbBs2ZKrAk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Potato-Pea-Samosas-FT-RECIPE0623-0e879f6f6da04a1fb385cb4890d355b4.jpg",
    altText: "Fried pastry with savory fillings.",
  },
  {
    title: "Jelly Babies",
    price: 2.75,
    originCountry: "UK",
    flavor: "Fruity",
    imageUrl:
      "https://oldestsweetshop.co.uk/cdn/shop/products/jelly_babies_1_648x.jpg?v=1600869372",
    altText: "Soft sugar jelly sweets shaped like babies.",
  },
  {
    title: "Biltong",
    price: 6.0,
    originCountry: "South Africa",
    flavor: "Beef",
    imageUrl:
      "https://ayobafoods.com/cdn/shop/files/Ayoba-Traditional-Grass-Fed-Beef-Biltong-Premium-Jerky-Alternative_2048x.jpg?v=1718307033",
    altText: "Thinly sliced, cured meat.",
  },
  {
    title: "Currywurst",
    price: 4.0,
    originCountry: "Germany",
    flavor: "Curry",
    imageUrl:
      "https://www.tasteofhome.com/wp-content/uploads/2020/08/Currywurst_EXPS_TOHAS21_156083_E04_15_5b_v2.jpg",
    altText: "Sausages with curry ketchup and fries.",
  },
  {
    title: "Rice Cake",
    price: 1.99,
    originCountry: "China",
    flavor: "Plain",
    imageUrl:
      "https://media.istockphoto.com/id/467282237/photo/red-bean-rice-cake.jpg?s=612x612&w=0&k=20&c=L3acUfGQdGEWEkFtifLjOLLQGAMx9kPKTtrTZkpxkz8=",
    altText: "Sticky and chewy dish.",
  },
  {
    title: "Pineapple Tarts",
    price: 5.5,
    originCountry: "Singapore",
    flavor: "Pineapple",
    imageUrl:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2023-01-pineapple-tarts%2F2022-pineapple-tarts__1143",
    altText: "Tarts filled and topped with pineapple jam.",
  },
  {
    title: "Nougat",
    price: 3.5,
    originCountry: "France",
    flavor: "Honey Almond",
    imageUrl:
      "https://www.thespruceeats.com/thmb/7B78Ytu7guxwfbROya-H4iptRuw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-121771560-58ae08823df78c345b27ed1d.jpg",
    altText: "Confections made of sugar, honey, egg whites, and roasted nuts.",
  },
  {
    title: "Bukayo",
    price: 4.25,
    originCountry: "Philippines",
    flavor: "Coconut",
    imageUrl:
      "https://www.pinoyrecipe.net/wp-content/uploads/2014/11/Bukayo-Candies.jpg",
    altText: "",
  },
  {
    title: "Tamarind Balls",
    price: 3.0,
    originCountry: "Jamaica",
    flavor: "Sweet",
    imageUrl:
      "https://i.ytimg.com/vi/zGgF-VvUYLQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB8MqsjWY9qk8zjNKgQ8VaobWkx5g",
    altText: "Sweet treats made out of tamarind fruits.",
  },
  {
    title: "Curry Chips",
    price: 2.99,
    originCountry: "Thailand",
    flavor: "Curry",
    imageUrl:
      "https://importfood.com/media/zoo/images/crab-curry-lays-large_9723c425b589cce38638415289785eb0.jpg",
    altText: "Curry-flavored chips.",
  },
  {
    title: "Jhal Muri",
    price: 1.75,
    originCountry: "Bangladesh",
    flavor: "Spicy",
    imageUrl:
      "https://static.toiimg.com/thumb/55129660.cms?imgsize=195934&width=800&height=800",
    altText: "Spicy mixture of puffed rice, chilis, and vegetables.",
  },
  {
    title: "Baba Ghanoush",
    price: 3.5,
    originCountry: "Lebanon",
    flavor: "Eggplant",
    imageUrl:
      "https://i0.wp.com/mostlymediterranean.com/wp-content/uploads/2020/06/baba-ghanoush-1.jpg?fit=1000%2C800&ssl=1",
    altText: "Creamy eggplant appetizer.",
  },
  {
    title: "Dulce de Leche Cookie",
    price: 3.0,
    originCountry: "Argentina",
    flavor: "Caramel",
    imageUrl:
      "https://emmaduckworthbakes.com/wp-content/uploads/2022/11/Dulce-de-leche-cookies-recipe-500x375.jpg",
    altText: "Sandwich cookies made up of buttery shortbread.",
  },
  {
    title: "Oreo Cookies",
    price: 4.5,
    originCountry: "USA",
    flavor: "Sweet",
    imageUrl: "https://m.media-amazon.com/images/I/81XVBOpZq1L.jpg",
    altText:
      "Sandwich cookies consisting of two cocoa biscuits with a sweet filling.",
  },
  {
    title: "Roti Jala",
    price: 2.5,
    originCountry: "Malaysia",
    flavor: "Savory",
    imageUrl:
      "https://divinelydelish.com/wp-content/uploads/2018/12/img_1782_copyright.jpg",
    altText: "Tea time snack served with curry dishes.",
  },
];

export { snacks };
