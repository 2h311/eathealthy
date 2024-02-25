import PexelsAshImage from "../../assets/images/pexels-ash-376464.jpg";
import PexelsJohnImage from "../../assets/images/pexels-john-finkelstein-1630588.jpg";
import PexelsMonicoreImage from "../../assets/images/pexels-monicore-1391487.jpg";

export const navbarLinks = [
  { href: "", link: "home" },
  { href: "", link: "about us" },
  { href: "", link: "forum" },
  { href: "", link: "blog" },
  { href: "", link: "products" },
  { href: "", link: "contact us" },
];

export const footerlinks = [
  { href: "", text: "home" },
  { href: "", text: "contact us" },
  { href: "", text: "about us" },
  { href: "", text: "blog" },
  { href: "", text: "forum" },
  { href: "", text: "products" },
];

export const recentPosts = [
  {
    isARecentPost: true,
    title: "Health Benefit of Vitamin A",
    description:
      "Vitamin A is an essential nutrient that supports healthy skin and maintains the immune system. It’s also known as retinol and can be found in foods like...",
    likes: 25,
    link: "",
    readingTime: "5 mins read",
    postImage: PexelsAshImage,
  },
  {
    isARecentPost: true,
    title: "Health Benefit of Vitamin A",
    description:
      "Vitamin A is an essential nutrient that supports healthy skin and maintains the immune system. It’s also known as retinol and can be found in foods like...",
    likes: 12,
    link: "",
    readingTime: "3.5 mins read",
    postImage: PexelsJohnImage,
  },
  {
    isARecentPost: false,
    title: "Health Benefit of Vitamin A",
    description:
      "Vitamin A is an essential nutrient that supports healthy skin and maintains the immune system. It’s also known as retinol and can be found in foods like...",
    likes: 22,
    link: "",
    readingTime: "6 mins read",
    postImage: PexelsMonicoreImage,
  },
];
