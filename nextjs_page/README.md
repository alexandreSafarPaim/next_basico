# Como criar e iniciar uma nova aplicação Next.js

## Passo 1: Instalar o Node.js

Antes de criar uma aplicação Next.js, certifique-se de que o Node.js está instalado no seu sistema. Você pode baixar a versão mais recente do Node.js em [nodejs.org](https://nodejs.org/).

## Passo 2: Criar uma nova aplicação Next.js

Abra o seu terminal e navegue até a pasta onde deseja criar a nova aplicação. Em seguida, execute o seguinte comando para criar um novo projeto Next.js:

Usando npm:
```shell
npx create-next-app nome-da-sua-aplicacao
``` 
Substitua `nome-da-sua-aplicacao` pelo nome que você deseja dar à sua aplicação.

O `create-next-app` irá criar uma estrutura de projeto padrão para você, incluindo todas as dependências necessárias.

Várias opções de configuração serão exibidas durante o processo de criação. Você pode escolher entre as seguintes opções:

- **TypeScript** - Yes
- **ESLint** - Yes
- **Tailwind CSS** - Yes
- **src/ directory** - Yes
- **App Routes** - No -> Esta opção fará com que o Next.js crie a pasta `pages`
- **customize the default import alias** - No


## Passo 3: Entrar na pasta do projeto

Depois que o comando for concluído, navegue para a pasta da sua aplicação usando o comando `cd`:

```shell
cd nome-da-sua-aplicacao
```
## Passo 4: Executar a aplicação

Agora que você está dentro da pasta do projeto, você pode rodar a aplicação Next.js usando os seguintes comandos:

Usando npm:
```shell
npm run dev
```
Usando yarn:
```shell
yarn dev
```
Isso iniciará o servidor de desenvolvimento e sua aplicação estará disponível em `http://localhost:3000`. Você pode acessar esse endereço no seu navegador para visualizar a aplicação em execução.

## Passo 5: Instalar dependências (se necessário)

Se você já tiver iniciado o projeto anteriormente ou se clonou um repositório existente, é importante garantir que todas as dependências estejam instaladas. Para fazer isso, execute um dos seguintes comandos, dependendo do gerenciador de pacotes que você está usando:

Usando npm:
```shell
npm install
```
Usando yarn:
```shell
yarn install
```
Isso garantirá que todas as dependências listadas no arquivo `package.json` sejam instaladas corretamente.

Agora você deve ter uma nova aplicação Next.js em execução e pronta para ser desenvolvida! Você pode começar a editar o código-fonte dentro da pasta do projeto e ver as alterações automaticamente refletidas no servidor de desenvolvimento.

<br><br>

# Configurando Variáveis de Amyiente no Next.js

As variáveis de amyiente são uma parte essencial de qualquer aplicação, permitindo que você armazene informações sensíveis, como chaves de API ou configurações específicas do amyiente, fora do código-fonte e do controle de versão. No Next.js, configurar variáveis de amyiente é simples e flexível.

Aqui está um guia passo a passo sobre como configurar variáveis de amyiente em um projeto Next.js:

## **Passo 1: Crie um arquivo `.env.local`**

No diretório raiz do seu projeto Next.js, crie um arquivo chamado `.env.local`. Este arquivo será usado para armazenar suas variáveis de amyiente locais.

```shell
touch .env.local
```

Claro, aqui está o texto a partir do "Passo 2: Defina suas variáveis de amyiente":

markdown
Copy code
## **Passo 2: Defina suas variáveis de amyiente**

Dentro do arquivo `.env.local`, você pode definir suas variáveis de amyiente da seguinte maneira:

```shell
API_KEY=chave-de-api-secreta
DATABASE_URL=url-do-banco-de-dados
```
Substitua chave-de-api-secreta e url-do-banco-de-dados pelas suas próprias variáveis de amyiente e valores.

## **Passo 3: Acesse as variáveis de amyiente no código**

Agora, você pode acessar as variáveis de amyiente no código do seu projeto Next.js usando `process.env`. Por exemplo, para acessar a variável `API_KEY`, você pode fazer o seguinte:

```shell
const apiKey = process.env.API_KEY;
```

Certifique-se de que as variáveis de amyiente estejam definidas no arquivo `.env.local` para que possam ser acessadas no seu código.

## **Passo 4: Reinicie o servidor**

Após definir ou atualizar suas variáveis de amyiente, é importante reiniciar o servidor Next.js para que as alterações tenham efeito.

Agora você configurou com sucesso variáveis de amyiente em seu projeto Next.js, tornando-o mais seguro e flexível para diferentes amyientes de desenvolvimento, teste e produção.
