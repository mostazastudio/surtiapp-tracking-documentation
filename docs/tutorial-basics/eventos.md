---
sidebar_position: 2
---

# Eventos Basicos 

Esta es la lista de eventos para medir las acciones de NO ECOMMERCE con base al estandar de Google Analytics 4 y que tambien lo usaremos para Clevertap

### Parametro Modelo de Negocio

Para TODOS los eventos se tiene un parametro adicional `BusinessModel` que indica el modelo de negocio del usuario, si es B2B o B2C.

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`BusinessModel`](../tutorial-extras/parametros-basicos.md#BusinessModel)| `string` | SI | B2B | Modelo de negocio del usuario |

---
---

### `screen_view`

Se usa para medir cuando se visualiza una pantalla en la App. Deberia visualizar pantallas como login, creacion_cuenta, tienda,promos, fabricantes, favoritos, cuenta, cada pantalla de departamento, cada patalla de categoria , cada pantalla de fabricante, cada pantalla de marca, etc. Para Clevertap el evento se registra con el nombre screen_view_c.

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | licores/aguardientes | nombre de la pantalla que se esta visualizando |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS donde se esta navegando |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `screen_view_elapsed_time`

Se usa para medir el tiempo que un usuario pasa en una pantalla de la App.

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | licores/aguardientes | nombre de la pantalla que se esta visualizando |
|[`elapsed_time`](../tutorial-extras/parametros-basicos.md#elapsed_time)| `string` | Si | 3.755455 | tiempo en segundos que el usuario paso en la pantalla |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS donde se esta navegando |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `form_start`

Se usa para medir cada vez que se inicia el diligenciamiento de un formulario, este evento fue implementado en los formularios de: Registro de Usuario B2B y B2C, Actualizacion de datos, Creacion y eliminacion de direcciones. 

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | AddressFormView | nombre de la pantalla que se esta visualizando |
|[`form_id`](../tutorial-extras/parametros-basicos.md#form_id)| `string` | Si | login_form | ID del formulario que se esta diligenciando |
|[`form_name`](../tutorial-extras/parametros-basicos.md#form_name)| `string` | No | Formulario Login | Nombre del formulario que se esta diligenciando |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `form_abandoned`

Se usa para medir cada vez que se cierra el diligenciamiento de un formulario sin completarlo, este evento fue implementado en los formularios de: Registro de Usuario B2B y B2C, Actualizacion de datos, Creacion y eliminacion de direcciones.

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | AddressFormView | nombre de la pantalla que se esta visualizando |
|[`form_id`](../tutorial-extras/parametros-basicos.md#form_id)| `string` | Si | login_form | ID del formulario que se  diligencio |
|[`form_name`](../tutorial-extras/parametros-basicos.md#form_name)| `string` | No | Formulario Login | Nombre del formulario que se  diligencio |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `login`

Se usa para medir cada vez que se inicia sesion

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | LoginView | nombre de la pantalla que se esta visualizando |
|[`method`](../tutorial-extras/parametros-basicos.md#method)| `string` | No | Google | Tipo de Inicio de Sesion |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

Documentacion Adicional: [login en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#login)

---
---

### `search`

Se usa para medir cuando el usuario realiza una busqueda en el catalogo de productos. Para Clevertap el evento se registra con el nombre search_c.

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | ProductCatalogView | nombre de la pantalla que se esta visualizando |
|[`search_term`](../tutorial-extras/parametros-basicos.md#search_term)| `string` | No | detergentes | el termino o palabras usadas en la busqueda |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

Documentacion Adicional: [search en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#search)

---
---

### `sign_up`

Se usa para medir cada vez que se registra un nuevo usuario en la aplicacion (Formularios de registro B2B y B2C).

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | SignUpB2BView | nombre de la pantalla que se esta visualizando |
|[`method`](../tutorial-extras/parametros-basicos.md#method)| `string` | No | Google | Tipo de Creacion de cuenta |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

Documentacion Adicional: [sign_up en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#sign_up)

---
---

### `account_management`

Se usa para medir las acciones relacionadas a la administracion de la cuenta del usuario, por ejemplo: recuperacion de cuenta ( usuario y contraseña ), activacion de cuenta, cambio de contraseña, etc.

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | ChangePasswordView | nombre de la pantalla que se esta visualizando |
|[`account_action`](../tutorial-extras/parametros-basicos.md#account_action)| `string` | Si | recover_pass | Accion tomada dentro de las acciones relacionadas a la recuperacion de la cuenta. Debe tomar SOLO uno de estos valores:`account_active`,`recover _user`,`recover_pass`,`change_pass`,`success_user`, `success_pass`|
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

### `filter`

Se usa para medir las acciones relacionadas al filtrado de productos en una lista o grilla

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | licores/aguardientes | nombre de la pantalla que se esta visualizando |
|[`action`](../tutorial-extras/parametros-basicos.md#action)| `string` | Si | run | Accion del Filtro, si se abrio, se ejecuto o se cerro. Debe tomar solo uno de estos 4 valores: `open`, `close`,`run`, `clean`|
|[`selected_parent`](../tutorial-extras/parametros-basicos.md#selected_parent)| `string` | Si | Fabrica de Licores de Cundinamarca | Si `action` toma el valor de `run` debe llevar este parametro que hace mencion al fabricante por el cual se esta haciendo el filtro |
|[`selected_child`](../tutorial-extras/parametros-basicos.md#selected_child)| `string` | Si | Nectar | Si `action` toma el valor de `run` debe llevar este parametro que hace mencion a la marca por el cual se esta haciendo el filtro |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |


### `sort`

Se usa para medir las acciones relacionadas al ordenado de productos en una lista o grilla

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | licores/aguardientes | nombre de la pantalla que se esta visualizando |
|[`action`](../tutorial-extras/parametros-basicos.md#action)| `string` | Si | open | Accion del Filtro, si se abrio, se ejecuto o se cerro. Debe tomar solo uno de estos 4 valores: `open`, `close`,`run`, `clean`|
|[`selected_parent`](../tutorial-extras/parametros-basicos.md#selected_parent)| `string` | Si | mayor_precio | Si `action` toma el valor de `run` debe llevar este parametro que hace mencion al criterio por el cual se esta haciendo el ordenamiento |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |


### `product_image`

Se usa para medir cuando se esta visualizando en detalle las imagenes de un producto ( dentro del detalle de producto)

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | ProductDetailView | nombre de la pantalla que se esta visualizando |
|[`action`](../tutorial-extras/parametros-basicos.md#action)| `string` | Si | open | Accion de la imagen, si se abrio,  o se cerro. Debe tomar solo uno de estos 2 valores: `open`, `close`|
|[`selected_parent`](../tutorial-extras/parametros-basicos.md#selected_parent)| `string` | Si | aguardiente_nectar_rojo_750 | EL nombre del producto sobre el cual se esta viendo las imagenes |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |


### `confirmar_ubicacion`

Se usa para medir las acciones del Pop Up donde el usuario puede cambiar su departamento y ciudad o sitio

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | Licores | nombre de la pantalla que se esta visualizando |
|[`action`](../tutorial-extras/parametros-basicos.md#action)| `string` | Si | open | Accion del popup. Debe tomar solo uno de estos 3 valores: `open`, `close`,`run`|
|[`selected_parent`](../tutorial-extras/parametros-basicos.md#selected_parent)| `string` | Si | Antioquia | Si `action` toma el valor de `run` debe llevar este parametro que hace mencion al departamento seleccionado |
|[`selected_child`](../tutorial-extras/parametros-basicos.md#selected_child)| `string` | Si | Medellin | Si `action` toma el valor de `run` debe llevar este parametro que hace mencion a la ciudad seleccionada |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `verification`

Se usa para medir las acciones relacionadas a la verificacion de la cuenta

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | VerifyAccountView | nombre de la pantalla que se esta visualizando |
|[`action`](../tutorial-extras/parametros-basicos.md#action)| `string` | Si | open | Accion de relacionada a la verificacion. Debe tomar solo uno de estos valores: `verification_falied`, `verification_success`,`verification_requested`|
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `chat_help`

Se usa para medir los clicks al boton de chat (whatsapp u otros)

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | Licores | nombre de la pantalla que se esta visualizando |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `guest_session`

Se usa para medir los clicks a la opcion de  de "Echar Vistazo" en la pantalla inicial de la App

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | Licores | nombre de la pantalla que se esta visualizando |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `scroll`

Se usa para medir cuando se hace scroll en el catalogo de productos (paginacion).

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`nombre_pantalla`](../tutorial-extras/parametros-basicos.md#nombre_pantalla)| `string` | Si | Licores | nombre de la pantalla que se esta visualizando |
|[`index`](../tutorial-extras/parametros-basicos.md#index)| `number` | No | 2 | Es el indice o la pagina en la que se hace scroll |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `view_knowledge_library`

Se usa para medir cuando visualizan un articulo de la biblioteca de conocimiento (Opcion Contenido).

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`knowledge_library_id`](../tutorial-extras/parametros-basicos.md#knowledge_library_id)| `string` | Si | fdsa45fds45f4s5454 | ID del articulo de la biblioteca de conocimiento que se esta visualizando |
|[`knowledge_library_title`](../tutorial-extras/parametros-basicos.md#knowledge_library_title)| `string` | No | Como hacer un trago | Titulo del articulo de la biblioteca de conocimiento que se esta visualizando |
|[`knowledge_library_description`](../tutorial-extras/parametros-basicos.md#knowledge_library_description)| `string` | No | Como hacer un trago | Descripcion del articulo de la biblioteca de conocimiento que se esta visualizando |
|[`customer_identification`](../tutorial-extras/parametros-basicos.md#customer_identification)| `string` | No | 12345678 | Identificacion del usuario que esta visualizando el articulo |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `download_knowledge_library`

Se usa para medir cuando descarga un articulo de la biblioteca de conocimiento (Opcion Contenido).

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`knowledge_library_id`](../tutorial-extras/parametros-basicos.md#knowledge_library_id)| `string` | Si | fdsa45fds45f4s5454 | ID del articulo de la biblioteca de conocimiento que se esta descargando |
|[`knowledge_library_title`](../tutorial-extras/parametros-basicos.md#knowledge_library_title)| `string` | No | Como hacer un trago | Titulo del articulo de la biblioteca de conocimiento que se esta descargando |
|[`knowledge_library_description`](../tutorial-extras/parametros-basicos.md#knowledge_library_description)| `string` | No | Como hacer un trago | Descripcion del articulo de la biblioteca de conocimiento que se esta descargando |
|[`customer_identification`](../tutorial-extras/parametros-basicos.md#customer_identification)| `string` | No | 12345678 | Identificacion del usuario que esta descargando el articulo |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `rate_knowledge_library`

Se usa para medir cuando califica un articulo de la biblioteca de conocimiento (Opcion Contenido).

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`knowledge_library_id`](../tutorial-extras/parametros-basicos.md#knowledge_library_id)| `string` | Si | fdsa45fds45f4s5454 | ID del articulo de la biblioteca de conocimiento que se esta calificando |
|[`knowledge_library_title`](../tutorial-extras/parametros-basicos.md#knowledge_library_title)| `string` | No | Como hacer un trago | Titulo del articulo de la biblioteca de conocimiento que se esta calificando |
|[`knowledge_library_description`](../tutorial-extras/parametros-basicos.md#knowledge_library_description)| `string` | No | Como hacer un trago | Descripcion del articulo de la biblioteca de conocimiento que se esta calificando |
|[`customer_identification`](../tutorial-extras/parametros-basicos.md#customer_identification)| `string` | No | 12345678 | Identificacion del usuario que esta calificando el articulo |
|[`rating`](../tutorial-extras/parametros-basicos.md#rating)| `number` | Si | 4 | Calificacion dada por el usuario al articulo (valor entre 1 y 5) |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---