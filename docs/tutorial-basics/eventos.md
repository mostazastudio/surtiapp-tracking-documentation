---
sidebar_position: 2
---

# Eventos Basicos 

Esta es la lista de eventos para medir las acciones de NO ECOMMERCE con base al estandar de Google Analytics 4 y que tambien lo usaremos para Clevertap

### `screen_view`

Se usa para medir cuando visualizacion de pantalla en la App. Deberia visualizar pantallas como login, creacion_cuenta, tienda,promos, fabricantes, favoritos, cuenta, cada pantalla de departamento, cada patalla de categoria , cada pantalla de fabricante, cada pantalla de marca, etc 

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | licores/aguardientes | nombre de la pantalla que se esta visualizando |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS donde se esta navegando |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `form_start`

Se usa para medir cada vez que se inicia el diligenciamiento de un formulario 

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Login | nombre de la pantalla que se esta visualizando |
|[`form_id`](../tutorial-extras/parametros-basicos.md#form_id)| `string` | Si | login_form | ID del formulario que se esta diligenciando |
|[`form_name`](../tutorial-extras/parametros-basicos.md#form_name)| `string` | No | Formulario Login | Nombre del formulario que se esta diligenciando |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `form_submit`

Se usa para medir cada vez que se inicia el diligenciamiento de un formulario 

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Login | nombre de la pantalla que se esta visualizando |
|[`form_id`](../tutorial-extras/parametros-basicos.md#form_id)| `string` | Si | login_form | ID del formulario que se  diligencio |
|[`form_name`](../tutorial-extras/parametros-basicos.md#form_name)| `string` | No | Formulario Login | Nombre del formulario que se  diligencio |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `field_input`

Cuando un campo de un formulario ha sido diligenciado ( se abandona el focus del campo )

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Login | nombre de la pantalla que se esta visualizando |
|[`form_id`](../tutorial-extras/parametros-basicos.md#form_id)| `string` | Si | login_form | ID del formulario que se esta  diligenciando |
|[`form_name`](../tutorial-extras/parametros-basicos.md#form_name)| `string` | No | Formulario Login | Nombre del formulario que se esta  diligenciando |
|[`field_name`](../tutorial-extras/parametros-basicos.md#field_name)| `string` | No | cellphone | Nombre del campo del formulario que se esta  diligenciando |
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
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Login | nombre de la pantalla que se esta visualizando |
|[`method`](../tutorial-extras/parametros-basicos.md#method)| `string` | No | Google | Tipo de Inicio de Sesion |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

Documentacion Adicional: [login en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#login)

---
---

### `search`

Se usa para medir cada vez que se inicia sesion

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Login | nombre de la pantalla que se esta visualizando |
|[`search_term`](../tutorial-extras/parametros-basicos.md#search_term)| `string` | No | detergentes | el termino o palabras usadas en la busqueda |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

Documentacion Adicional: [search en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#search)

---
---

### `sign_up`

Se usa para medir cada vez que se inicia sesion

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Login | nombre de la pantalla que se esta visualizando |
|[`method`](../tutorial-extras/parametros-basicos.md#method)| `string` | No | Google | Tipo de Creacion de cuenta |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

Documentacion Adicional: [sign_up en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#sign_up)

---
---

### `account_management`

Se usa para medir las acciones relacionadas a la recuperacion de cuenta ( usuario y contraseña )

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Login | nombre de la pantalla que se esta visualizando |
|[`account_action`](../tutorial-extras/parametros-basicos.md#account_action)| `string` | Si | recover_pass | Accion tomada dentro de las acciones relacionadas a la recuperacion de la cuenta. Debe tomar SOLO uno de estos valores:`account_active`,`recover _user`,`recover_pass`,`change_pass`,`success_user`, `success_pass`|
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

### `filter`

Se usa para medir las acciones relacionadas al filtrado de productos en una lista o grilla

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Login | nombre de la pantalla que se esta visualizando |
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
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Login | nombre de la pantalla que se esta visualizando |
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
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Login | nombre de la pantalla que se esta visualizando |
|[`action`](../tutorial-extras/parametros-basicos.md#action)| `string` | Si | open | Accion de la imagen, si se abrio,  o se cerro. Debe tomar solo uno de estos 2 valores: `open`, `close`|
|[`selected_parent`](../tutorial-extras/parametros-basicos.md#selected_parent)| `string` | Si | aguardiente_nectar_rojo_750 | EL nombre del producto sobre el cual se esta viendo las imagenes |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |


### `confirmar_ubicacion`

Se usa para medir las acciones del Pop Up de "departamento y ciudad"

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Licores | nombre de la pantalla que se esta visualizando |
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
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Licores | nombre de la pantalla que se esta visualizando |
|[`action`](../tutorial-extras/parametros-basicos.md#action)| `string` | Si | open | Accion de relacionada a la verificacion. Debe tomar solo uno de estos valores: `verification_falied`, `verification_success`,`verification_requested`|
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `whatsapp`

Se usa para medir los clicks al boton de whatsapp

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Licores | nombre de la pantalla que se esta visualizando |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `recordarme`

Se usa para medir los clicks al checkbox de "recordarme"

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Licores | nombre de la pantalla que se esta visualizando |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `ingresar_con_celular`

Se usa para medir los clicks a la opcion de  de "Ingresar con Celular"

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Licores | nombre de la pantalla que se esta visualizando |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `crear_cuenta`

Se usa para medir los clicks a la opcion de  de "Crear Cuenta" en la pantalla inicial de la App

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Licores | nombre de la pantalla que se esta visualizando |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `tengo_cuenta`

Se usa para medir los clicks a la opcion de  de "Tengo Cuenta" en la pantalla inicial de la App

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Licores | nombre de la pantalla que se esta visualizando |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---


### `echar_vistazo`

Se usa para medir los clicks a la opcion de  de "Echar Vistazo" en la pantalla inicial de la App

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Licores | nombre de la pantalla que se esta visualizando |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---

### `scroll`

Se usa para medir cuando se llegue al 90% de la pantalla verticalmente hablando

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`firebase_screen`](../tutorial-extras/parametros-basicos.md#firebase_screen)| `string` | Si | Licores | nombre de la pantalla que se esta visualizando |
|[`dispositivo`](../tutorial-extras/parametros-basicos.md#dispositivo)| `string` | No | Samsung Galaxy S8| Nombre del dispositivo donde se esta navegando |
|[`sistema_operativo`](../tutorial-extras/parametros-basicos.md#sistema_operativo)| `string` | No | Android 14| Nombre OS |
|[`nombre_dia`](../tutorial-extras/parametros-basicos.md#nombre_dia)| `string` | No | Miercoles | Nombre del dia de la semana |

---
---
