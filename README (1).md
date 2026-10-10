# Desafio Técnico QA Júnior – Verzel

Repositório com as entregas do desafio técnico de QA Júnior da Verzel (card **VZS-142** – cupom de desconto e frete grátis na Verzel Store).

**Candidato:** Victor Ravel Santos Cavalcante
· **GitHub:** [VictorYates](https://github.com/VictorYates)

---

## Sumário

1. [Onde encontrar cada entrega](#1-onde-encontrar-cada-entrega)
2. [Documentação de testes (planilha)](#2-documentação-de-testes-planilha)
3. [Evidências](#3-evidências)
4. [Automação com Playwright](#4-automação-com-playwright)
5. [Como rodar a automação](#5-como-rodar-a-automação)
6. [Utilização de IA](#6-utilização-de-ia)
7. [Pontos importantes encontrados](#7-pontos-importantes-encontrados)
8. [Agradecimento](#8-agradecimento)
9. [Bônus: testes via Postman](#9-bônus-testes-via-postman)

---

## 1. Onde encontrar cada entrega

| Entrega                                                                     | Onde encontrar                                                                                                                                        |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cenários de teste levantados a partir da documentação (Gherkin)             | Planilha, aba **Cenários** e **Casos de testes**                                                                                                      |
| Execução dos testes (manuais e exploratórios) com resultado de cada cenário | Planilha, aba **Casos de testes**                                                                                                                     |
| Report de todos os bugs encontrados                                         | Planilha, aba **Report de bugs**                                                                                                                      |
| Documento com as evidências da execução                                     | Planilha (aba **Casos de testes**) e [pasta no Google Drive](https://drive.google.com/drive/folders/11PAvMcbRqC3RZSAfBd8ZxyPnOts4AivL?usp=drive_link) |
| Automação de pelo menos 3 cenários com Playwright                           | Pasta Automação/qa-test-verzel/tests                                                                                                                  |
| README explicando como rodar a automação                                    | Este arquivo                                                                                                                                          |

---

## 2. Documentação de testes (planilha)

Toda a documentação de testes foi organizada em uma única planilha, chamada **qa-test-verzel-documentacao**.

- **Arquivo:** disponível na pasta documentacao deste repositório.
- **Link do Google Planilhas:** [Acessar planilha](https://docs.google.com/spreadsheets/d/1ACLGdhA3eYq0t5anNRwJgZzmsJ5IMv-5AxyO1vtv1aE/edit?usp=sharing)

> 💡 **Recomendação:** acesse a planilha pelo link do Google Planilhas, pois foi a plataforma utilizada na construção e é onde a formatação, os filtros e o dashboard funcionam como planejado.

### Abas da planilha

| Aba                     | Conteúdo                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Cenários**            | Módulos e cenários de teste que passaram pela bateria de testes.                                                                      |
| **Critérios de aceite** | Critérios de aceite que cada funcionalidade deveria cumprir.                                                                          |
| **Casos de testes**     | Documentação completa dos casos de teste: passos, execução, resultado em forma de status (**Aprovado** / **Reprovado**) e evidências. |
| **Report de bugs**      | Todos os bugs encontrados após a execução da bateria de testes.                                                                       |
| **Dashboard**           | Métricas relacionadas à execução dos testes.                                                                                          |
| **Lista**               | Apenas palavras-chave de apoio ao funcionamento da planilha (listas de seleção).                                                      |

---

## 3. Evidências

As evidências da execução estão anexadas na própria planilha, na aba **Casos de testes**. Para uma visualização melhor das imagens, todas também estão disponíveis na pasta do Google Drive:

🔗 [Evidências no Google Drive](https://drive.google.com/drive/folders/11PAvMcbRqC3RZSAfBd8ZxyPnOts4AivL?usp=drive_link)

---

## 4. Automação com Playwright

Os testes automatizados estão na pasta Automação/qa-test-verzel/tests e cobrem pelo menos 3 cenários do desafio.

---

## 5. Como rodar a automação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm (instalado junto com o Node.js)
- Git

### Passo 1 – Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
cd NOME_DO_REPOSITORIO
```

### 🐧 Linux (Ubuntu)

Foi o sistema operacional utilizado durante o desenvolvimento.

**1. Instalar o Node.js e o Git (caso ainda não tenha):**

```bash
sudo apt update
sudo apt install -y git curl
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

**2. Verificar a instalação:**

```bash
node -v
npm -v
```

**3. Instalar as dependências do projeto:**

```bash
npm install
```

**4. Instalar os navegadores do Playwright (e as dependências do sistema):**

```bash
npx playwright install --with-deps
```

**5. Executar os testes:**

```bash
npx playwright test
```

### 🪟 Windows

**1. Instalar o Node.js e o Git:**

- Node.js (LTS): https://nodejs.org/
- Git: https://git-scm.com/download/win

**2. Abrir o PowerShell (ou Prompt de Comando) e verificar a instalação:**

```powershell
node -v
npm -v
```

**3. Instalar as dependências do projeto:**

```powershell
npm install
```

**4. Instalar os navegadores do Playwright:**

```powershell
npx playwright install
```

**5. Executar os testes:**

```powershell
npx playwright test
```

### Comandos úteis (Linux e Windows)

```bash
# Rodar com o navegador visível
npx playwright test --headed

# Rodar com a interface interativa do Playwright
npx playwright test --ui

# Rodar um arquivo de teste específico
npx playwright test tests/NOME_DO_ARQUIVO.spec.js

# Abrir o relatório HTML da última execução
npx playwright show-report
```

---

## 6. Utilização de IA

Utilizei IA como apoio em três frentes:

- **Criação deste README.**
- **Estruturação da planilha de documentação.** Eu não tinha o costume de usar planilhas como documentação de testes. Já havia utilizado Google Docs/Word, ClickUp e Trello para gerar casos de teste, mas optei por planilhas para aprender algo novo e por acreditar que facilitariam a visualização das informações. A IA me ajudou a organizar a estrutura, as abas e o funcionamento da planilha.
- **Dúvidas pontuais sobre o Playwright**, durante a construção da automação.

---

## 7. Pontos importantes encontrados

### 7.1 Itens que não consegui testar

Alguns pontos não puderam ser validados, seja por limitação do sistema, seja por falta de uma forma de testá-los que eu tenha identificado:

- **CA11 – Todos os valores são arredondados para 2 casas decimais.**
  O sistema não apresentou cenários em que o arredondamento fosse necessário, então não consegui confirmar se o sistema realmente arredonda os valores para 2 casas decimais.

- **Código de erro `ITEM_INVALIDO` – "Um item não é um objeto com `produtoId` e `quantidade`".**
  Não consegui obter esse código de erro em nenhum cenário. Não sei se foi falha de interpretação minha ou se realmente não existe um caso que o produza.

### 7.2 Bugs encontrados

Foram encontrados **3 bugs**, todos detalhados na aba **Report de bugs** da planilha:

1. **(2 bugs)** A API não valida a quantidade máxima de unidades permitida por item.
2. **(1 bug)** Quando o subtotal é de **R$ 200**, o frete está sendo cobrado.

---

## 8. Agradecimento

Agradeço à Verzel pela oportunidade de participar deste desafio técnico. Foi uma experiência muito enriquecedora: me permitiu aplicar fundamentos de QA em um cenário próximo do real, explorar o Gherkin e o Playwright e aprender novas formas de organizar a documentação de testes. Fico à disposição para conversar sobre qualquer ponto da minha entrega e espero ter a chance de contribuir com o time.

— **Victor Cavalcante**

---

## 9. Bônus: testes via Postman

Além da automação com Playwright, os testes realizados via **Postman** também estão presentes neste repositório, na pasta postman.

### Como importar os testes no Postman

1. Instale e abra o [Postman](https://www.postman.com/downloads/) (disponível para Linux e Windows).
2. No canto superior esquerdo, clique em **Import**.
3. Arraste o(s) arquivo(s) `.json` da pasta [`postman/`](./postman) para a janela de importação, ou clique em **Files** e selecione-os.
4. Confirme clicando em **Import**. A collection aparecerá na aba **Collections**.
5. Se houver um arquivo de **environment** (variáveis de ambiente), importe-o da mesma forma, depois selecione-o no canto superior direito, no seletor de ambientes.
6. Para executar todas as requisições de uma vez, clique na collection, depois em **Run** (ou **Run collection**) e, por fim, em **Run**. Também é possível rodar cada requisição individualmente, clicando em **Send**.
