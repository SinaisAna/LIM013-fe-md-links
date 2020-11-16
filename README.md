<br />
<p align="center">
  <a href="https://github.com/SinaisAna/LIM013-fe-md-links/blob/master/README.md">
    <img src="Readme.img/iconMarkdown.jpg" alt="Logo" width="80" height="80">
  </a>
  <h1 align="center">&#60SinaisAna&#62/md-links</h1>
</p>


## Descripción 👁‍🦓 
Muchas veces los archivos markdown contienen links (vínculos) que están caídos y el/la autor(a) necesita revisar cual de ellos sigue en funcionamiento para no perjudicar su trabajo. Por ello este proyecto consiste en crear una herramienta para analizar que links son válidos en el archivo markdown (.md).

## Diagrama de flujo (API) 📚

![diagrama](Readme.img/diagramaflujoparte1(API).png)

![diagrama](Readme.img/diagramaflujoparte2(API).png)

## Diagrama de flujo (CLI) 📋

![diagrama](Readme.img/Diagramaflujo(CLI).jpg)

## Guia de instalacion 💿

~~~
npm install SinaisAna/LIM013-fe-md-links

npm install SinaisAna/md-links
~~~

## Funcionamiento 🚀

## En consola 💻

✔ **Para encontrar todos los links en archivos .md**

~~~
md-links ruta/a/analizar
~~~
Ejemplo: 
![diagrama](Readme.img/testeo.JPG)
✔ **Validar los links encontrados**
~~~
md-links ruta/a/analizar --validate
~~~
Ejemplo:
![diagrama](Readme.img/testeoValidate.JPG)

✔ **Obtener total de links y links unicos**
~~~
md-links ruta/a/analizar --stats
~~~
Ejemplo:
![diagrama](Readme.img/testeoStast.JPG)

✔ **Obtener total de links, links unicos y rotos**
~~~
md-links ruta/a/analizar --stats --validate
~~~
Ejemplo:
![diagrama](Readme.img/testeoValidateStats.JPG)


**igualmente colocando** `--validate --stats`
~~~
md-links ruta/a/analizar --validate --stats
~~~

✔ **Obtener ayda**
~~~
md-links ruta/a/analizar --help
~~~
Ejemplo:
![diagrama](Readme.img/testeoHelp.JPG)

## Errores comunes ⚠ 📣

☑ **Ruta invalida**

![diagrama](Readme.img/rutaInvalida.JPG)

☑ **Opcion invalida**

![diagrama](Readme.img/opcioninvalida.JPG)

☑ **Opciones no estipuladas**

![diagrama](Readme.img/opciondemas.JPG)

## Objetivos de aprendizaje ✅

### Javascript
- [x] Consumo de Promesas
- [x] Creacion de Promesas
- [x] Modulos de Js
- [x] Recursión

### Node
- [x] Sistema de archivos
- [x] package.json
- [x] crear modules
- [x] Instalar y usar modules
- [x] npm scripts
- [x] CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing
- [x] Testeo de tus funciones
- [x] Testeo asíncrono

### Git y Github
- [x] Organización en Github

### Buenas prácticas de desarrollo
- [x] Modularización
- [x] Nomenclatura / Semántica
- [x] Linting
<p align="center">
    <img src="Readme.img/cadena.jpg" alt="Logo" width="80" height="80">
</p>