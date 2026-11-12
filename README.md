# Site do Clube de Ciências Ouro Verde — passo a passo

O site é um dos produtos do Clube de Ciências Ouro Verde, do Colégio Estadual do Campo Professor Eugênio de Almeida (Fluviópolis, São Mateus do Sul – PR). Ele é usado como instrumento pedagógico para que estudantes do Ensino Fundamental aprendam as bases de programação em HTML e CSS, pesquisem bibliografia sobre a erva-mate e divulguem seu trabalho científico.

## Estrutura do site

```
Início (index.html)                 ← menu fixo: Início e Notícias
├── História                         paginas/historia.html
├── Cultura                          paginas/cultura.html
├── Produção de Erva-Mate            paginas/producao-erva-mate.html
│   ├── Produção de Mudas            paginas/producao-mudas.html
│   └── Formas de Cultivo            paginas/formas-cultivo.html
├── Receitas                         paginas/receitas.html
├── Projetos do Clube de Ciências    paginas/projetos.html
└── Notícias                         paginas/noticias.html
```

## Estrutura de pastas

```
Site-do-Clube-passo-a-passo/
├── index.html            ← página inicial (fica na raiz)
├── README.md             ← este arquivo
├── css/
│   ├── style.css         ← cores, menu, cartões, rodapé
│   ├── hero.css          ← banner (cabeçalho)
│   ├── paginas.css       ← páginas internas, cartões e janelas
│   └── responsivo.css    ← ajustes para celular e tablet
├── js/
│   └── cartoes.js        ← faz os cartões abrirem numa janela
├── imagens/
│   ├── logos/            ← logos e imagens dos cartões do Início
│   └── eduardo/          ← fotos das receitas
├── paginas/              ← todas as outras páginas
└── templates/
    └── pagina-modelo.html ← modelo para criar uma página nova
```

## Como o conteúdo é organizado

Cada assunto é um **cartão**. O cartão mostra o título e o começo do texto; ao clicar em **"Ler mais"**, o texto completo abre numa janela (igual às receitas). Isso deixa as páginas curtas e fáceis de ler no celular.

Os modelos de cartão estão comentados no fim de cada página. Para criar um assunto novo, copie o modelo para dentro da `<div class="grade-topicos">`.

## Regras importantes

1. **Caminhos dentro da pasta `paginas`:** todo caminho começa com `../` (volta uma pasta).
   - No `index.html`: `css/style.css`, `paginas/historia.html`
   - Nas páginas da pasta `paginas`: `../css/style.css`, `../index.html`
2. **Nomes de arquivos:** sem acento, sem espaço, com letras minúsculas e palavras separadas por hífen.
   Exemplo: `producao-mudas.html` ✅ e `Produção de Mudas.html` ❌
3. **Não altere o banner, o menu nem o rodapé** de uma página só. Eles precisam ser iguais em todas as páginas.
4. **Escreva o conteúdo** somente entre as marcas `COMEÇAR O CONTEÚDO AQUI` e `TERMINAR O CONTEÚDO AQUI`. Use os modelos de cartões que estão comentados no fim de cada página.
5. **Toda tag aberta precisa ser fechada**, na ordem certa. Cada arquivo tem um único `<!DOCTYPE html>` e um único `<html>`.
6. **Todo texto precisa ter fonte**, por exemplo: (Wendling; Santin, 2015).

## Como criar uma página nova

1. Copie `templates/pagina-modelo.html` para dentro da pasta `paginas`.
2. Renomeie seguindo a regra 2.
3. Troque "NOME DA PÁGINA" pelo título e escreva o conteúdo.
4. Crie um cartão para ela no `index.html` (ou na página de entrada da seção, como `producao-erva-mate.html`).
5. Ajuste a trilha ("Início › …") no topo da página.

## Checklist antes de enviar ao GitHub

- [ ] Abri a página no navegador e o banner apareceu certo
- [ ] Cliquei nos cartões e no menu e tudo abriu
- [ ] Os botões "Ler mais" abrem a janela
- [ ] As imagens aparecem
- [ ] O console do navegador (tecla F12, aba "Console") está sem erros vermelhos
- [ ] Revisei o texto e citei as fontes

## Ferramentas úteis

- Console do navegador (F12): mostra arquivos não encontrados e erros de JavaScript.
- [Validador do W3C](https://validator.w3.org): mostra tags não fechadas e outros erros de HTML.
