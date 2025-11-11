# Parametros Basicos



### `nombre_pantalla`

nombre de la pantalla que se esta visualizando

*Ejemplo:* licores/aguardientes

**Se usa en los siguientes eventos:**

- [`screen_view`](../tutorial-basics/eventos.md#screen_view)
- [`form_start`](../tutorial-basics/eventos.md#form_start)
- [`form_abandoned`](../tutorial-basics/eventos.md#form_abandoned)
- [`login`](../tutorial-basics/eventos.md#login)
- [`search`](../tutorial-basics/eventos.md#search)
- [`sign_up`](../tutorial-basics/eventos.md#sign_up)
- [`account_management`](../tutorial-basics/eventos.md#account_management)
- [`filter`](../tutorial-basics/eventos.md#filter)
- [`sort`](../tutorial-basics/eventos.md#sort)
- [`product_image`](../tutorial-basics/eventos.md#product_image)
- [`confirmar_ubicacion`](../tutorial-basics/eventos.md#confirmar_ubicacion)
- [`verification`](../tutorial-basics/eventos.md#verification)
- [`chat_help`](../tutorial-basics/eventos.md#chat_help)
- [`guest_session`](../tutorial-basics/eventos.md#guest_session)
- [`scroll`](../tutorial-basics/eventos.md#scroll)


### `dispositivo`

Nombre del dispositivo donde se esta navegando

*Ejemplo:* Iphone 13 

**Se usa en los siguientes eventos:**

- [`screen_view`](../tutorial-basics/eventos.md#screen_view)
- [`form_start`](../tutorial-basics/eventos.md#form_start)
- [`form_abandoned`](../tutorial-basics/eventos.md#form_abandoned)
- [`login`](../tutorial-basics/eventos.md#login)
- [`search`](../tutorial-basics/eventos.md#search)
- [`sign_up`](../tutorial-basics/eventos.md#sign_up)
- [`account_management`](../tutorial-basics/eventos.md#account_management)
- [`filter`](../tutorial-basics/eventos.md#filter)
- [`sort`](../tutorial-basics/eventos.md#sort)
- [`product_image`](../tutorial-basics/eventos.md#product_image)
- [`confirmar_ubicacion`](../tutorial-basics/eventos.md#confirmar_ubicacion)
- [`verification`](../tutorial-basics/eventos.md#verification)
- [`chat_help`](../tutorial-basics/eventos.md#chat_help)
- [`guest_session`](../tutorial-basics/eventos.md#guest_session)
- [`scroll`](../tutorial-basics/eventos.md#scroll)


### `sistema_operativo`

Nombre OS donde se esta navegando

*Ejemplo:* Android 14

**Se usa en los siguientes eventos:**

- [`screen_view`](../tutorial-basics/eventos.md#screen_view)
- [`form_start`](../tutorial-basics/eventos.md#form_start)
- [`form_abandoned`](../tutorial-basics/eventos.md#form_abandoned)
- [`login`](../tutorial-basics/eventos.md#login)
- [`search`](../tutorial-basics/eventos.md#search)
- [`sign_up`](../tutorial-basics/eventos.md#sign_up)
- [`account_management`](../tutorial-basics/eventos.md#account_management)
- [`filter`](../tutorial-basics/eventos.md#filter)
- [`sort`](../tutorial-basics/eventos.md#sort)
- [`product_image`](../tutorial-basics/eventos.md#product_image)
- [`confirmar_ubicacion`](../tutorial-basics/eventos.md#confirmar_ubicacion)
- [`verification`](../tutorial-basics/eventos.md#verification)
- [`chat_help`](../tutorial-basics/eventos.md#chat_help)
- [`guest_session`](../tutorial-basics/eventos.md#guest_session)
- [`scroll`](../tutorial-basics/eventos.md#scroll)


### `nombre_dia`

Nombre del dia de la semana

*Ejemplo:* Miercoles

**Se usa en los siguientes eventos:**

- [`screen_view`](../tutorial-basics/eventos.md#screen_view)
- [`form_start`](../tutorial-basics/eventos.md#form_start)
- [`form_abandoned`](../tutorial-basics/eventos.md#form_abandoned)
- [`login`](../tutorial-basics/eventos.md#login)
- [`search`](../tutorial-basics/eventos.md#search)
- [`sign_up`](../tutorial-basics/eventos.md#sign_up)
- [`account_management`](../tutorial-basics/eventos.md#account_management)
- [`filter`](../tutorial-basics/eventos.md#filter)
- [`sort`](../tutorial-basics/eventos.md#sort)
- [`product_image`](../tutorial-basics/eventos.md#product_image)
- [`confirmar_ubicacion`](../tutorial-basics/eventos.md#confirmar_ubicacion)
- [`verification`](../tutorial-basics/eventos.md#verification)
- [`chat_help`](../tutorial-basics/eventos.md#chat_help)
- [`guest_session`](../tutorial-basics/eventos.md#guest_session)
- [`scroll`](../tutorial-basics/eventos.md#scroll)


### `form_id`

ID del formulario que se esta diligenciando

*Ejemplo:* login_form

**Se usa en los siguientes eventos:**


- [`form_start`](../tutorial-basics/eventos.md#form_start)
- [`form_abandoned`](../tutorial-basics/eventos.md#form_abandoned)



### `form_name`

Nombre del formulario que se esta diligenciando

*Ejemplo:* Formulario de Login

**Se usa en los siguientes eventos:**

- [`form_start`](../tutorial-basics/eventos.md#form_start)
- [`form_abandoned`](../tutorial-basics/eventos.md#form_abandoned)


### `method`

Tipo de Inicio de Sesion o de creacion de la cuenta ( dependiendo del evento que lo este llamando)

*Ejemplo:* Google

**Se usa en los siguientes eventos:**

- [`login`](../tutorial-basics/eventos.md#login)
- [`sign_up`](../tutorial-basics/eventos.md#sign_up)


### `search_term`

El termino o palabras usadas en la busqueda

*Ejemplo:* deteregentes+para+lavadora

**Se usa en los siguientes eventos:**

- [`search`](../tutorial-basics/eventos.md#search)


### `account_action`

Accion tomada dentro de las acciones relacionadas a la recuperacion de la cuenta. Debe tomar SOLO uno de estos valores:`account_active`,`recover _user`,`recover_pass`,`change_pass`,`success_user`, `success_pass`

*Ejemplo:* `account_active`

**Se usa en los siguientes eventos:**

- [`account_management`](../tutorial-basics/eventos.md#account_management)


### `action`

Tipo de accion ejecutada en algun control ( filtro u ordenador) o en algun flotante ( popUps). Dependiendo del evento puede tomar  alguno de estos  valores: `open`, `close`,`run`, `clean`, `verification_falied`, `verification_success`,`verification_requested`

*Ejemplo:* `open`

**Se usa en los siguientes eventos:**


- [`filter`](../tutorial-basics/eventos.md#filter)
- [`sort`](../tutorial-basics/eventos.md#sort)
- [`product_image`](../tutorial-basics/eventos.md#product_image)
- [`confirmar_ubicacion`](../tutorial-basics/eventos.md#confirmar_ubicacion)
- [`verification`](../tutorial-basics/eventos.md#verification)


### `selected_parent`

Si `action` toma el valor `run` este parametro debe tomar un valor que varia dependiendo el evento que lo esta llamado.

*Ejemplo:* `fabrica licores cundinamarca`

**Se usa en los siguientes eventos:**

- [`filter`](../tutorial-basics/eventos.md#filter)
- [`sort`](../tutorial-basics/eventos.md#sort)
- [`product_image`](../tutorial-basics/eventos.md#product_image)
- [`confirmar_ubicacion`](../tutorial-basics/eventos.md#confirmar_ubicacion)


### `selected_child`

Si `action` toma el valor `run` este parametro debe tomar un valor que varia dependiendo el evento que lo esta llamado.

*Ejemplo:* `nectar`

**Se usa en los siguientes eventos:**

- [`filter`](../tutorial-basics/eventos.md#filter)
- [`confirmar_ubicacion`](../tutorial-basics/eventos.md#confirmar_ubicacion)

### `index`

Es el indice o la pagina en la que se hace scroll

*Ejemplo:* 2

**Se usa en los siguientes eventos:**

- [`scroll`](../tutorial-basics/eventos.md#scroll)