import PexelsAshImage from "../../assets/images/pexels-ash-376464.jpg";
import PexelsJohnImage from "../../assets/images/pexels-john-finkelstein-1630588.jpg";
import PexelsMonicoreImage from "../../assets/images/pexels-monicore-1391487.jpg";

const navbarLinks = [
  { href: "", link: "home" },
  { href: "", link: "about us" },
  { href: "", link: "forum" },
  { href: "", link: "blog" },
  { href: "", link: "products" },
  { href: "", link: "contact us" },
];

const footerlinks = [
  { href: "", text: "home" },
  { href: "", text: "contact us" },
  { href: "", text: "about us" },
  { href: "", text: "blog" },
  { href: "", text: "forum" },
  { href: "", text: "products" },
];

const recentPosts = [
  {
    isARecentPost: true,
    title: "Health Benefit of Vitamin A",
    description:
      "Vitamin A is an essential nutrient that supports healthy skin and maintains the immune system. It’s also known as retinol and can be found in foods like...",
    likes: 25,
    link: "",
    readingTime: "5 mins",
    postImage: PexelsAshImage,
  },
  {
    isARecentPost: true,
    title: "Tapping the Healing Power of Food",
    description:
      "IFT's Anna Rosales reports back on the inaugural Food is Medicine Summit, a key milestone in the national strategy to end hunger and reduce chronic disease by 2030...",
    likes: 12,
    link: "",
    readingTime: "3.5 mins",
    postImage: PexelsJohnImage,
  },
  {
    isARecentPost: false,
    title: "Good Gut Feelings",
    description:
      "This column considers how current research continues to uncover specific gut health benefits of ingredients, including HMOs, prebiotics, probiotics, and postbiotics.",
    likes: 20,
    link: "",
    readingTime: "12 mins",
    postImage: PexelsMonicoreImage,
  },
];

const testimonialData = [
  {
    text: `It really saves me time and effort. Diet consultancy is exactly
what my wife and i have been laccking. It's the perfect solution
for our health routine. Thank You!`,
    name: "David Palmer",
  },
  {
    text: `Diet consultancy saved my business. I will refer everyone I know. Diet consultancy is the real deal! Diet consultancy saved my business`,
    name: "Jack Bauer",
  },
  {
    text: `Absolutely wonderful! Diet consultancy is both attractive and highly adaptable. Diet consultancy impressed me on multiple levels. The service was excellent.`,
    name: "Chloe Obrian",
  },
];

const ratingTextContent = [
  { number: "300", text: "clients", htmlCharChode: "43" },
  { number: "90", text: "service guarantee", htmlCharChode: "37" },
  { number: "10", text: "dieticians", htmlCharChode: "43" },
];

export {
  navbarLinks,
  footerlinks,
  recentPosts,
  testimonialData,
  ratingTextContent,
};
