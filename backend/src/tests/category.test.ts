import request from 'supertest';
import app from '../app'; 

/* Create Catefory Test
 *
 * ------------------------- */

describe('Category Endpoints', () => {
  let testCategoryId: string; // Variable to store the ID of the created category

  it('should create a new category', async () => {
    const res = await request(app)
      .post('/api/v1/categories')
      .send({
        name: 'Test Category',
        parentCategoryId: null
      });

    expect(res.statusCode).toEqual(201); // 201 Created status code
   //  console.log(">>>>>",res.body);
    // Check the response body structure more precisely
    expect(res.body).toHaveProperty('success'); 
    expect(res.body).toHaveProperty('data');

    const categoryData = res.body.data;
    expect(categoryData).toHaveProperty('id'); // Expect a generated ID
    expect(categoryData).toHaveProperty('name', 'Test Category');
    expect(categoryData).toHaveProperty('parentCategoryId', null); // Or appropriate default

    // Store the ID for future tests
    testCategoryId = categoryData.id;
  });

});
