// import {test, expect } from '@playwright/test'; 
// import { request } from 'http';

// const baseURL = 'https://petstore3.swagger.io/api/v2'; 

// test.describe('PetStore API Test', () => {

//     // test('Get all pets by Status', async ({request}) => {

//     //     const response = await request.get(`${baseURL}/pets/findByStatus?status=available`); 
//     //     expect(response.ok()).toBeTruthy(); 
//     //     const pets = await response.json(); 
//     //     console.log(`Fetched${pets.lenght} available pets`); 
//     //     expect(pets.lenght).toBeGreaterThan(0); 

//     // });

//     test('POST add a new pet', async ({ request }) => {
//   const newPet = {
//     id: 3333,
//     name: "didar",
//     status: "sold"
//   };

//   const response = await request.post(`${baseURL}/pet`, {
//     headers: { 'Content-Type': 'application/json' },
//     data: newPet
//   });

//   console.log('Status code:', response.status());
//   const body = await response.json();
//   console.log('Response:', body);

//   expect(response.status()).toBe(200);
//   expect(body.name).toBe("didar");
// });




//     test('Get Pet by ID', async ({request})=> {

//         const response = await request.get(`${baseURL}/pet/987654`); 
//         expect(response.ok()).toBeTruthy(); 
//         const pet = await response.json(); 
//         expect(pet.name).toBe("buddy"); 

//     });


// }); 