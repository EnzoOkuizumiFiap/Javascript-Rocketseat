// #F0472 2_Conhecendo os compiladores

/*
    Compilador JavaScript
    -Converte código escrito em uma versão específica do JavaScript (ECMAScript) para outra versão, permitindo usar recursos mais recentes da linguagem mesmo em ambientes que não oferecem suporte a essas funcionalidades. (Exemplo: Navegadores antigos)

    Transpilação
    -A transpilação também é um termo utilizado para se referir a compilação para versões anteriores.
    - Parser (Mapeia todos os elementos do código JS) -> Transformer (Manipula os elementos JS para gerar código compatível) -> Generator (Gera o código JS)
    

*/





// #F0473 3_Instalando o Babel

// npm install --save-dev @babel/core @babel/cli @babel/preset-env





// #F0474 4_Configurando e utilizando o Babel
class User {
    constructor({ email }) {
        this.email = email;
    }

    sendMessage() {
        console.log("Mensagem enviada para:" + this.email);
    }
}

let user = new User({ email: "enzo.okuizumi@gmail.com" });
user.sendMessage();




// #F0475 5_Criando um script para compilar

// npm run build
// Os comandos do build estão configurados no package.json, na seção "scripts". O comando "build" executa o Babel para compilar o código JavaScript.





// #F0476 6_Utilizando o arquivo compilado

// Alterando o apontamento do arquivo de JS no HTML para o arquivo compilado (dist/script.js)





// #F0477 7_Automatizando as mudanças

// Adicionando uma flag "--watch" no comando de build do package.json, o Babel irá monitorar as alterações no arquivo script.js e recompilar automaticamente para dist/script.js sempre que houver mudanças.





// #F0478 8_Configurando targets

// Adicionando a configuração de targets no arquivo .babel.config.js, o Babel irá compilar o código para ser compatível com os navegadores especificados. Exemplo: "targets": { "chrome": "58", "ie": "11" }





// #F0479 1_Conhecendo os bundlers

// Bundlers - Agrupa (empacota) diversos arquivos e suas dependências em um ou mais pacotes com o objetivo de otimizar o carregamento de páginas web.





// #F0480 2_Instalando e executando o Webpack

// Estão na pasta src