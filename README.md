Instale as dependências do projeto:
```bash
npm i
```

E para rodar o projeto: 
```bash
npm run dev
```

Regras do envio do formulário de cadastro:

- A validação dos campos deve ser realizada pela API.
- Caso ocorra um erro com o status 422, os inputs devem ficar com borda vermelha e deve ser escrito abaixo do campo o motivo do erro do input afetado. O motivo do erro deve ser o que é retornado da API.
- Caso ocorra um erro com o status 4xx (exceto 422) ou 5xx e houver mensagem de erro “message”, está deve ser exibida ao usuário.
- Caso o erro do input seja corrigido, ao enviar o formulário, o input não deve mais ficar com borda vermelha e as mensagens devem ser apagadas.
- Caso dê sucesso no envio do formulário e tenha uma mensagem de resposta “message”, esta deve ser apresentada ao usuário.
- Quando o usuário entrar com o CEP, deve buscar o endereço pela API de endereço que consulta o CEP. Se retornar endereço, deve preencher com o resultado o “Logradouro”, “Estado” e “Cidade”. Caso de erro, não deve apresentar o erro ao usuário.
- Formulário só pode ser enviado se aceitar os termos.
- Após envio do formulário, campos devem ser "resetados" e botão de envio desabilitado até que o termo seja aceito novamente.
- Caso projeto seja feito usando NodeJS, a pasta node_modules não deve ser enviada. Caso seja enviada, serão descontados dois pontos da nota final.
- O projeto deve ser entregue no Canvas. Pode ser a URL do repositório GIT público ou upload do projeto em uma pasta compactada (.zip). Não esquece de coloca o nome dos integrantes.