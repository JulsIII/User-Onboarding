// write tests here
describe("User Onboarding App", () => {
    // here go our tests
     beforeEach(() => {
      // arbitrary code you want running before tests start
       cy.visit("http://localhost:3000");
 });
  
    const textInput = () => cy.get('input[name="name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const termsCheckbox = () => cy.get('input[name="terms"]');
    const submitButton = () => cy.get("#submitBtn");
    //const cancelButton = () => cy.get("#cancelBtn");
  
    // here go our tests
    it("test to make sure tests work", () => {
      // false positive
      // 'expect' is an assertion
      // there can be many assertions per test
      // inside the 'it' statement (test) many assertions may be
      // logically grouped together
      expect(1 + 2).to.equal(3);
      expect(2 + 2).not.to.equal(5);
    });
  
    // it("the proper elements are showing on the screeen", () => {
    //   textInput().should("exist");
    //   cy.get('input[name="foobar"]').should("not.exist");
    //   submitButton().should("exist");
    //   //cancelButton().should("exist");
    //   //cy.contains("Submit Quote");
    //   //cy.contains(/submit quote/i);
    // });
  
    it("Grab, Clear, and Input & then Assertions", () => {

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
  
    it("Check to see if a user can submit the form data", () => {
 
      submitButton().should("be.disabled");
     
      textInput().clear();
      textInput().type("TEXT INPUT");
  
      emailInput().clear();
      emailInput().type("AUTHOR@INPUT.com");


      passwordInput().clear();
      passwordInput().type("password1234");

      termsCheckbox().check({ force: false})
      termsCheckbox().check({ force: true})

      submitButton().should("not.be.disabled");
      submitButton().click();
   
    });
  

    // it("Check for form validation if an input is left empty", () => {  //fill it out and then remove it again to make validation warning pop up
    //     // set up, sanity checks to make sure initial state is legit
    //     // act (like typing or clicking - mimicking user input)
    //     // assert that the action has the effect we expect
    
    //     //submit quote is disabled.
    //     submitButton().should("be.disabled");
    //     // put text into text input
    //     textInput().type("TEXT INPUT");
    //     // the submit button still disabled.
    //     submitButton().should("be.disabled");
    //     // clear text input
    //     textInput().clear();
    //     // put text into author input
    //     emailInput().type("AUTHOR@INPUT.com");
    //     // the submit button still disabled.
    //     submitButton().should("be.disabled");
    //     // both inputs are filled
    //     textInput().type("TEXT INPUT");
    //     // submit button is working.
    //     submitButton().should("not.be.disabled");
    
    //     // "be.disabled"
    //     // .clear()

    //   });





    // it("can cancel a new quote", () => {
    //   // should('have.value', '') - input is empty
    //   // .click()
  
    //   textInput().type("test");
    //   emailInput().type("test@test.com");
    //   //cancelButton().trigger("click");
    //   // cancelButton().click();
    //   (textInput() && emailInput()).should("have.value", "");
    // });
  
    // it("can submit a new quote", () => {
    //   // arrange/setup: that text is not in the DOM
    //   // act: create a quote 'have fun (Rhiannon)'
    //   // assert: that the have fun is in the DOM
    //   cy.contains("have fun (Rhiannon)").should("not.exist");
    //   textInput().type("name");
    //   emailInput().type("Rhiannon@asifdh.com");
    //   submitButton().click();
    //   cy.contains("have fun (Rhiannon)").should("exist");
    // });



  });
  