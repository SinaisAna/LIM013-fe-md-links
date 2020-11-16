[figlet](https://www.npmjs.com/package/figlet)Este proyecto tiene como objetivo implementar completamente la especificación FIGfont en JavaScript. Funciona en el navegador y con Node.js. Puede verlo en acción aquí: [FIGfont](http://patorjk.com/software/taag/) (el archivo figlet.js se escribió para alimentar esa aplicación)

Inicio rápido: Node.js
Instalar en pc:

npm instalar figlet
Uso simple:

var  figlet  = require ( ' figlet ' ) ; 
 
figlet ( ' ¡ ¡ Hola mundo !! ' , function ( err , data ) {   
    if ( err ) {  
        consola . log ( ' Algo salió mal ... ' ) ;
        consola . dir ( err ) ;
        volver ;
    }
    consola . log ( datos )
} ) ;
Eso debería imprimirse:

  _   _      _ _        __        __         _     _ _ _
 | | | | ___| | | ___   \ \      / /__  _ __| | __| | | |
 | |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | | |
 |  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|_|
 |_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_|_)
Uso básico: Node.js
texto
Llamar al objeto figlet como función es una forma abreviada de llamar a la función de texto. Este método le permite crear arte ASCII a partir de texto. Toma en 3 parámetros:

Texto de entrada: una cadena de texto para convertir en arte ASCII.
Opciones: una cadena que indica el nombre de la fuente o un objeto de opciones (descripción a continuación).
Devolución de llamada: una función para ejecutar con el art. ASCII generado.
Ejemplo:

figlet . texto ( ' ¡Boo! ' , { 
    fuente : ' Fantasma ' , 
    horizontalLayout : ' predeterminado ' , 
    verticalLayout : ' predeterminado ' , 
    ancho : 80 , 
    espacio en blanco Break : true 
} , función ( err , datos ) {   
    if ( err ) {  
        consola . log ( ' Algo salió mal ... ' ) ;
        consola . dir ( err ) ;
        volver ;
    }
    consola . log ( datos ) ;
} ) ;
Eso imprimirá:

.-. .-')                            ,---.
\  ( OO )                           |   |
 ;-----.\  .-'),-----.  .-'),-----. |   |
 | .-.  | ( OO'  .-.  '( OO'  .-.  '|   |
 | '-' /_)/   |  | |  |/   |  | |  ||   |
 | .-. `. \_) |  |\|  |\_) |  |\|  ||  .'
 | |  \  |  \ |  | |  |  \ |  | |  |`--'  
 | '--'  /   `'  '-'  '   `'  '-'  '.--.  
 `------'      `-----'      `-----' '--'