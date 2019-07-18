# serverless

## Prueba para Grupo AB InBev

Se hicieron cuatro pequeñas funciones junto con configuracines para DynamoDB y en Serverless

las funciones están en handler.js

## create: 
inserta datos en la db

## list: 
traerá toda la información dentro de la tabla 'test' en DynamoDB

## get: 
traerá la información del row correspondiente por medio del ID envíado por parámetro ```test/{id}```

## mysqlget: 
es una función para traer un elemento de una base de datos relacional en MySQL con el mismo nombre de la tabla 'test'
esta no se agregó a la configuración de Serverless pues no era necesario para el fin de la prueba
