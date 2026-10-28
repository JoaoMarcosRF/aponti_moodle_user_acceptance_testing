# 🎯 Localizadores — Playwright

Projeto de estudo desenvolvido como parte do curso de **Teste e Software** da [Aponti Academy](https://moodle.aponti.org.br/). O foco é a prática de **localizadores (selectors)** e conceitos fundamentais de automação de testes end-to-end (E2E) com [Playwright](https://playwright.dev/).

## 📚 Conceitos Estudados

- **Localizadores (Selectors)** — estratégias para encontrar elementos na página:
  - `getByRole()` — busca por papel semântico (botão, link, heading, etc.)
  - `getByLabel()` — busca por label de formulário
  - `getByText()` — busca por conteúdo de texto
  - `locator()` — seletor CSS combinado com filtros como `hasText`
- **Assertions** — validações com `expect()` (ex.: `toHaveTitle()`)
- **Page Object helpers** — funções reutilizáveis para fluxos comuns (navegação, login)
- **Testes cross-browser** — execução em Chromium, Firefox e WebKit
- **Variáveis de ambiente** — gerenciamento seguro de credenciais com `dotenv`

## 🗂️ Estrutura do Projeto

```
Localizadores/
├── tests/
│   ├── helpers/
│   │   └── auth.ts            # Funções auxiliares (navegação e login)
│   └── login.spec.ts          # Teste de login na plataforma Aponti
├── .env.example               # Modelo de variáveis de ambiente
├── .gitignore
├── package.json
├── playwright.config.ts       # Configuração do Playwright
├── tsconfig.json
└── README.md
```

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- npm (incluído com o Node.js)
- Conta de teste na plataforma [Aponti Academy](https://moodle.aponti.org.br/)

## 🚀 Instalação

1. **Clone o repositório:**

```bash
git clone <url-do-repositório>
cd Localizadores
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Instale os navegadores do Playwright:**

```bash
npx playwright install
```

4. **Configure as credenciais de teste:**

Copie o arquivo `.env.example` para `.env` e preencha com suas credenciais:

```bash
cp .env.example .env
```

```env
# .env
APONTI_CPF=seu_cpf_aqui
APONTI_SENHA=sua_senha_aqui
```

> [!CAUTION]
> O arquivo `.env` contém credenciais reais e **não deve ser commitado** no repositório. Ele já está incluído no `.gitignore`.

## 🧪 Executando os Testes

### Modo headless (padrão)

```bash
npm test
```

### Modo interativo (UI)

```bash
npm run test:ui
```

### Executar um teste específico

```bash
npx playwright test tests/login.spec.ts
```

### Visualizar o relatório HTML

```bash
npx playwright show-report
```

## 🔍 Detalhes dos Testes

### `login.spec.ts`

Testa o fluxo completo de login na plataforma Aponti Academy:

1. Acessa a página inicial (`https://moodle.aponti.org.br/`)
2. Valida o título da página
3. Clica no link "Acessar" no menu do usuário
4. Preenche CPF e Senha nos campos do formulário
5. Clica no botão "Acessar" para submeter
6. Valida o redirecionamento para a página "Meus cursos"

### `helpers/auth.ts`

Contém funções reutilizáveis que encapsulam o fluxo de autenticação:

| Função | Descrição |
|---|---|
| `navToApontiLoginScreen(page)` | Navega até a tela de login |
| `loginAponti(page, cpf?, senha?)` | Executa o login completo com credenciais |

## 🌐 Navegadores Configurados

Os testes rodam automaticamente nos três principais engines de navegador:

| Projeto | Engine |
|---------|--------|
| Chromium | Google Chrome |
| Firefox | Mozilla Firefox |
| WebKit | Apple Safari |

## 🛠️ Tecnologias

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [Playwright](https://playwright.dev/) | ^1.64.1 | Framework de testes E2E |
| [TypeScript](https://www.typescriptlang.org/) | ^7.0.2 | Linguagem tipada |
| [dotenv](https://github.com/motdotla/dotenv) | ^18.0.9 | Variáveis de ambiente |
| [Node.js](https://nodejs.org/) | 18+ | Runtime |

## 📖 Referências

- [Documentação do Playwright — Locators](https://playwright.dev/docs/locators)
- [Documentação do Playwright — Assertions](https://playwright.dev/docs/test-assertions)
- [Documentação do Playwright — Best Practices](https://playwright.dev/docs/best-practices)
- [Aponti Academy](https://moodle.aponti.org.br/) — Curso de Teste e Software

---

Desenvolvido como exercício do curso **Teste e Software** — Aponti Academy 🎓

