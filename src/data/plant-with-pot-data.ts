export interface PlantWithPot {
  id: number;
  title: string;
  titleBn: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  plantType?: string;
  potType?: string;
}

export const plantWithPotData: PlantWithPot[] = [
  {
    id: 1,
    title: "Ficus Lyrata & Terracotta Pot",
    titleBn: "ফিকাস লিরেটা ও মাটির টব",
    description: "Ficus Lyrata & Terracotta Pot",
    price: 1200,
    currency: "৳",
    image: "/assets/plant-with-pot/plant-w-1.jpg",
    plantType: "Monstera",
    potType: "Terracotta",
  },
  {
    id: 2,
    title: "Snake Plant",
    titleBn: "স্নেক প্লান্ট টব",
    description: "Snake Plant with Stand",
    price: 1500,
    currency: "৳",
    image: "/assets/plant-with-pot/plant-w-2.jpg",
    plantType: "Snake Plant",
    potType: "Metal",
  },
  {
    id: 3,
    title: "Succulent Assortment",
    titleBn: "সাকুলেন্ট প্লান্ট ও মাটির টব",
    description: "Succulent assortment",
    price: 1500,
    currency: "৳",
    image: "/assets/plant-with-pot/plant-w-3.jpg",
    plantType: "Succulent",
    potType: "Stone",
  },
  {
    id: 4,
    title: "Succulent Assortment",
    titleBn: "সাকুলেন্ট ও মাটির টব",
    description: "Succulent assortment",
    price: 1200,
    currency: "৳",
    image: "/assets/plant-with-pot/plant-w-1.jpg",
    plantType: "Succulent",
    potType: "Stone",
  },
  {
    id: 5,
    title: "Bonsai",
    titleBn: "বন্সাই (প্লাস্টিক)",
    description: "Bonsai",
    price: 1500,
    currency: "৳",
    image: "/assets/plant-with-pot/plant-w-4.jpg",
    plantType: "Bonsai",
    potType: "Ceramic",
  },
  {
    id: 6,
    title: "Fern",
    titleBn: "ফার্ন টব",
    description: "Fern",
    price: 500,
    currency: "৳",
    image: "/assets/plant-with-pot/plant-w-5.jpg",
    plantType: "Fern",
    potType: "Terracotta",
  },
];
