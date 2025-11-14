---
sidebar_position: 3
---

# Eventos Ecommerce

Esta es la lista de eventos para medir las acciones de ECOMMERCE con base al estandar de Google Analytics 4 y que tambien lo usaremos para Clevertap

### Parametro Modelo de Negocio

Para TODOS los eventos se tiene un parametro adicional `BusinessModel` que indica el modelo de negocio del usuario, si es B2B o B2C.

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`BusinessModel`](../tutorial-extras/parametros-ecommerce.md#BusinessModel)| `string` | SI | B2B | Modelo de negocio del usuario |

---
---

### `view_item_list`

Se usa para medir cuando al usuario se le ha presentado una **lista o grilla de productos** especifica, indicado ademas cuales productos componen esa lista.

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`currency`](../tutorial-extras/parametros-ecommerce.md#currency)| `string` | Si | COP | Tipo de Moneda usado en la lista |
|[`item_list_id`](../tutorial-extras/parametros-ecommerce.md#item_list_id)| `string` | No | CV58696 | ID unico de la lista - categoria mostrada |
|[`item_list_name`](../tutorial-extras/parametros-ecommerce.md#item_list_name)| `string` | No | Licores/Aguardiente| Nombre de la lista - categoria mostrada |
|[`items`](../tutorial-extras/parametros-ecommerce.md#items)| `Array<Item>` | Si |  | Productos mostrados en la lista|

#### Parametros de `Item`

Son los parametros que lleva cada uno de los elementos del Array de  [`items`](../tutorial-extras/parametros-ecommerce.md#items) que al final <mark>representan cada uno de los productos mostrados</mark> en la lista.

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`item_id`](../tutorial-extras/parametros-ecommerce.md#item_id)| `string` | Si | BN43535 | ID o SKU unico del producto |
|[`item_name`](../tutorial-extras/parametros-ecommerce.md#item_name)| `string` | Si | Aguardiente Desquite Artesanal x 750ml | Nombre del producto |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | AÑONUEVO | Si el producto trae asociado un cupon, especificarlo |
|[`discount`](../tutorial-extras/parametros-ecommerce.md#discount)| `number` | No | 5000 | Valor monetario del descuento |
|[`index`](../tutorial-extras/parametros-ecommerce.md#index)| `number` | No | 6 | Posicion en la lista del producto |
|[`item_brand`](../tutorial-extras/parametros-ecommerce.md#item_brand)| `string` | No | Desquite | Marca del producto |
|[`item_fabricante`](../tutorial-extras/parametros-ecommerce.md#item_fabricante)| `string` | No | Fabrica de Licores de Cundinamarca | Fabrica del producto |
|[`item_category`](../tutorial-extras/parametros-ecommerce.md#item_category)| `string` | No | Licores | Departamento del producto |
|[`item_category2`](../tutorial-extras/parametros-ecommerce.md#item_category2)| `string` | No | Aguardientes | Categoria del producto |
|[`item_category3`](../tutorial-extras/parametros-ecommerce.md#item_category3)| `string` | No | Aguardientes Nacionales | Subcategoria  del producto |
|[`item_list_id`](../tutorial-extras/parametros-ecommerce.md#item_list_id)| `string` | No | CV58696 | ID unico de la lista - categoria donde el produdcto esta siendo mostrado |
|[`item_list_name`](../tutorial-extras/parametros-ecommerce.md#item_list_name)| `string` | No | Licores/Aguardiente| Nombre de la lista - categoria donde el produdcto esta siendo mostrado |
|[`price`](../tutorial-extras/parametros-ecommerce.md#price)| `number` | No | 24000| Precio del Producto en Numero |
|[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity)| `number` | No | 1| Unidades del producto mostradas. Si el producto que se muestra implica mas de 1, se debe cambiar el 1 |

Documentacion Adicional: [view_item_list en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#view_item_list)

---
---

### `view_item`

Se usa para medir cada vez que un usuario entra al detalle de producto.

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`currency`](../tutorial-extras/parametros-ecommerce.md#currency)| `string` | Si | COP | Tipo de Moneda usado |
|[`value`](../tutorial-extras/parametros-ecommerce.md#value)| `number` | Si | 39900| Valor monetario del producto |
|[`items`](../tutorial-extras/parametros-ecommerce.md#items)| `Array<Item>` | Si |  | Informacion del Producto que se esta viendo en detalle |

#### Parametros de `Item`

Son los parametros que lleva cada uno de los elementos del Array de  [`items`](../tutorial-extras/parametros-ecommerce.md#items) que en este caso <mark>es solamente 1, el producto que se esta viendo en detalle</mark>.

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`item_id`](../tutorial-extras/parametros-ecommerce.md#item_id)| `string` | Si | BN43535 | ID o SKU unico del producto |
|[`item_name`](../tutorial-extras/parametros-ecommerce.md#item_name)| `string` | Si | Aguardiente Desquite Artesanal x 750ml | Nombre del producto |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | AÑONUEVO | Si el producto trae asociado un cupon, especificarlo |
|[`discount`](../tutorial-extras/parametros-ecommerce.md#discount)| `number` | No | 5000 | Valor monetario del descuento |
|[`index`](../tutorial-extras/parametros-ecommerce.md#index)| `number` | No | 6 | Posicion que tenia el producto cuando se mostro en la lista previamente |
|[`item_brand`](../tutorial-extras/parametros-ecommerce.md#item_brand)| `string` | No | Desquite | Marca del producto |
|[`item_fabricante`](../tutorial-extras/parametros-ecommerce.md#item_fabricante)| `string` | No | Fabrica de Licores de Cundinamarca | Fabrica del producto |
|[`item_category`](../tutorial-extras/parametros-ecommerce.md#item_category)| `string` | No | Licores | Departamento del producto |
|[`item_category2`](../tutorial-extras/parametros-ecommerce.md#item_category2)| `string` | No | Aguardientes | Categoria del producto |
|[`item_category3`](../tutorial-extras/parametros-ecommerce.md#item_category3)| `string` | No | Aguardientes Nacionales | Subcategoria  del producto |
|[`item_list_id`](../tutorial-extras/parametros-ecommerce.md#item_list_id)| `string` | No | CV58696 | ID unico de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el ingreso al detalle de producto |
|[`item_list_name`](../tutorial-extras/parametros-ecommerce.md#item_list_name)| `string` | No | Licores/Aguardiente| Nombre de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el ingreso al detalle de producto |
|[`price`](../tutorial-extras/parametros-ecommerce.md#price)| `number` | No | 24000| Precio del Producto en Numero |
|[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity)| `number` | No | 1| Unidades del producto mostradas. Si el producto que se muestra implica mas de 1, se debe cambiar el 1 |

Documentacion Adicional: [view_item en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#view_item)

---
---

### `add_to_cart`

Se usa para medir cada vez que un usuario agrega un producto al carrito. Para Clevertap el evento es add_to_cart_c

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`currency`](../tutorial-extras/parametros-ecommerce.md#currency)| `string` | Si | COP | Tipo de Moneda usado  |
|[`value`](../tutorial-extras/parametros-ecommerce.md#value)| `number` | Si | 39900| Valor monetario del(los) producto(s) que se agregaron al carrito. Este valor debe ser el resultado de [`price`](../tutorial-extras/parametros-ecommerce.md#price)*[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity) |
|[`items`](../tutorial-extras/parametros-ecommerce.md#items)| `Array<Item>` | Si |  | Informacion del Producto que se agrego al carrito |

#### Parametros de `Item`

Son los parametros que lleva cada uno de los elementos del Array de  [`items`](../tutorial-extras/parametros-ecommerce.md#items) que en este caso <mark>es solamente 1, el producto que se esta agregando al carrito</mark>.

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`item_id`](../tutorial-extras/parametros-ecommerce.md#item_id)| `string` | Si | BN43535 | ID o SKU unico del producto |
|[`item_name`](../tutorial-extras/parametros-ecommerce.md#item_name)| `string` | Si | Aguardiente Desquite Artesanal x 750ml | Nombre del producto |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | AÑONUEVO | Si el producto trae asociado un cupon, especificarlo |
|[`discount`](../tutorial-extras/parametros-ecommerce.md#discount)| `number` | No | 5000 | Valor monetario del descuento |
|[`index`](../tutorial-extras/parametros-ecommerce.md#index)| `number` | No | 6 | Posicion que tenia el producto cuando se mostro en la lista previamente |
|[`item_brand`](../tutorial-extras/parametros-ecommerce.md#item_brand)| `string` | No | Desquite | Marca del producto |
|[`item_fabricante`](../tutorial-extras/parametros-ecommerce.md#item_fabricante)| `string` | No | Fabrica de Licores de Cundinamarca | Fabrica del producto |
|[`item_category`](../tutorial-extras/parametros-ecommerce.md#item_category)| `string` | No | Licores | Departamento del producto |
|[`item_category2`](../tutorial-extras/parametros-ecommerce.md#item_category2)| `string` | No | Aguardientes | Categoria del producto |
|[`item_category3`](../tutorial-extras/parametros-ecommerce.md#item_category3)| `string` | No | Aguardientes Nacionales | Subcategoria  del producto |
|[`item_list_id`](../tutorial-extras/parametros-ecommerce.md#item_list_id)| `string` | No | CV58696 | ID unico de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito |
|[`item_list_name`](../tutorial-extras/parametros-ecommerce.md#item_list_name)| `string` | No | Licores/Aguardiente| Nombre de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito |
|[`price`](../tutorial-extras/parametros-ecommerce.md#price)| `number` | No | 24000| Precio del Producto en Numero |
|[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity)| `number` | No | 1| Unidades del producto agregadas al carrito |

Documentacion Adicional: [add_to_cart en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#add_to_cart)

---
---


### `add_to_wishlist`

Se usa para medir cada vez que un usuario agrega un producto la lista de deseos. Para Clevertap el evento es add_to_wishlist_c

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`currency`](../tutorial-extras/parametros-ecommerce.md#currency)| `string` | Si | COP | Tipo de Moneda usado  |
|[`value`](../tutorial-extras/parametros-ecommerce.md#value)| `number` | Si | 39900| Valor monetario del(los) producto(s) que se agregaron a la lista de deseos. Este valor debe ser el resultado de [`price`](../tutorial-extras/parametros-ecommerce.md#price)*[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity) |
|[`items`](../tutorial-extras/parametros-ecommerce.md#items)| `Array<Item>` | Si |  | Informacion del Producto que se agrego al carrito |

#### Parametros de `Item`

Son los parametros que lleva cada uno de los elementos del Array de  [`items`](../tutorial-extras/parametros-ecommerce.md#items) que en este caso <mark>es solamente 1, el producto que se esta agregando a la lista de deseos.</mark>.

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`item_id`](../tutorial-extras/parametros-ecommerce.md#item_id)| `string` | Si | BN43535 | ID o SKU unico del producto |
|[`item_name`](../tutorial-extras/parametros-ecommerce.md#item_name)| `string` | Si | Aguardiente Desquite Artesanal x 750ml | Nombre del producto |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | AÑONUEVO | Si el producto trae asociado un cupon, especificarlo |
|[`discount`](../tutorial-extras/parametros-ecommerce.md#discount)| `number` | No | 5000 | Valor monetario del descuento |
|[`index`](../tutorial-extras/parametros-ecommerce.md#index)| `number` | No | 6 | Posicion que tenia el producto cuando se mostro en la lista previamente |
|[`item_brand`](../tutorial-extras/parametros-ecommerce.md#item_brand)| `string` | No | Desquite | Marca del producto |
|[`item_fabricante`](../tutorial-extras/parametros-ecommerce.md#item_fabricante)| `string` | No | Fabrica de Licores de Cundinamarca | Fabrica del producto |
|[`item_category`](../tutorial-extras/parametros-ecommerce.md#item_category)| `string` | No | Licores | Departamento del producto |
|[`item_category2`](../tutorial-extras/parametros-ecommerce.md#item_category2)| `string` | No | Aguardientes | Categoria del producto |
|[`item_category3`](../tutorial-extras/parametros-ecommerce.md#item_category3)| `string` | No | Aguardientes Nacionales | Subcategoria  del producto |
|[`item_list_id`](../tutorial-extras/parametros-ecommerce.md#item_list_id)| `string` | No | CV58696 | ID unico de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado a la lista de deseos |
|[`item_list_name`](../tutorial-extras/parametros-ecommerce.md#item_list_name)| `string` | No | Licores/Aguardiente| Nombre de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado a la lista de deseos |
|[`price`](../tutorial-extras/parametros-ecommerce.md#price)| `number` | No | 24000| Precio del Producto en Numero |
|[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity)| `number` | No | 1| Unidades del producto agregadas al carrito |

Documentacion Adicional: [add_to_wishlist en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#add_to_wishlist)

---
---

### `view_cart`

Se usa para medir cada vez que un usuario va a visualizar su carrito de compras con los productos agregados en el. Para Clevertap el evento es view_cart_c

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`currency`](../tutorial-extras/parametros-ecommerce.md#currency)| `string` | Si | COP | Tipo de Moneda usado  |
|[`value`](../tutorial-extras/parametros-ecommerce.md#value)| `number` | Si | 39900| Valor Total monetario del(los) producto(s) que se encuentran agregados  carrito. Este valor debe ser el resultado de la sumatoria de [`price`](../tutorial-extras/parametros-ecommerce.md#price)*[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity) de cada uno de los productos en el carrito  |
|[`items`](../tutorial-extras/parametros-ecommerce.md#items)| `Array<Item>` | Si |  | Informacion del(los) Producto(s) que se encuentran en el carrito |

#### Parametros de `Item`

Son los parametros que lleva cada uno de los elementos del Array de  [`items`](../tutorial-extras/parametros-ecommerce.md#items) que en este caso <mark>son productos que estan agregados al carrito</mark>.

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`item_id`](../tutorial-extras/parametros-ecommerce.md#item_id)| `string` | Si | BN43535 | ID o SKU unico del producto |
|[`item_name`](../tutorial-extras/parametros-ecommerce.md#item_name)| `string` | Si | Aguardiente Desquite Artesanal x 750ml | Nombre del producto |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | AÑONUEVO | Si el producto trae asociado un cupon, especificarlo |
|[`discount`](../tutorial-extras/parametros-ecommerce.md#discount)| `number` | No | 5000 | Valor monetario del descuento |
|[`index`](../tutorial-extras/parametros-ecommerce.md#index)| `number` | No | 6 | Posicion que tenia el producto cuando se mostro en la lista previamente |
|[`item_brand`](../tutorial-extras/parametros-ecommerce.md#item_brand)| `string` | No | Desquite | Marca del producto |
|[`item_fabricante`](../tutorial-extras/parametros-ecommerce.md#item_fabricante)| `string` | No | Fabrica de Licores de Cundinamarca | Fabrica del producto |
|[`item_category`](../tutorial-extras/parametros-ecommerce.md#item_category)| `string` | No | Licores | Departamento del producto |
|[`item_category2`](../tutorial-extras/parametros-ecommerce.md#item_category2)| `string` | No | Aguardientes | Categoria del producto |
|[`item_category3`](../tutorial-extras/parametros-ecommerce.md#item_category3)| `string` | No | Aguardientes Nacionales | Subcategoria  del producto |
|[`item_list_id`](../tutorial-extras/parametros-ecommerce.md#item_list_id)| `string` | No | CV58696 | ID unico de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito |
|[`item_list_name`](../tutorial-extras/parametros-ecommerce.md#item_list_name)| `string` | No | Licores/Aguardiente| Nombre de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito |
|[`price`](../tutorial-extras/parametros-ecommerce.md#price)| `number` | No | 24000| Precio del Producto en Numero |
|[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity)| `number` | No | 1| Unidades del producto agregadas al carrito |

Documentacion Adicional: [view_cart en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#view_cart)

---
---

### `remove_from_cart`

Se usa para medir cada vez que un usuario remueve un producto del carrito. Para Clevertap el evento es remove_from_cart_c

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`currency`](../tutorial-extras/parametros-ecommerce.md#currency)| `string` | Si | COP | Tipo de Moneda usado  |
|[`value`](../tutorial-extras/parametros-ecommerce.md#value)| `number` | Si | 39900 | Valor Total monetario del producto que se acaba de remover del carrito. Este valor debe ser el resultado de [`price`](../tutorial-extras/parametros-ecommerce.md#price)*[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity) del producto removido |
|[`items`](../tutorial-extras/parametros-ecommerce.md#items)| `Array<Item>` | Si |  | Informacion del Producto que se acaba de remover del carrito |

#### Parametros de `Item`

Son los parametros que lleva cada uno de los elementos del Array de  [`items`](../tutorial-extras/parametros-ecommerce.md#items) que en este caso <mark>son productos que estan agregados al carrito</mark>.

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`item_id`](../tutorial-extras/parametros-ecommerce.md#item_id)| `string` | Si | BN43535 | ID o SKU unico del producto |
|[`item_name`](../tutorial-extras/parametros-ecommerce.md#item_name)| `string` | Si | Aguardiente Desquite Artesanal x 750ml | Nombre del producto |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | AÑONUEVO | Si el producto trae asociado un cupon, especificarlo |
|[`discount`](../tutorial-extras/parametros-ecommerce.md#discount)| `number` | No | 5000 | Valor monetario del descuento |
|[`index`](../tutorial-extras/parametros-ecommerce.md#index)| `number` | No | 6 | Posicion que tenia el producto cuando se mostro en la lista previamente |
|[`item_brand`](../tutorial-extras/parametros-ecommerce.md#item_brand)| `string` | No | Desquite | Marca del producto |
|[`item_fabricante`](../tutorial-extras/parametros-ecommerce.md#item_fabricante)| `string` | No | Fabrica de Licores de Cundinamarca | Fabrica del producto |
|[`item_category`](../tutorial-extras/parametros-ecommerce.md#item_category)| `string` | No | Licores | Departamento del producto |
|[`item_category2`](../tutorial-extras/parametros-ecommerce.md#item_category2)| `string` | No | Aguardientes | Categoria del producto |
|[`item_category3`](../tutorial-extras/parametros-ecommerce.md#item_category3)| `string` | No | Aguardientes Nacionales | Subcategoria  del producto |
|[`item_list_id`](../tutorial-extras/parametros-ecommerce.md#item_list_id)| `string` | No | CV58696 | ID unico de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito y ahora el removido |
|[`item_list_name`](../tutorial-extras/parametros-ecommerce.md#item_list_name)| `string` | No | Licores/Aguardiente| Nombre de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito y ahora el removido |
|[`price`](../tutorial-extras/parametros-ecommerce.md#price)| `number` | No | 24000| Precio del Producto en Numero |
|[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity)| `number` | No | 1| Unidades del producto removidas del carrito |

Documentacion Adicional: [remove_from_cart en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#remove_from_cart)

---
---

### `begin_checkout`

Se usa para medir cada vez que el usuario inicia el proceso de checkout con los productos que tenia agregados al carrito. (Desde la visualizacion de carrito, el avanzar al siguiente paso del proceso )

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`currency`](../tutorial-extras/parametros-ecommerce.md#currency)| `string` | Si | COP | Tipo de Moneda usado  |
|[`value`](../tutorial-extras/parametros-ecommerce.md#value)| `number` | Si | 39900 | Valor Total monetario del(los) producto(s) que se encuentran en el carrito y con los cuales se esta haciendo checkout. Este valor debe ser el resultado de la sumatoria de [`price`](../tutorial-extras/parametros-ecommerce.md#price)*[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity) de cada uno de los productos en el carrito  |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | PRIMERAVEZ | Si el usuario aplico un cupon especificar cual. |
|[`items`](../tutorial-extras/parametros-ecommerce.md#items)| `Array<Item>` | Si |  | Informacion del(los) Producto(s) que se encuentran en el carrito y con los cuales se esta haciendo checkout |

#### Parametros de `Item`

Son los parametros que lleva cada uno de los elementos del Array de  [`items`](../tutorial-extras/parametros-ecommerce.md#items) que en este caso <mark>son productos que estan agregados al carrito y con los cuales se esta haciendo checkout</mark>.

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`item_id`](../tutorial-extras/parametros-ecommerce.md#item_id)| `string` | Si | BN43535 | ID o SKU unico del producto |
|[`item_name`](../tutorial-extras/parametros-ecommerce.md#item_name)| `string` | Si | Aguardiente Desquite Artesanal x 750ml | Nombre del producto |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | AÑONUEVO | Si el producto trae asociado un cupon, especificarlo |
|[`discount`](../tutorial-extras/parametros-ecommerce.md#discount)| `number` | No | 5000 | Valor monetario del descuento |
|[`index`](../tutorial-extras/parametros-ecommerce.md#index)| `number` | No | 6 | Posicion que tenia el producto cuando se mostro en la lista previamente |
|[`item_brand`](../tutorial-extras/parametros-ecommerce.md#item_brand)| `string` | No | Desquite | Marca del producto |
|[`item_fabricante`](../tutorial-extras/parametros-ecommerce.md#item_fabricante)| `string` | No | Fabrica de Licores de Cundinamarca | Fabrica del producto |
|[`item_category`](../tutorial-extras/parametros-ecommerce.md#item_category)| `string` | No | Licores | Departamento del producto |
|[`item_category2`](../tutorial-extras/parametros-ecommerce.md#item_category2)| `string` | No | Aguardientes | Categoria del producto |
|[`item_category3`](../tutorial-extras/parametros-ecommerce.md#item_category3)| `string` | No | Aguardientes Nacionales | Subcategoria  del producto |
|[`item_list_id`](../tutorial-extras/parametros-ecommerce.md#item_list_id)| `string` | No | CV58696 | ID unico de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito y ahora el checkout |
|[`item_list_name`](../tutorial-extras/parametros-ecommerce.md#item_list_name)| `string` | No | Licores/Aguardiente| Nombre de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito y ahora el checkout |
|[`price`](../tutorial-extras/parametros-ecommerce.md#price)| `number` | No | 24000| Precio del Producto en Numero |
|[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity)| `number` | No | 1| Unidades del producto agregadas al carrito |

Documentacion Adicional: [begin_checkout en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#begin_checkout)

---
---

### `add_shipping_info`

Se usa para medir cada vez que el usuario agrega ( no tenia ) o confirma ( ya tenia y decide avanzar con la que ya esta cargada ) la informacion de envio

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`currency`](../tutorial-extras/parametros-ecommerce.md#currency)| `string` | Si | COP | Tipo de Moneda usado  |
|[`value`](../tutorial-extras/parametros-ecommerce.md#value)| `number` | Si | 39900 | Valor Total monetario del(los) producto(s) que se encuentran en el carrito y con los cuales se esta haciendo checkout. Este valor debe ser el resultado de la sumatoria de [`price`](../tutorial-extras/parametros-ecommerce.md#price)*[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity) de cada uno de los productos en el carrito  |
|[`shipping_tier`](../tutorial-extras/parametros-ecommerce.md#shipping_tier)| `string` | No | Aire | Tipo de envio, puede ser tierra, aire,mar, o Next-day, Free, premium, etc |
|[`items`](../tutorial-extras/parametros-ecommerce.md#items)| `Array<Item>` | Si |  | Informacion del(los) Producto(s) que se encuentran en el carrito y con los cuales se esta haciendo checkout |

#### Parametros de `Item`

Son los parametros que lleva cada uno de los elementos del Array de  [`items`](../tutorial-extras/parametros-ecommerce.md#items) que en este caso <mark>son productos que estan agregados al carrito y con los cuales se esta haciendo checkout</mark>.

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`item_id`](../tutorial-extras/parametros-ecommerce.md#item_id)| `string` | Si | BN43535 | ID o SKU unico del producto |
|[`item_name`](../tutorial-extras/parametros-ecommerce.md#item_name)| `string` | Si | Aguardiente Desquite Artesanal x 750ml | Nombre del producto |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | AÑONUEVO | Si el producto trae asociado un cupon, especificarlo |
|[`discount`](../tutorial-extras/parametros-ecommerce.md#discount)| `number` | No | 5000 | Valor monetario del descuento |
|[`index`](../tutorial-extras/parametros-ecommerce.md#index)| `number` | No | 6 | Posicion que tenia el producto cuando se mostro en la lista previamente |
|[`item_brand`](../tutorial-extras/parametros-ecommerce.md#item_brand)| `string` | No | Desquite | Marca del producto |
|[`item_fabricante`](../tutorial-extras/parametros-ecommerce.md#item_fabricante)| `string` | No | Fabrica de Licores de Cundinamarca | Fabrica del producto |
|[`item_category`](../tutorial-extras/parametros-ecommerce.md#item_category)| `string` | No | Licores | Departamento del producto |
|[`item_category2`](../tutorial-extras/parametros-ecommerce.md#item_category2)| `string` | No | Aguardientes | Categoria del producto |
|[`item_category3`](../tutorial-extras/parametros-ecommerce.md#item_category3)| `string` | No | Aguardientes Nacionales | Subcategoria  del producto |
|[`item_list_id`](../tutorial-extras/parametros-ecommerce.md#item_list_id)| `string` | No | CV58696 | ID unico de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito y ahora el checkout |
|[`item_list_name`](../tutorial-extras/parametros-ecommerce.md#item_list_name)| `string` | No | Licores/Aguardiente| Nombre de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito y ahora el checkout |
|[`price`](../tutorial-extras/parametros-ecommerce.md#price)| `number` | No | 24000| Precio del Producto en Numero |
|[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity)| `number` | No | 1| Unidades del producto agregadas al carrito |

Documentacion Adicional: [add_shipping_info en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#add_shipping_info)

---
---


### `add_payment_info`

Se usa para medir cada vez que el usuario agrega ( no tenia ) o confirma ( ya tenia y decide avanzar con la que ya esta cargada ) la informacion de pago

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`currency`](../tutorial-extras/parametros-ecommerce.md#currency)| `string` | Si | COP | Tipo de Moneda usado  |
|[`value`](../tutorial-extras/parametros-ecommerce.md#value)| `number` | Si | 39900 | Valor Total monetario del(los) producto(s) que se encuentran en el carrito y con los cuales se esta haciendo checkout. Este valor debe ser el resultado de la sumatoria de [`price`](../tutorial-extras/parametros-ecommerce.md#price)*[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity) de cada uno de los productos en el carrito  |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | PRIMERAVEZ | Si el usuario aplico un cupon especificar cual. |
|[`payment_type`](../tutorial-extras/parametros-ecommerce.md#payment_type)| `string` | No | tarjeta_credito | Tipo o metodo de pago ( PSE, Baloto, etc) |
|[`positive_balance`](../tutorial-extras/parametros-ecommerce.md#positive_balance)| `number` | No | 4500 | Valor del saldo positivo que tenga el usuario y que puede usar para pagar |
|[`marking_value`](../tutorial-extras/parametros-ecommerce.md#marking_value)| `number` | No | 4500 | Por definir extactamente que es esto |
|[`items`](../tutorial-extras/parametros-ecommerce.md#items)| `Array<Item>` | Si |  | Informacion del(los) Producto(s) que se encuentran en el carrito y con los cuales se esta haciendo checkout |

#### Parametros de `Item`

Son los parametros que lleva cada uno de los elementos del Array de  [`items`](../tutorial-extras/parametros-ecommerce.md#items) que en este caso <mark>son productos que estan agregados al carrito y con los cuales se esta haciendo checkout</mark>.

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`item_id`](../tutorial-extras/parametros-ecommerce.md#item_id)| `string` | Si | BN43535 | ID o SKU unico del producto |
|[`item_name`](../tutorial-extras/parametros-ecommerce.md#item_name)| `string` | Si | Aguardiente Desquite Artesanal x 750ml | Nombre del producto |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | AÑONUEVO | Si el producto trae asociado un cupon, especificarlo |
|[`discount`](../tutorial-extras/parametros-ecommerce.md#discount)| `number` | No | 5000 | Valor monetario del descuento |
|[`index`](../tutorial-extras/parametros-ecommerce.md#index)| `number` | No | 6 | Posicion que tenia el producto cuando se mostro en la lista previamente |
|[`item_brand`](../tutorial-extras/parametros-ecommerce.md#item_brand)| `string` | No | Desquite | Marca del producto |
|[`item_fabricante`](../tutorial-extras/parametros-ecommerce.md#item_fabricante)| `string` | No | Fabrica de Licores de Cundinamarca | Fabrica del producto |
|[`item_category`](../tutorial-extras/parametros-ecommerce.md#item_category)| `string` | No | Licores | Departamento del producto |
|[`item_category2`](../tutorial-extras/parametros-ecommerce.md#item_category2)| `string` | No | Aguardientes | Categoria del producto |
|[`item_category3`](../tutorial-extras/parametros-ecommerce.md#item_category3)| `string` | No | Aguardientes Nacionales | Subcategoria  del producto |
|[`item_list_id`](../tutorial-extras/parametros-ecommerce.md#item_list_id)| `string` | No | CV58696 | ID unico de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito y ahora el checkout |
|[`item_list_name`](../tutorial-extras/parametros-ecommerce.md#item_list_name)| `string` | No | Licores/Aguardiente| Nombre de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito y ahora el checkout |
|[`price`](../tutorial-extras/parametros-ecommerce.md#price)| `number` | No | 24000| Precio del Producto en Numero |
|[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity)| `number` | No | 1| Unidades del producto agregadas al carrito |

Documentacion Adicional: [add_payment_info en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#add_payment_info)

---
---

### `ir_a_pasarela_pago`

Se usa para medir cada vez que el usuario da click para ir a la pasarela de pago a realizar su pago.<mark>_Este es un evento personalizado. No hace parte de los eventos estandar_</mark>.

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`currency`](../tutorial-extras/parametros-ecommerce.md#currency)| `string` | Si | COP | Tipo de Moneda usado  |
|[`value`](../tutorial-extras/parametros-ecommerce.md#value)| `number` | Si | 39900 | Valor Total monetario del(los) producto(s) que se encuentran en el carrito y con los cuales se esta haciendo checkout. Este valor debe ser el resultado de la sumatoria de [`price`](../tutorial-extras/parametros-ecommerce.md#price)*[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity) de cada uno de los productos en el carrito  |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | PRIMERAVEZ | Si el usuario aplico un cupon especificar cual. |
|[`items`](../tutorial-extras/parametros-ecommerce.md#items)| `Array<Item>` | Si |  | Informacion del(los) Producto(s) que se encuentran en el carrito y con los cuales se esta haciendo checkout |

#### Parametros de `Item`

Son los parametros que lleva cada uno de los elementos del Array de  [`items`](../tutorial-extras/parametros-ecommerce.md#items) que en este caso <mark>son productos que estan agregados al carrito y con los cuales se esta haciendo checkout</mark>.

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`item_id`](../tutorial-extras/parametros-ecommerce.md#item_id)| `string` | Si | BN43535 | ID o SKU unico del producto |
|[`item_name`](../tutorial-extras/parametros-ecommerce.md#item_name)| `string` | Si | Aguardiente Desquite Artesanal x 750ml | Nombre del producto |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | AÑONUEVO | Si el producto trae asociado un cupon, especificarlo |
|[`discount`](../tutorial-extras/parametros-ecommerce.md#discount)| `number` | No | 5000 | Valor monetario del descuento |
|[`index`](../tutorial-extras/parametros-ecommerce.md#index)| `number` | No | 6 | Posicion que tenia el producto cuando se mostro en la lista previamente |
|[`item_brand`](../tutorial-extras/parametros-ecommerce.md#item_brand)| `string` | No | Desquite | Marca del producto |
|[`item_fabricante`](../tutorial-extras/parametros-ecommerce.md#item_fabricante)| `string` | No | Fabrica de Licores de Cundinamarca | Fabrica del producto |
|[`item_category`](../tutorial-extras/parametros-ecommerce.md#item_category)| `string` | No | Licores | Departamento del producto |
|[`item_category2`](../tutorial-extras/parametros-ecommerce.md#item_category2)| `string` | No | Aguardientes | Categoria del producto |
|[`item_category3`](../tutorial-extras/parametros-ecommerce.md#item_category3)| `string` | No | Aguardientes Nacionales | Subcategoria  del producto |
|[`item_list_id`](../tutorial-extras/parametros-ecommerce.md#item_list_id)| `string` | No | CV58696 | ID unico de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito y ahora el checkout |
|[`item_list_name`](../tutorial-extras/parametros-ecommerce.md#item_list_name)| `string` | No | Licores/Aguardiente| Nombre de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito y ahora el checkout |
|[`price`](../tutorial-extras/parametros-ecommerce.md#price)| `number` | No | 24000| Precio del Producto en Numero |
|[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity)| `number` | No | 1| Unidades del producto agregadas al carrito |


---
---

### `purchase`

Se usa para medir cada vez que el usuario ha completado exitosamente su compra. <mark>_Este evento SOLO debe dispararse si hubo una transaccion exitosa de DINERO ( Ingreso )_</mark>. Para Clevertap el evento se registra como Charged.

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`currency`](../tutorial-extras/parametros-ecommerce.md#currency)| `string` | Si | COP | Tipo de Moneda usado  |
|[`value`](../tutorial-extras/parametros-ecommerce.md#value)| `number` | Si | 39900 | Valor Total monetario del(los) producto(s) comprados. Este valor debe ser el resultado de la sumatoria de [`price`](../tutorial-extras/parametros-ecommerce.md#price)*[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity) de cada uno de los productos comprados. NO incluir valor de `shipping` o `tax`  |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | PRIMERAVEZ | Si el usuario aplico un cupon especificar cual. |
|[`transaction_id`](../tutorial-extras/parametros-ecommerce.md#transaction_id)| `string` | Si | 458456 | ID unico de la transaccion |
|[`shipping`](../tutorial-extras/parametros-ecommerce.md#shipping)| `number` | No | 10000 | Valor Monetario del Envio  |
|[`tax`](../tutorial-extras/parametros-ecommerce.md#tax)| `number` | No | 5500 | Valor Monetario del Impuesto |
|[`positive_balance`](../tutorial-extras/parametros-ecommerce.md#positive_balance)| `number` | No | 4500 | Valor del saldo positivo que tenga el usuario y que puede usar para pagar |
|[`marking_value`](../tutorial-extras/parametros-ecommerce.md#marking_value)| `number` | No | 4500 | Por definir extactamente que es esto |
|[`items`](../tutorial-extras/parametros-ecommerce.md#items)| `Array<Item>` | Si |  | Informacion del(los) Producto(s) que se compraron |

#### Parametros de `Item`

Son los parametros que lleva cada uno de los elementos del Array de  [`items`](../tutorial-extras/parametros-ecommerce.md#items) que en este caso <mark>son productos fueron comprados</mark>.

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`item_id`](../tutorial-extras/parametros-ecommerce.md#item_id)| `string` | Si | BN43535 | ID o SKU unico del producto |
|[`item_name`](../tutorial-extras/parametros-ecommerce.md#item_name)| `string` | Si | Aguardiente Desquite Artesanal x 750ml | Nombre del producto |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | AÑONUEVO | Si el producto trae asociado un cupon, especificarlo |
|[`discount`](../tutorial-extras/parametros-ecommerce.md#discount)| `number` | No | 5000 | Valor monetario del descuento |
|[`index`](../tutorial-extras/parametros-ecommerce.md#index)| `number` | No | 6 | Posicion que tenia el producto cuando se mostro en la lista previamente |
|[`item_brand`](../tutorial-extras/parametros-ecommerce.md#item_brand)| `string` | No | Desquite | Marca del producto |
|[`item_fabricante`](../tutorial-extras/parametros-ecommerce.md#item_fabricante)| `string` | No | Fabrica de Licores de Cundinamarca | Fabrica del producto |
|[`item_category`](../tutorial-extras/parametros-ecommerce.md#item_category)| `string` | No | Licores | Departamento del producto |
|[`item_category2`](../tutorial-extras/parametros-ecommerce.md#item_category2)| `string` | No | Aguardientes | Categoria del producto |
|[`item_category3`](../tutorial-extras/parametros-ecommerce.md#item_category3)| `string` | No | Aguardientes Nacionales | Subcategoria  del producto |
|[`item_list_id`](../tutorial-extras/parametros-ecommerce.md#item_list_id)| `string` | No | CV58696 | ID unico de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito y ahora el checkout |
|[`item_list_name`](../tutorial-extras/parametros-ecommerce.md#item_list_name)| `string` | No | Licores/Aguardiente| Nombre de la lista - categoria donde el produdcto estaba siendo mostrado y que genero el agregado al carrito y ahora el checkout |
|[`price`](../tutorial-extras/parametros-ecommerce.md#price)| `number` | No | 24000| Precio del Producto en Numero |
|[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity)| `number` | No | 1| Unidades del producto agregadas al carrito |

Documentacion Adicional: [purchase en GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtag#purchase)

---
---

### `view_promotion`

Se usa para medir clics en Banners o Carruseles que se suponen llevan a listas o grillas de productos.

#### Parametros

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`creative_name`](../tutorial-extras/parametros-ecommerce.md#creative_name)| `string` | No | banner_azul | Nombre del banner o pieza  |
|[`creative_slot`](../tutorial-extras/parametros-ecommerce.md#creative_slot)| `string` | No | principal_licores | Nombre de ubicacion ( espacio ) donde se esta mostrando el banner o pieza |
|[`promotion_id`](../tutorial-extras/parametros-ecommerce.md#promotion_id)| `string` | No | licores_agosto_50 | ID de la promocion o actividad que esta comunicando el banner |
|[`promotion_name`](../tutorial-extras/parametros-ecommerce.md#promotion_name)| `string` | No | 50Descuento | Nombre de la promocion o actividad que esta comunicando el banner |
|[`action`](../tutorial-extras/parametros-ecommerce.md#action)| `string` | No | run | Accion del Banner, si se mostro, se cerro o se clickeo |
|[`items`](../tutorial-extras/parametros-ecommerce.md#items)| `Array<Item>` | Si |  | Informacion del(los) Producto(s) que estan asociados a la promocion o actividad que impulsa el banner |

#### Parametros de `Item`

Son los parametros que lleva cada uno de los elementos del Array de  [`items`](../tutorial-extras/parametros-ecommerce.md#items) que en este caso <mark>son productos que estan asociados a la promocion o actividad que el banner impulsa</mark>.

| Nombre | Tipo | Obligatorio | Ejemplo | Descripcion |
| --- | --- | --- | --- | --- |
|[`item_id`](../tutorial-extras/parametros-ecommerce.md#item_id)| `string` | Si | BN43535 | ID o SKU unico del producto |
|[`item_name`](../tutorial-extras/parametros-ecommerce.md#item_name)| `string` | Si | Aguardiente Desquite Artesanal x 750ml | Nombre del producto |
|[`coupon`](../tutorial-extras/parametros-ecommerce.md#coupon)| `string` | No | AÑONUEVO | Si el producto trae asociado un cupon, especificarlo |
|[`discount`](../tutorial-extras/parametros-ecommerce.md#discount)| `number` | No | 5000 | Valor monetario del descuento |
|[`index`](../tutorial-extras/parametros-ecommerce.md#index)| `number` | No | 6 | Posicion que tenia el producto cuando se mostro en la lista previamente |
|[`item_brand`](../tutorial-extras/parametros-ecommerce.md#item_brand)| `string` | No | Desquite | Marca del producto |
|[`item_fabricante`](../tutorial-extras/parametros-ecommerce.md#item_fabricante)| `string` | No | Fabrica de Licores de Cundinamarca | Fabrica del producto |
|[`item_category`](../tutorial-extras/parametros-ecommerce.md#item_category)| `string` | No | Licores | Departamento del producto |
|[`item_category2`](../tutorial-extras/parametros-ecommerce.md#item_category2)| `string` | No | Aguardientes | Categoria del producto |
|[`item_category3`](../tutorial-extras/parametros-ecommerce.md#item_category3)| `string` | No | Aguardientes Nacionales | Subcategoria  del producto |
|[`promotion_id`](../tutorial-extras/parametros-ecommerce.md#promotion_id)| `string` | No | licores_agosto_50 | ID de la promocion o actividad en la cual este producto esta siendo impulsado |
|[`promotion_name`](../tutorial-extras/parametros-ecommerce.md#promotion_name)| `string` | No | 50Descuento | Nombre de la promocion o actividad en la cual este producto esta siendo impulsado |
|[`price`](../tutorial-extras/parametros-ecommerce.md#price)| `number` | No | 24000| Precio del Producto en Numero |
|[`quantity`](../tutorial-extras/parametros-ecommerce.md#quantity)| `number` | No | 1| Unidades del producto  |


---
---