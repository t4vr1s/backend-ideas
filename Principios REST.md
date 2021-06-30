# principios rest

## preocupaciones

rendimiento

escalabilidad

simplicidad

portabilidad

confiabilidad

## principios

### cliente servidor

separa el frontend del backend

### sistema de capas

se organizan jerarquicamente y restringen el uso de las capas superiores e inferiores
las orquetacion los hace mas modulares y escalables

### sin estado

una solicitud contiene toda la informacion para que el servidor entienda y cree un contexto

### interfaz uniforme

son 4 parte esenciales

identificacion de recursos o elementos arquitectonicos
manipulacion de recursos
respuestas de autodescripcion
administracion del estado

se implementa mediante URI'S vervos http, media types,, hateoas

### cache

se deriba del principio sin estado. requiere que las respuesta del servidor
se etiqueten como cacheables o no para ser reutilizables
mejora la velocidad y la latencia del servidor

### codigo en demanda (opcional)

permite a un cliente acceder a recursos del servidor sin saber como procesarlos

siguiendo estos principios nos da como resultado una app RESTful
