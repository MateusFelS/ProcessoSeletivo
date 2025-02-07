describe("Teste do Formulário de Cadastro - Automation Practice", () => {
  
  beforeEach(() => {
    cy.on("uncaught:exception", () => false);
    cy.visit("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account");
    
    // Iniciar o cadastro inserindo um e-mail válido e clicando no botão "Create an account"
    cy.get("#email_create").type("mateus4@email.com");
    cy.get("#SubmitCreate").click();
    
    // Aguarda o carregamento da página de criação de conta
    cy.get("#account-creation_form").should("be.visible");
  });

  // it("Deve preencher corretamente o formulário e enviar", () => {
  //   cy.get('#id_gender1').click()
  //   cy.get("#customer_firstname").type("Mateus");
  //   cy.get("#customer_lastname").type("Ferreira");
  //   cy.get("#passwd").type("SenhaForte123");

  //   cy.get('#days').select(28)
  //   cy.get('#months').select(1)
  //   cy.get('#years').select(10)

  //   cy.get("#submitAccount").click();


  //   cy.url().should("include", "controller=my-account");
  // });

  // it("Não deve permitir envio com campos obrigatórios vazios", () => {
  //   cy.get("#submitAccount").click();

  //   cy.get(".alert").should("be.visible")
  //     .and("contain", "There are 3 errors");
  // });

  // it("Deve exibir erro ao digitar senha fraca", () => {
  //   cy.get("#customer_firstname").type("Mateus");
  //   cy.get("#customer_lastname").type("Ferreira");
  //   cy.get("#passwd").type("123");

  //   cy.get("#submitAccount").click();

  //   cy.get(".alert").should("contain", "passwd is invalid");
  // });

});
