# Atividade Design de Telas - Layout IFOOD

- [Atividade Design de Telas - Layout IFOOD](#atividade-design-de-telas---layout-ifood)
  - [Sobre](#sobre)
  - [Tecnologias](#tecnologias)
  - [Instalação e execução](#instalação-e-execução)
  - [Desenvolvimento / Detalhes](#desenvolvimento--detalhes)

<br>

```bash
git clone https://github.com/JokerKaua/ifood-layout.git
```

## Sobre

Atividade para copiar o layout de algum aplicativo. <br> 
> **Escolhi o ifood**
> 
Help vídeo: [*Fazendo layout do ifood*](https://www.youtube.com/watch?v=aABUs_L4AZg) <br>
Imagem de referência: 
![Imagem de algumas telas do ifood](layoutReference.png)


## Tecnologias

- [React-native@0.74.5/React@18.2.0](https://reactnative.dev)
- [Expo@~51.0.28](https://expo.dev)
- [Node@21.2.0/npm@10.8.2](nodejs.org/)
- [NativeWind@4.0.1](https://www.nativewind.dev/v4/overview)
   -  [TailwindCSS@3.4.10](https://tailwindcss.com)
  > O NativeWind tem alguns bugs e não funciona direito. <br>
  > Ao longo do projeto percebe-se uma mistura entre o StyleSheet padrão do React-Native e o Tailwind.

## Instalação e execução

- Para instalar as dependências:
```bash
npm install
```

- Para rodar o expo:
```bash
npx expo start
```

- Rodar json-server
```bash
npx json-server db.json
```


## Desenvolvimento / Detalhes

- Funcionamento:
  - É feito pensando em uma futura ligação com algum banco de dados. Por isso o uso da biblioteca json-server, que simula um servidor db em json, permitindo requisições, mesmo que em localhost.
  - 

- Problemas:
  - Em off, com caminho de imagens locais no db.json, as imagens não são carregadas dinamicamente. [Stackoverflow ask](https://stackoverflow.com/questions/78942507/dynamically-load-image-by-name-react-native).
  - Componente Restaurants não é carregado verticalmente em duas colunas. (Solução temporária para carregá-lo horizontalmente)
  - Na TabBar, após um margin/padding, o background fica branco, independente do que eu faça. Possível solução: criar TabBar manualmente. [Ajuda](https://www.youtube.com/watch?v=K6OJP0s5VDQ). 


<br><br><br><br>
>> Autor: *Kauã Felipe Martins / Leonardo Madeira* <br>
    
