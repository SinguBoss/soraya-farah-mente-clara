# Soraya Farah — Programa Mente Clara

Site institucional de Soraya Farah com apresentação do Programa Mente Clara,
formatos de prática, experiências, Yoga & Wellness Experience e Zenmind.

Este repositório está preparado para continuidade por Pedro Roberto e pelo
Claude Code. O objetivo do handoff é preservar o conteúdo e o visual aprovados,
permitindo publicar o site em um domínio próprio registrado no Registro.br.

## Estado da entrega

- página única responsiva em português;
- menu mobile e navegação por âncoras;
- galeria Zenmind automática no desktop e no celular;
- arraste manual, pausa ao toque e instrução visível no celular;
- fotos da galeria exibidas inteiras, sem cortar bordas originais;
- logo Yoga & Wellness em PNG transparente limpo;
- metadados Open Graph e Twitter com imagem absoluta para WhatsApp;
- lint, build e teste de HTML executáveis por CI.

## Requisitos

- Node.js `>=22.13.0`;
- npm;
- Linux para os scripts de build, que usam `flock` e GNU `timeout`.

## Início rápido

```bash
git clone --branch claude-ready-2026-08-20 \
  https://github.com/SinguBoss/soraya-farah-mente-clara.git
cd soraya-farah-mente-clara
cp .env.example .env.local
npm ci
npm run dev
```

Abrir o endereço local informado pelo Vite. Antes da publicação, trocar o valor
de `NEXT_PUBLIC_SITE_URL` em `.env.local` pela URL pública definitiva.

## Validação obrigatória

Executar antes de qualquer deploy:

```bash
npm run lint
npm test
```

`npm test` realiza o build, valida o Worker gerado e confirma no HTML:

- título público correto;
- imagem Open Graph absoluta;
- instrução mobile da galeria;
- logo Yoga & Wellness corrigida;
- ausência de avisos de conteúdo provisório.

O artefato de produção é criado em `dist/`.

## Variável de ambiente

| Variável | Obrigatória em produção | Exemplo |
|---|---:|---|
| `NEXT_PUBLIC_SITE_URL` | Sim | `https://www.seudominio.com.br` |

Use apenas a origem pública, sem caminho adicional. O código utiliza essa URL
para canonical, `og:url`, `og:image` e Twitter Card. Enquanto ela não estiver
configurada, a imagem social usa uma URL absoluta do próprio repositório como
fallback, evitando uma prévia vazia no WhatsApp.

## Publicação e domínio do Registro.br

1. Criar o projeto no provedor escolhido e conectar este repositório/branch.
2. Configurar `NEXT_PUBLIC_SITE_URL` com a URL temporária do provedor.
3. Rodar o build e conferir desktop e celular.
4. Adicionar o domínio personalizado no provedor.
5. Copiar exatamente os registros DNS fornecidos pelo provedor para o
   Registro.br; não inventar IP, CNAME ou valor de verificação.
6. Aguardar o HTTPS ficar ativo.
7. Atualizar `NEXT_PUBLIC_SITE_URL` para o domínio final e publicar novamente.
8. Compartilhar a URL no WhatsApp e conferir título, descrição e imagem.

Se o WhatsApp mantiver uma prévia antiga, testar primeiro no
[Sharing Debugger da Meta](https://developers.facebook.com/tools/debug/) e
solicitar uma nova captura da URL.

## Estrutura principal

| Caminho | Função |
|---|---|
| `app/page.tsx` | Conteúdo e links da página |
| `app/globals.css` | Layout, identidade visual e responsividade |
| `app/SiteClient.tsx` | Menu, animações, galeria e contagem regressiva |
| `app/layout.tsx` | SEO, Open Graph, Twitter Card e ícones |
| `public/og-soraya-farah.jpg` | Imagem 1200×630 para WhatsApp e redes sociais |
| `public/assets/` | Fotos e logos versionadas |
| `tests/rendered-html.test.mjs` | Teste do HTML final |
| `.github/workflows/ci.yml` | Validação automática no GitHub |

## Regras para futuras alterações

- Não substituir a copy sem aprovação da Soraya/gestão do projeto.
- Manter os links de Instagram e Sympla em nova aba.
- Preservar no celular: largura sem vazamento horizontal, galeria menor,
  animação automática, arraste manual e indicação “arraste para o lado”.
- Respeitar `prefers-reduced-motion`: nesse modo a galeria fica manual.
- Não voltar a usar `object-fit: cover` nas fotos da galeria de produtos.
- Não reutilizar o arquivo corrompido de logo em `assets/v10/`; a versão válida
  está em `assets/v11/yoga-wellness-logo-clean.png`.
- Nunca versionar `.env.local`, tokens ou credenciais.

## Prompt de handoff para o Claude Code

```text
Use a branch claude-ready-2026-08-20 deste repositório como fonte de verdade.
Não redesenhe nem reescreva o site. Primeiro execute npm ci, npm run lint e
npm test. Configure NEXT_PUBLIC_SITE_URL com a URL pública. Faça o deploy no
provedor acordado, conecte o domínio do Registro.br usando somente os registros
DNS fornecidos pelo provedor e valide desktop, mobile, console do navegador e a
prévia Open Graph/WhatsApp. Preserve integralmente os comportamentos mobile e a
logo em public/assets/v11/yoga-wellness-logo-clean.png.
```
