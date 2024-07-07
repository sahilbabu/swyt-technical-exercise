import axios from 'axios';
import readline from 'readline';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.API_URL || 'http://localhost:3000/api/v1/products';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query: string): Promise<string> => {
  return new Promise(resolve => rl.question(query, resolve));
};

const createProduct = async () => {
  try {
    const name = await question('Product name: ');
    const description = await question('Product description: ');
    const price = await question('Product price: ');
    const image = await question('Product image URL: ');
    const categoryId = await question('Category ID: ');

    const product = {
      name,
      description,
      price: parseFloat(price),
      image,
      categoryId: parseInt(categoryId)
    };

    const response = await axios.post(API_URL, product);
    console.log('Product created successfully:', response.data);
  } catch (error) {
    console.log(error);
    //console.error('Error creating product:', error.response ? error.response.data : error.message);
  } finally {
    rl.close();
  }
};

createProduct();
