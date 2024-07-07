import { addProduct } from '../api/v1/repositories/productRepository';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query: string): Promise<string> => {
  return new Promise(resolve => rl.question(query, resolve));
};

const createProductCLI = async () => {
  const name = await question('Product Name: ');
  const description = await question('Product Description: ');
  const price = parseFloat(await question('Product Price: '));
  const image = await question('Product Image URL: ');
  const categoryId = parseInt(await question('Category ID: '), 10);

  try {
    const product = await addProduct({ name, description, price, image, categoryId });
    console.log('Product created successfully:', product);
  } catch (error) {
    console.error('Failed to create product:', error);
  } finally {
    rl.close();
  }
};

createProductCLI();
