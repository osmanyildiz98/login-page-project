describe("Başarılı Form Testi", () => {
  it("Doğru bilgilerle formu submit edebiliyorum", () => {
    cy.visit("http://localhost:5173/");
    // Formu doldur
    cy.get("#email").type("erdem.guntay@wit.com.tr");
    cy.get("#password").type("9fxIH0GXesEwH_I");
    cy.get("#terms").check();
    cy.get("#submit-button").should("not.be.disabled"); // Buton aktif mi?

    // Formu gönder
    cy.get("#submit-button").click();
    cy.get("#welcome-message").should("contain.text", "Welcome!");
  });
});

describe("Hatalı Form Testi", () => {
  it("Yanlış email ile hata mesajı gösteriliyor ve buton disabled", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#email").type("yanlisemail");
    cy.get("#password").type("12345");
    cy.get("#terms").check();

    cy.get("#email-error").should("be.visible");
    cy.get("#submit-button").should("be.disabled");
  });

  it("Email ve şifre yanlış olduğunda iki hata mesajı görünüyor", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#email").type("yanlisemail");
    cy.get("#password").type("1234");
    cy.get("#terms").check();

    cy.get("#email-error").should("be.visible");
    cy.get("#password-error").should("be.visible");
    cy.get("#submit-button").should("be.disabled");
  });

  it("Kurallar kabul edilmediğinde buton disabled", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#email").type("erdem.guntay@wit.com.tr");
    cy.get("#password").type("9fxIH0GXesEwH_I");
    cy.get("#submit-button").should("be.disabled");
  });
});
