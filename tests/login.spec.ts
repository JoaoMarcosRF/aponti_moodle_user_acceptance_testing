import { expect, test } from "@playwright/test";
import { loginAponti } from "./helpers/auth";

test("Login na plataforma Aponti", async ({ page }) => {
    await loginAponti(page);
});
