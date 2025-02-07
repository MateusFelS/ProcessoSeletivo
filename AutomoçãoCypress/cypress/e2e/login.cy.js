describe("Teste do Formulário de Cadastro - Automation Practice", () => {
  let randomEmail;

  beforeEach(() => {
    cy.on("uncaught:exception", () => false);
    cy.visit("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account");

    // Gerar um e-mail aleatório para evitar duplicação
    randomEmail = `mateus${Math.floor(Math.random() * 1000000)}@email.com`;

    cy.get("#email_create").type(randomEmail);
    cy.get("#SubmitCreate").click();
    cy.get("#account-creation_form").should("be.visible");
  });

  describe("Validações de Cadastro", () => {
    
    it("Deve preencher corretamente o formulário e enviar com sucesso", () => {
      // Preenchimento dos dados pessoais
      cy.get("#id_gender1").click();
      cy.get("#customer_firstname").type("Mateus");
      cy.get("#customer_lastname").type("Ferreira");

      // Definição da senha
      cy.get("#passwd").type("SenhaForte123");

      // Seleção de data de nascimento
      cy.get("#days").select(28);
      cy.get("#months").select(1);
      cy.get("#years").select(10);

      // Envio do formulário
      cy.get("#submitAccount").click();

      // Verificação do redirecionamento
      cy.url().should("include", "controller=my-account");
    });

    it("Não deve permitir o envio do formulário com campos obrigatórios vazios", () => {
      cy.get("#submitAccount").click();

      cy.get(".alert")
        .should("be.visible")
        .and("contain", "There are 3 errors");
    });

    it("Deve exibir erro ao digitar uma senha fraca", () => {

      // Preenchimento dos campos obrigatórios, exceto a senha
      cy.get("#customer_firstname").type("Mateus");
      cy.get("#customer_lastname").type("Ferreira");

      // Senha fraca
      cy.get("#passwd").type("123");

      // Envio do formulário
      cy.get("#submitAccount").click();

      // Verificação da mensagem de erro
      cy.get(".alert").should("contain", "passwd is invalid");
    });
  });
});
