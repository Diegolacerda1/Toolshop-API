describe('API Testing with Cypress - Toolshop website', () => {
  it('Should create a new user', () => {
    // cy.visit('https://api.practicesoftwaretesting.com')
    // cy.request('POST', 'https://api.practicesoftwaretesting.com/users/register', {
    //     "first_name": "Johny",
    //     "last_name": "Doe",
    //     "address": "Street 1",
    //     "city": "City",
    //     "state": "State",
    //     "country": "Country",
    //     "postcode": "1234AA",
    //     "phone": "0987654321",
    //     "dob": "1970-01-01",
    //     "password": "Supersecret1@",
    //     "email": "john@doe.example"
    // }).then((response) => {
    //   expect(response.status).to.equal(201);
    // })

    cy.request({
      method: 'POST',
      url: 'https://api.practicesoftwaretesting.com/users/login',
      body: {
        email: 'customer@practicesoftwaretesting.com',
        password: 'welcome01'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('access_token');
    
      const token = response.body.access_token;
      cy.log(token);
    });
    

  })
  
})