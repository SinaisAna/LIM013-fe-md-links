Empezando con nuestro CLI
Hoy en día es muy común encontrar decenas de herramientas para acelerar nuestro desarrollo en la parte de Front-end, ya sea para crear proyectos desde cero e inclusive repetir ciertas tareas repetitivas y monótonas.

En ocasiones nos encontramos situaciones en las que esas herramientas no cubren nuestras necesidades:

Ya sea por la naturaleza del proyecto que tiene cierta lógica especial y requiere de ciertas personalizaciones.
El proyecto no tiene necesidades especiales pero tenemos que realizar ciertos procesos repetitivos que se acaban convirtiendo en un copy/paste, con lo que eso supone.
También nos podemos encontrar en la situación que el proyecto sea normal, no requiera ninguna acción especial pero nos gustaría tener unos procesos definidos de como se deben hacer las cosas.
Bien, para cualquiera de las situaciones anteriores y seguramente alguna que otra mas, NodeJS nos ofrece un entorno y ciertas herramientas para crear nuestro propio CLI (Command-Line Interface).

¿Por donde comienzo?
Lo primero de todo sera crear la carpeta de nuestro CLI y dentro crearemos el fichero package.json.

Si no queremos complicarnos usaremos el comando npm init -y, el cual nos creara un package.json por defecto.

Lo siguiente sera instalar las dependencias necesarias para poder crear nuestro CLI:

chalk: Con esta dependencia podemos dar colores y ciertos estilos al texto de nuestro terminal (npm i chalk)