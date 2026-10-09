export interface PlantPot {
  id: number;
  title: string;
  titleBn: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  material: string;
}

export const plantPotsData: PlantPot[] = [
  {
    id: 1,
    title: "Terracotta Round Pot",
    titleBn: "মাটির গোল টব",
    description: "Terracotta Round Pot",
    price: 1500,
    currency: "৳",
    image: "/assets/plant-pots/pot-1.jpg",
    material: "Terracotta",
  },
  {
    id: 2,
    title: "Ceramic Patterned Pot",
    titleBn: "সিরামিক ডিজাইন টব",
    description: "Ceramic Patterned Pot – with pattern design",
    price: 1500,
    currency: "৳",
    image: "/assets/plant-pots/pot-2.jpg",
    material: "Ceramic",
  },
  {
    id: 3,
    title: "Plastic Drainage Pot",
    titleBn: "প্লাস্টিক ড্রেনেজ টব",
    description: "Plastic Drainage Pot",
    price: 2500,
    currency: "৳",
    image: "/assets/plant-pots/pot-3.jpg",
    material: "Plastic",
  },
  {
    id: 4,
    title: "Metal Hanging Pot",
    titleBn: "ধাতব হ্যাংগিং টব",
    description: "Metal Hanging Pot",
    price: 100,
    currency: "৳",
    image: "/assets/plant-pots/pot-4.jpg",
    material: "Metal",
  },
  {
    id: 5,
    title: "Stone Finish Pot",
    titleBn: "পাথরের ম্যাটিভ টব",
    description: "Stone Finish Pot",
    price: 1500,
    currency: "৳",
    image: "/assets/plant-pots/pot-5.jpg",
    material: "Stone",
  },
  {
    id: 6,
    title: "Speckled Stone Pot",
    titleBn: "পাথরকণা টব",
    description: "Stone Finish Pot",
    price: 6000,
    currency: "৳",
    image: "/assets/plant-pots/pot-6.jpg",
    material: "Stone",
  },

];
