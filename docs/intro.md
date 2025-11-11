---
sidebar_position: 1
---

# Primeros Pasos

Esta es la documentacion de los eventos de analitica para Google Analytics 4 y Clevertap de  **Surtiapp** en su version App y Web.


### ID y Propiedades del Usuario

El usuario al iniciar sesion en la App, se debe llamar el metodo setUserID que nos permite definir no solo el ID de ese usuario ( llamandolo desde el Backend ), sino ademas unas propiedades - parametros de ese usuario y que heredan todos los eventos que el haga en esa sesion. Las Propiedades - parametros del Usuario para diferenciarlas de las de los eventos, las vamos a manejar en Mayuscula al incio y en Camel

### Propiedades / parametros del Usuario

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|`UserID`| `number` | Si | 4237423 | ID de identificacion del Usuario |
|`SiteId`| `number` | Si | 45 | ID del centro de distribucion|
|`SiteName`| `string` | Si | bogota_salitre | Nombre del centro de distribucion |
|`CustomerCluster`| `string` | Si | **Por Definir** | Cluster al que pertenece el Cliente |
|`CustomerIdentification`| `number` | Si | **Por Definir**| Identificacion del Cliente |
|`ClevertapIdentity`| `string` | Si | **Por Definir** | Id del Cliente en Clevertap |
|`CustomerUsername`| `string` | Si | diego345 | Username del Cliente |
|`CustomerName`| `string` | Si | Diego Torres | Nombre del cliente |
|`InstallationId`| `number` | Si | 42 | Id de la instalacion |
|`CustomerEmail`| `string` | Si | diego345@gmail.com | Correo del Usuario |
|`CustomerPhone`| `number` | Si | 3115862088 | Numero de celular del usuario |
|`CustomerAddress`| `string` | Si | Cra 81B # 7D - 56 | Direccion del Usuario |
|`CustomerCity`| `string` | Si | bogota | Ciudad del Usuario |
|`CustomerStateName`| `string` | Si | bogota_dc | Departamento del usuario |
|`CustomerLatitude`| `string` | Si | -76.945435 | Latitud de la ubicacion del usuario |
|`CustomerLongitude`| `string` | Si | 23.565646 | Longitud de la ubicacion del usuario |
|`UserType`| `string` | Si | **Por Definir** | Tipo de Usuario |
|`CreatedAt`| `date` | Si | 2025-01-03 | Fecha de creacion del usuario |
|`BirthDate`| `date` | Si | 1988-06-23 | Fecha de nacimiento del usuario  |
|`ClevertapMsgPush_MSG-push-all`| `boolean` | Si | `true` | Autorizacion envios Push |
|`ClevertapMsgEmail_MSG-dndEmail`| `boolean` | Si | `false` | Autorizacion envios email |
|`ClevertapMsgSms_MSG-dndPhone`| `boolean` | Si | `false` | Autorizacion envios SMS |
|`ClevertapMsgWhatsapp_MSG-whatsapp`| `boolean` | Si | `true` | Autorizacion envios Whatsapp |



