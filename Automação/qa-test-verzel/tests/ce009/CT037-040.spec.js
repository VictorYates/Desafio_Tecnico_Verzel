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

  test("[CT-037] Finalizar as compras com nome inválido (ausente)", async ({
    page,
  }) => {
    // Quando deixo o nome vazio e informo os demais campos corretamente
    await page
      .getByRole("textbox", { name: "E-mail" })
      .fill("victor@gmail.com");
    await page.getByRole("textbox", { name: "CEP" }).fill("09099000");

    // E confirmo o pedido
    await page.getByRole("button", { name: "Confirmar pedido" }).click();

    // Então o sistema não finaliza a compra
    await expect(page.getByText("Pedido confirmado")).toHaveCount(0);

    // E exibe a mensagem de erro
    await expect(page.getByText("Informe o nome completo.")).toBeVisible();
  });

  test("[CT-038] Finalizar as compras com e-mail inválido", async ({
    page,
  }) => {
    // Quando deixo o e-mail vazio e informo os demais campos corretamente
    await page
      .getByRole("textbox", { name: "Nome completo" })
      .fill("Victor Ravel");
    await page.getByRole("textbox", { name: "CEP" }).fill("09099000");

    // E confirmo o pedido
    await page.getByRole("button", { name: "Confirmar pedido" }).click();

    // Então o sistema não finaliza a compra
    await expect(page.getByText("Pedido confirmado")).toHaveCount(0);

    // E exibe a mensagem de erro
    await expect(page.getByText("Informe o e-mail.")).toBeVisible();
  });

  test("[CT-039] Finalizar as compras com CEP inválido", async ({ page }) => {
    // Quando deixo o CEP vazio e informo os demais campos corretamente
    await page
      .getByRole("textbox", { name: "Nome completo" })
      .fill("Victor Ravel");
    await page
      .getByRole("textbox", { name: "E-mail" })
      .fill("victor@gmail.com");

    // E confirmo o pedido
    await page.getByRole("button", { name: "Confirmar pedido" }).click();

    // Então o sistema não finaliza a compra
    await expect(page.getByText("Pedido confirmado")).toHaveCount(0);

    // E exibe a mensagem de erro
    await expect(page.getByText("Informe o CEP.")).toBeVisible();
  });

  test("[CT-040] Finalizar as compras com nome sem sobrenome", async ({
    page,
  }) => {
    // Quando informo apenas o nome, sem sobrenome
    await page.getByRole("textbox", { name: "Nome completo" }).fill("Victor");

    // E informo os demais campos corretamente
    await page
      .getByRole("textbox", { name: "E-mail" })
      .fill("victor@gmail.com");
    await page.getByRole("textbox", { name: "CEP" }).fill("09099000");

    // E confirmo o pedido
    await page.getByRole("button", { name: "Confirmar pedido" }).click();

    // Então o sistema não finaliza a compra
    await expect(page.getByText("Pedido confirmado")).toHaveCount(0);

    // E exibe a mensagem de erro
    await expect(page.getByText("Informe nome e sobrenome.")).toBeVisible();
  });
});
