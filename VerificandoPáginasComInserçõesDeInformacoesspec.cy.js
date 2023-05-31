describe("Verificando a página de login", () => {
  const email = "vingrenpaula@hotmail.com";
  const senha = "03gu04";
  beforeEach(() => {
    //definindo a resolução que o cypress vai abrir o navegador de teste
    cy.viewport(1280, 720);
    //definindo a url padrão para os testes
    cy.visit("https://www.agorabrasil.org.br/login");
  });
  it.only("Inserindo informações válidas(Login + Senha) e verificando o checkbox", () => {
    cy.get("#Email").invoke(email);
    cy.get("#Password").invoke(senha);
    cy.get(".btn").click({ force: true });
  });
});
