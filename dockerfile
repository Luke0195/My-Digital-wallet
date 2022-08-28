# Imagem de Origem
FROM node:16.16-alpine

# Configurando a linguagem
ENV LC_ALL = C.UTF-8

#Diretório de Trabalho
WORKDIR /app

#Copiando tudo para pasta app
COPY . .

#Instalando as dependenciâs da aplicação
RUN npm install

# Libera a porta do container para execução
EXPOSE 5173

# Inicia a aplicação
CMD npm run dev
