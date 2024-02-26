// Importando as bibliotecas necessárias
require("dotenv").config(); // Configuração para carregar variáveis de ambiente do arquivo .env
const express = require("express"); // Express para criação de servidores web
const path = require("path"); // Path para manipulação de caminhos de arquivos
const cors = require("cors"); // Cors para habilitar o acesso de recursos entre diferentes origens

const port = process.env.PORT; // Obtendo a porta do servidor do ambiente e armazenando-a na variável 'port'

const app = express(); // Criando uma instância do servidor Express

// Configurando o servidor para lidar com requisições JSON e formulários
app.use(express.json()); // Permitindo o uso de JSON nas requisições
app.use(express.urlencoded({ extended: false })); // Permitindo o uso de formulários com codificação urlencoded

// Iniciando o servidor e escutando na porta especificada
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`); // Exibindo uma mensagem indicando que o servidor está rodando
});
