import { test, expect } from "@playwright/test";

test.describe("Finalização da compra", () => {
  test.beforeEach(async ({ page }) => {
    // Dado que estou na tela de finalização da compra
    await page.goto("https://verzel-store.qa-test-verzel-store.workers.dev/");
    await page
      .getByRole("article", { name: "Camiseta Essencial" })
      .getByRole("button")
      .click({ clickCount: 3 });
    await page
      .getByRole("link", { name: "Carrinho 3 itens no carrinho" })
      .click();
    await page.getByRole("link", { name: "Finalizar compra" }).click();
  });

  test("[CT-036] Finalizar a compra com dados válidos", async ({ page }) => {
    // Quando informo um nome completo válido
    await page
      .getByRole("textbox", { name: "Nome completo" })
      .fill("Victor Ravel");

    // E informo um e-mail válido
    await page
      .getByRole("textbox", { name: "E-mail" })
      .fill("victor@gmail.com");

    // E informo um CEP válido
    await page.getByRole("textbox", { name: "CEP" }).fill("09099000");

    // E confirmo o pedido
    await page.getByRole("button", { name: "Confirmar pedido" }).click();

    // Então o sistema finaliza a compra e redireciona para a tela de pedido confirmado
    // E exibe a mensagem de confirmação do pedido
    await expect(page.getByText("Pedido confirmado")).toBeVisible();

    // E exibe o número do pedido
    await expect(
      page.getByRole("heading", { name: /Pedido VZ-/ }),
    ).toBeVisible();

    // E exibe as informações do pedido
    await expect(
      page.getByRole("region", { name: "Itens do pedido" }),
    ).toBeVisible();

    // E exibe o botão de continuar comprando
    await expect(
      page.getByRole("link", { name: "Continuar comprando" }),
    ).toBeVisible();
  });
});
