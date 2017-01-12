
Babel en el servidor


Babel es un compilador (o "traductor") de la forma de escritura en javascript ECMAScript 6, que es una especificacion con ciertos estandares para el lenguaje.

es2015 (es 6), es la última forma de escribir este lenguaje, por lo cual algunos navegadores no lo soportan.

Babel funciona como traductor, transforma el 'es6' en 'es5' para que se pueda ejecutar en todo navegador.

las formas irán cambiando por su evolución en esta tecnología, así que este repositorio serán actualizaciones y especificaciones de uso de babel.

dependencias son:
	
	- babel-cli (desarrollo)
	- babel-preset-es2015 (producción)

Una vez instaladas estas dependencias, se debe -eliminar el archivo 'npm-debug.log' y crear un archivo '.babelrc' con la inclusión de los presets para indicarle a babel (también se pueden poner plugins, etc.)

Para ejecutar correctamente en producción se necesita instalar require-hook porque el babel-cli y presets funcionan pero no es recomendado. así que se instala require-hook. Y lo que hace es hacer un require de bindiarse o adjuntarse a todos los require que tengamos en los programas y se va a ejecutar solo una vez, a diferencia de babel-node, este no consume tanta memoria.

	- babel-register

Se necesita crear un archivo llamado index.js que tenga el require (require-hook) y luego el require del servidor.

En el package.json está la forma de ejecutar, y notamos que está mas organizado porque con tan solo 'node index', se puede arrancar el servidor (sabiendo que las otras dependencias están llamadas en otros archivos).



