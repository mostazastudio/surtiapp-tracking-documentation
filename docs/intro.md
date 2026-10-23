---
sidebar_position: 1
---

# Primeros Pasos

Esta es la documentacion de los eventos de analitica para Google Analytics 4 y Clevertap de  **Surtiapp** en su version App y Web.


### ID y Propiedades del Usuario

El usuario al iniciar sesion en la App, se debe llamar el metodo setUserID que nos permite definir no solo el ID de ese usuario ( llamandolo desde el Backend ), sino ademas unas propiedades - parametros de ese usuario y que heredan todos los eventos que el haga en esa sesion. Las Propiedades - parametros del Usuario para diferenciarlas de las de los eventos, las vamos a manejar en Mayuscula al incio y en Camel

### Propiedades / parametros del Usuario

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion | Valor en Clevertap |
| --- | --- | --- | --- | --- | --- |
|`UserID`| `number` | Si | 4237423 | ID de identificacion del Usuario | `UserID` |
|`SiteId`| `number` | Si | 45 | ID del centro de distribucion| `SiteId` |
|`SiteName`| `string` | Si | bogota_salitre | Nombre del centro de distribucion | `SiteName` |
|`CustomerCluster`| `string` | Si | **Por Definir** | Cluster al que pertenece el Cliente | `CustomerCluster` |
|`CustomerIdentification`| `number` | Si | **Por Definir**| Identificacion del Cliente | `CustomerIdentification` |
|`ClevertapIdentity`| `string` | Si | **Por Definir** | Id del Cliente en Clevertap | `Identity` |
|`CustomerUsername`| `string` | Si | diego345 | Username del Cliente | `CustomerUsername` |
|`Name`| `string` | Si | Diego Torres | Nombre del cliente | `Name` |
|`InstallationId`| `number` | Si | 42 | Id de la instalacion | `InstallationId` |
|`Email`| `string` | Si | diego345@gmail.com | Correo del Usuario | `Email` |
|`Phone`| `number` | Si | 3115862088 | Numero de celular del usuario | `Phone` |
|`CustomerAddress`| `string` | Si | Cra 81B # 7D - 56 | Direccion del Usuario | `CustomerAddress` |
|`CustomerCity`| `string` | Si | bogota | Ciudad del Usuario | `CustomerCity` |
|`CustomerStateName`| `string` | Si | bogota_dc | Departamento del usuario | `CustomerStateName` |
|`CustomerLatitude`| `string` | Si | -76.945435 | Latitud de la ubicacion del usuario | `CustomerLatitude` |
|`CustomerLongitude`| `string` | Si | 23.565646 | Longitud de la ubicacion del usuario | `CustomerLongitude` |
|`UserType`| `string` | Si | **Por Definir** | Tipo de Usuario | `UserType` |
|`CreatedAt`| `date` | Si | 2025-01-03 | Fecha de creacion del usuario | `CreatedAt` |
|`BirthDate`| `date` | Si | 1988-06-23 | Fecha de nacimiento del usuario  | `BirthDate` |
|`BusinessModel`| `string` | Si | B2B | Modelo de negocio | `BusinessModel` |
|`PersonalDataProtection`| `boolean` | Si | `true` | Protección de datos personales | `PersonalDataProtection` |
|`AppsNotification`| `boolean` | Si | `true` | Autorizacion envios Push | `MSG-push-all` |
|`EmailNotification`| `boolean` | Si | `false` | Autorizacion envios email | `MSG-dndEmail` |
|`SMSNotification`| `boolean` | Si | `false` | Autorizacion envios SMS | `MSG-dndPhone` |
|`WhatsAppNotification`| `boolean` | Si | `true` | Autorizacion envios Whatsapp | `MSG-whatsapp` |
|`masonry_toggle`| `boolean` | Si | `true` | Indica si la vista de grilla (Masonry) está habilitada | `masonry_toggle` |



