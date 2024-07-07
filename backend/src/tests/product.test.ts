import request from 'supertest';
import app from '../app';

/* Create Catefory Test
 *
 * ------------------------- */

describe('Product Endpoints', () => {
  let testProductId: string; // Variable to store the created product's ID

  it('should create a new product', async () => {
    const newProductData = {
      name: 'Test Product',
      description: 'This is a test product',
      price: 10.99,
      image: 'http://example.com/test.jpg',
      categoryId: 1 // Make sure this category ID exists in your database
    };
    // console.log(newProductData);

    const res = await request(app)
      .post('/api/v1/products')
      .send(newProductData);

    expect(res.statusCode).toEqual(201); 
    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('data');

    const productData = res.body.data;
    expect(productData).toHaveProperty('id'); // Ensure a product ID is generated
    expect(productData).toHaveProperty('name', newProductData.name);
    expect(productData).toHaveProperty('description', newProductData.description);
    expect(productData).toHaveProperty('price', newProductData.price);
    expect(productData).toHaveProperty('image', newProductData.image);
    expect(productData).toHaveProperty('categoryId', newProductData.categoryId);

    testProductId = productData.id; // Store the ID for later tests
  });

});
