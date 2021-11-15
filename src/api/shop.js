import axios from 'axios';

const API_URL = 'https://random-data-api.com/api/food/random_food?size=30';
const IMAGE_NAMES = [
  '6123150777.webp',
  '6126039472.webp',
  '6126040354.webp',
  '6128597660.webp',
  '6134992334.webp',
  '6136170572.webp',
  '6136172483.webp',
  '6140906765.webp',
  '6142673815.webp',
  '6142681673.webp',
  '6142683276.webp',
  '6148226736.webp',
];
const makeRandomPrice = () => {
  return Math.floor(Math.random() * (10000 - 1000) + 1000) / 100;
};

export default {
  getProductsData: async () => {
    const imagesAmount = IMAGE_NAMES.length;
    try {
      const response = await axios.get(API_URL);
      const products = response.data.map((item, index) => {
        item.imgName = IMAGE_NAMES[index % imagesAmount];
        item.price = makeRandomPrice();
        return item;
      });
      return products;
    } catch (error) {
      console.log(error.message);
    }
  },
};
