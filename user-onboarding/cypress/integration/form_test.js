
describe("User Onboarding App", () => {
   
     beforeEach(() => {
       cy.visit("http://localhost:3000");
 });
  
    const textInput = () => cy.get('input[name="name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const termsCheckbox = () => cy.get('input[name="terms"]');
    const submitButton = () => cy.get("#submitBtn");
   

    it("Sanity Check.", () => {
      expect(1 + 2).to.equal(3);
      expect(2 + 2).not.to.equal(5);
    });
  
    it("Grab, Clear, and Input & then Assertions.", () => {

        textInput()
        .should("have.value", "")
        .type("Namey McNameface")
        .should("have.value", "Namey McNameface");

        emailInput()
        .should("have.value", "")
        .type("amIdoing@thisright.com")
        .should("have.value", "amIdoing@thisright.com");

        passwordInput()
        .should("have.value", "")
        .type("password1234")
        .should("have.value", "password1234");

        termsCheckbox()
        .should('be.visible')
        .check({ force: true})
        .should('be.checked')
    });
  
    it("Check to see if a user can submit the form data.", () => {
 
      submitButton().should("be.disabled");
     
      textInput().clear();
      textInput().type("TEXT INPUT");
  
      emailInput().clear();
      emailInput().type("AUTHOR@INPUT.com");


      passwordInput().clear();
      passwordInput().type("password1234");

      termsCheckbox().uncheck({ force: true})
      termsCheckbox().check({ force: true})

      submitButton().should("not.be.disabled");
      submitButton().click();
    });
  

    it("Check for form validation if an input is left empty.", () => {  
  
    
        submitButton().should("be.disabled");
     
        textInput().type("TEXT INPUT");
        textInput().clear();
        
        emailInput().type("AUTHOR@INPUT.com");
        emailInput().clear();
        
  
        passwordInput().type("password1234");
        passwordInput().clear();
        
        termsCheckbox().check({ force: true})
        termsCheckbox().uncheck({ force: true})
        
        submitButton().should("be.disabled");
      });

  });
  