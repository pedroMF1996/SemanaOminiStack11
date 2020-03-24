# Semana OminiStack 11

# Back-end:
    Regras de negócio;
    Conexão com o banco de dados;
    Envio de email;
    Comunicação com webservices;
    Autenticação do usuário;
    Criptografia e segurança;

# Front-end:
    web
    mobile
    externos

# Abordagem tradicional:
   A cada requisição, o servidor retorna o conteúdo completo da página, contendo todo o HTML e CSS.
   Essa abordagem limita o front-end para o browser já que o aplicativo mobile ou os serviços externos não vão conseguir interpretar o HTML.

#   Abordagem SPA(Single page application):
       As requisições trazem apenas os dados como resposta e com esses dados o front-end pode preencher as informações em tela 
       Apágina nunca recarrega, otimizando a performance e dando vida ao conceito de SPA. Retornando apenas JSON podemos ter quantos front-ends quisermos.

# React Native
# Abordagem Tradicional:
  Na abordagem tradicional, criamos uma aplicação para IOS e outra para Android, e nesses casos, o trabalho se torna repetido tanto para criação quanto para as alterações no projeto.
# Abordagem do React Native:
  Todo código feito é em JavaScript, esse código não é convertido em código nativo, melhor do que isso, o dispositivo passa a entender o código JavaScript e interface gerada é totalmente nativa.

# Por que utilizaremos o Expo?
  Sem o Expo, precisamos instalar em nosso sistema tanto o Android Studio para obter o SDK de desenvolvimento Android, e o Xcode (apenas no Mac) para obter a SDK do IOS.

  Nesse caso, nossa iniciação no desenvolvimento fica mais poderosa, já que essas SDK's não são extremamente simples de instalar e livres de erros.

  Com o Expo, nós instalamos um aplicativo no celular chamado Expo, e dentro dele, tudo o que precisamos para desenvolver no React Native já está instalado, como as API's de mapas, geolocaliação, câmera, sensores, calendários, etc...

  Com isso, não precisamos nos preocupar em gerar o aplicativo para Android e IOS já que o app do Expo instalado tem tudo o que precisamos e assim usamos apenas React.