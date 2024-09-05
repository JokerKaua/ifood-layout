const fs = require('fs');
const path = require('path');

// Path do assets
// const pathSrc = `@/src/assets/restaurants`

// Process
                // Caso o path não comece com `/`
const pathSrc = (process.argv[2][0] != `/`) ? `/`.concat(process.argv[2]) : process.argv[2];

// Se o diretório não existir
if(!pathSrc) {
  console.error(`Erro: Diretório não fornecido!\n Use: node ./getImagesExport.js '@/<RelativePath>'\n Eg.: node ./getImagesExport.js '/src/assets'`);
  process.exit(1);
}

const directory = path.join(__dirname, '../../', pathSrc);

// Caso o diretório fornecido não exista
if (!fs.existsSync(directory)) {
  console.error(`Erro: O diretório '${directory}' não existe.`);
  process.exit(1);
}

const generateImageModules = () => {

  const files = fs.readdirSync(directory);
  const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

  if (pngFiles.length < 1) {
    console.error(`Erro: Não foram encontrados arquivos .png em ${pathSrc}`);
    process.exit(1);
  }

  // Gera o conteúdo do módulo
  const moduleExports = pngFiles.map(file => {
    const fileNameWithoutExt = path.basename(file, '.png');
    return `"${fileNameWithoutExt}": require('@${pathSrc}/${file}'),`;
  }).join('\n');

  return moduleExports;
}

const imageObject = generateImageModules();
console.log(imageObject);

const outputPath = path.join(__dirname, '../../', pathSrc, 'images.ts');

// Gera o módulo e salva
const moduleContent = `
  export const images: { [key: string] : any} = {
  ${generateImageModules()}
  } 
  `
fs.writeFileSync(outputPath, moduleContent);
console.log(`images.ts gerado com sucesso em ${outputPath}!`);