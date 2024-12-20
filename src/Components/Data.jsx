const Data = {
    // Lenovo Laptops (6 items)
    Lenovo: [
      {
        name: "Lenovo ThinkPad X1",
        processor: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD",
        price: 145000,
        generation: "11th Gen",
        category: "Business",
        description: "Premium build, ideal for work and travel with high performance.",
        image: "https://p1-ofp.static.pub//medias/25617280768_X1_Carbon_g11_202404091151221712869134526.png"
      },
      {
        name: "Lenovo Legion 5",
        processor: "Intel i3",
        ram: "16GB",
        storage: "1TB SSD",
        price: 120000,
        generation: "Ryzen 7",
        category: "Gaming",
        description: "Great for gaming with powerful specs and cooling system.",
        image: "https://i5.walmartimages.com/asr/34d78811-9da7-40fe-bafb-0a7aa8b502b1.b3d84a8004ebf89d1e054d167e285e40.jpeg"
      },
      {
        name: "Lenovo Yoga C940",
        processor: "Intel i7",
        ram: "16GB",
        storage: "1TB SSD",
        price: 130000,
        generation: "10th Gen",
        category: "Convertible",
        description: "Convertible laptop, touch-screen, ideal for creative professionals.",
        image: "https://s3bo.cashify.in/gpro/uploads/2023/01/13194439/lenovo-yoga-c940-811q9000mus-core-i5-10th-gen-8-gb-256-gb-ssd-windows-10-front.jpg?p=gp4sq&s=gp"
      },
      {
        name: "Lenovo ThinkPad L14",
        processor: "Intel i5",
        ram: "8GB",
        storage: "512GB SSD",
        price: 85000,
        generation: "10th Gen",
        category: "Business",
        description: "Affordable and reliable for work, with solid performance.",
        image: "https://th.bing.com/th/id/OIP.XuQERYJWBdbtcHvQqUX52gHaDt?w=2560&h=1280&rs=1&pid=ImgDetMain"
      },
      {
        name: "Lenovo IdeaPad 3",
        processor: "Intel i3",
        ram: "4GB",
        storage: "256GB SSD",
        price: 45000,
        generation: "10th Gen",
        category: "Budget",
        description: "Great budget laptop for basic tasks.",
        image: "https://i5.walmartimages.com/asr/11caeb8d-a283-48f3-b170-a6a32f5e6958.f8e26ac8795f62a8d98e984298e181c2.jpeg"
      },
      {
        name: "Lenovo ThinkBook 14",
        processor: "Intel i5",
        ram: "8GB",
        storage: "512GB SSD",
        price: 75000,
        generation: "10th Gen",
        category: "Business",
        description: "Slim design with a powerful processor for business use.",
        image: "https://www.bhphotovideo.com/images/images1000x1000/lenovo_20rm0005us_ts_thinkbook_14s_i5_8265u_1485558.jpg"
      }
    ],
  
    // Apple Laptops (6 items)
    Apple: [
      {
        name: "MacBook Air M1",
        processor: "Intel i3",
        ram: "8GB",
        storage: "256GB SSD",
        price: 99999,
        generation: "M1",
        category: "Ultrabook",
        description: "Thin, lightweight, great battery life, ideal for students and professionals.",
        image: "https://cdn.mos.cms.futurecdn.net/t8zE4f6Q2ELNabNTnnPoWR-1200-80.jpg"
      },
      {
        name: "MacBook Pro 13-inch",
        processor: "Intel i3",
        ram: "8GB",
        storage: "512GB SSD",
        price: 129999,
        generation: "M1",
        category: "Ultrabook",
        description: "Powerful ultrabook for professionals with high performance.",
        image: "https://techcrunch.com/wp-content/uploads/2020/05/00100trPORTRAIT_00100_BURST20200506153653558_COVER.jpg"
      },
      {
        name: "MacBook Pro 16-inch",
        processor: "Intel i7",
        ram: "32GB",
        storage: "1TB SSD",
        price: 249999,
        generation: "10th Gen",
        category: "Pro",
        description: "Ideal for creative professionals needing massive power.",
        image: "https://macfinder.co.uk/wp-content/uploads/2024/01/img-MacBook-Pro-Retina-16-Inch-85689.jpg"
      },
      {
        name: "MacBook Air 2022",
        processor: "Intel i5",
        ram: "8GB",
        storage: "512GB SSD",
        price: 114999,
        generation: "M2",
        category: "Ultrabook",
        description: "New design with the powerful M2 chip and long battery life.",
        image: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/MacBook_Air7035.jpeg"
      },
      {
        name: "MacBook Pro 14-inch",
        processor: "Intel i3",
        ram: "16GB",
        storage: "512GB SSD",
        price: 179999,
        generation: "M1 Pro",
        category: "Pro",
        description: "Great for creative professionals with amazing power.",
        image: "https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Pro-Retina-14-Inch-23934.jpg"
      },
      {
        name: "MacBook Pro 13-inch (Intel)",
        processor: "Intel i5",
        ram: "8GB",
        storage: "256GB SSD",
        price: 99999,
        generation: "10th Gen",
        category: "Ultrabook",
        description: "Lightweight and fast for everyday use.",
        image: "https://laptopmedia.com/wp-content/uploads/2017/06/macbook_pro_13_a_1143_0_0.jpg"
      }
    ],
  
    // Dell Laptops (6 items)
    Dell: [
      {
        name: "Dell XPS 13",
        processor: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD",
        price: 145000,
        generation: "10th Gen",
        category: "Ultrabook",
        description: "High-performance ultrabook with premium design.",
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/notebook-xps-9315-nt-blue-gallery-3.psd?fmt=pjpg&pscan=auto&scl=1&wid=4108&hei=2874&qlt=100,1&resMode=sharp2&size=4108,2874&chrss=full&imwidth=5000"
      },
      {
        name: "Dell Inspiron 15",
        processor: "Intel i5",
        ram: "8GB",
        storage: "512GB SSD",
        price: 85000,
        generation: "10th Gen",
        category: "Budget",
        description: "Affordable laptop for everyday tasks.",
        image: "https://th.bing.com/th/id/OIP.6e73nBiubT9nMYjJI43_8AHaFd?w=3702&h=2730&rs=1&pid=ImgDetMain"
      },
      {
        name: "Dell Alienware M15",
        processor: "Intel i7",
        ram: "16GB",
        storage: "1TB SSD",
        price: 160000,
        generation: "10th Gen",
        category: "Gaming",
        description: "High-end gaming laptop with powerful specs.",
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/m15-r7-amd/media-gallery/notebook-alienware-m15-r7-black-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3848&hei=2738&qlt=100,1&resMode=sharp2&size=3848,2738&chrss=full&imwidth=5000"
      },
      {
        name: "Dell Latitude 7410",
        processor: "Intel i5",
        ram: "8GB",
        storage: "256GB SSD",
        price: 120000,
        generation: "10th Gen",
        category: "Business",
        description: "Business laptop with premium features.",
        image: "https://th.bing.com/th/id/OIP.wnKAifgeIkpBzBoqzNIw8AHaFj?w=2048&h=1536&rs=1&pid=ImgDetMain"
      },
      {
        name: "Dell G5 15",
        processor: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD",
        price: 135000,
        generation: "10th Gen",
        category: "Gaming",
        description: "Great gaming laptop with excellent cooling system.",
        image: "https://m.media-amazon.com/images/I/71hK4AggBMS._AC_UF1000,1000_QL80_.jpg"
      },
      {
        name: "Dell Inspiron 14",
        processor: "Intel i3",
        ram: "4GB",
        storage: "256GB SSD",
        price: 55000,
        generation: "10th Gen",
        category: "Budget",
        description: "Compact and affordable laptop for casual use.",
        image: "https://i5.walmartimages.com/asr/b59e58bb-1d41-4128-9a48-51c51a8d494c.30484cac23f0115a41e0b6af18232ee7.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
      }
    ],
  
    // HP Laptops (6 items)
    HP: [
      {
        name: "HP Spectre x360",
        processor: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD",
        price: 145000,
        generation: "10th Gen",
        category: "Convertible",
        description: "Sleek, premium convertible laptop for professionals.",
        image: "https://th.bing.com/th/id/OIP.mGba6CDEayK-G5BrQdIgywAAAA?rs=1&pid=ImgDetMain"
      },
      {
        name: "HP Pavilion 15",
        processor: "Intel i5",
        ram: "8GB",
        storage: "512GB SSD",
        price: 85000,
        generation: "10th Gen",
        category: "Budget",
        description: "Good value for money with a powerful Intel processor.",
        image: "https://www.thecoco.net/wp-content/uploads/2021/08/hp-laptop-15-eg.jpeg"
      },
      {
        name: "HP Elite Dragonfly",
        processor: "Intel i7",
        ram: "16GB",
        storage: "1TB SSD",
        price: 200000,
        generation: "10th Gen",
        category: "Business",
        description: "Lightweight, business-class laptop with top-tier features.",
        image: "https://th.bing.com/th/id/OIP.nfUJGqwSMk0NQi83smt8CAAAAA?rs=1&pid=ImgDetMain"
      },
      {
        name: "HP Omen 15",
        processor: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD",
        price: 120000,
        generation: "10th Gen",
        category: "Gaming",
        description: "Gaming laptop with high refresh rate and RGB backlit keyboard.",
        image: "https://th.bing.com/th/id/OIP.x7FGhJUdVOIwESBHt44_eAHaFe?rs=1&pid=ImgDetMain"
      },
      {
        name: "HP Envy 13",
        processor: "Intel i5",
        ram: "8GB",
        storage: "256GB SSD",
        price: 85000,
        generation: "10th Gen",
        category: "Ultrabook",
        description: "Stylish ultrabook with a great display and battery life.",
        image: "https://th.bing.com/th/id/OIP.c4Ib1Ze0azWn3rKSUNpWTAHaHa?w=800&h=800&rs=1&pid=ImgDetMain"
      },
      {
        name: "HP 14s",
        processor: "Intel i3",
        ram: "4GB",
        storage: "256GB SSD",
        price: 45000,
        generation: "10th Gen",
        category: "Budget",
        description: "Affordable laptop for everyday tasks and study.",
        image: "https://m.media-amazon.com/images/I/8138vDpAgtL._SL1500_.jpg"
      }
    ]
  };
  export default Data;
  