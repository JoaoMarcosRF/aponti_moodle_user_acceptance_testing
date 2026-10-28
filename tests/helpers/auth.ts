import { Page, expect } from "@playwright/test";

export async function navToApontiLoginScreen(page: Page): Promise<void> {
    await page.goto("https://moodle.aponti.org.br/");
    await expect(page).toHaveTitle("Página inicial | Aponti Academy");
    await page.locator('.usermenu .login a', { hasText: 'Acessar' }).click();
    await expect(page).toHaveTitle("Acesso ao site | Aponti Academy");
}

export async function loginAponti(
    page: Page,
    cpf: string = process.env.APONTI_CPF!,
    senha: string = process.env.APONTI_SENHA!
): Promise<void> {
    if (!cpf || !senha) {
        throw new Error(
            "Credenciais não encontradas. Verifique as variáveis APONTI_CPF e APONTI_SENHA no arquivo .env"
        );
    }

    await navToApontiLoginScreen(page);
    await page.getByLabel("CPF").fill(cpf);
    await page.getByLabel("Senha").fill(senha);
    await page.getByRole("button", { name: "Acessar" }).first().click();
    await expect(page).toHaveTitle("Meus cursos | Aponti Academy");
}
