# Parametros Ecommerce


### `currency`

Tipo de moneda usado en el evento de ecommerce.

*Ejemplo:* COP, MXN, USD, etc.

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)


### `value`

Valor numerico monetario del total de los productos involucrados en el evento de ecommerce.

*Ejemplo:* 12000

**Se usa en los siguientes eventos:**

- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)


### `items`

Array o Lista de los productos involucrados en el evento de commerce. Cada item de dicha lista, que se supone es un producto,  tiene sus parametros.

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)


### `item_id`

ID o SKU unico del producto involucrado en el evento de ecommerce. Es un parametro que debe llevar cada item de la lista que compone el parametro [`item`](./parametros-ecommerce.md#items)

*Ejemplo:* BN43535

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `item_name`

Nombre del producto involucrado en el evento de ecommerce.Es un parametro que debe llevar cada item de la lista que compone el parametro [`item`](./parametros-ecommerce.md#items)

*Ejemplo:* Aguardiente Desquite Artesanal x 750ml

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `coupon`

Cupon que se estaria aplicando al producto involucrado en el evento de ecommerce.Es un parametro que debe llevar cada item de la lista que compone el parametro [`item`](./parametros-ecommerce.md#items)

*Ejemplo:* AÑONUEVO

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `discount`

Descuento en valor monetario que se estaria aplicando al producto involucrado en el evento de ecommerce.Es un parametro que debe llevar cada item de la lista que compone el parametro [`item`](./parametros-ecommerce.md#items)

*Ejemplo:* 5000

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `index`

Posicion que tenia el producto cuando se mostro en una lista previamente.Es un parametro que debe llevar cada item de la lista que compone el parametro [`item`](./parametros-ecommerce.md#items)

*Ejemplo:* 6

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `item_brand`

Marca del producto involucrado en el evento de ecommerce.Es un parametro que debe llevar cada item de la lista que compone el parametro [`item`](./parametros-ecommerce.md#items)

*Ejemplo:* Nectar

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `item_fabricante`

Fabricante del producto involucrado en el evento de ecommerce.Es un parametro que debe llevar cada item de la lista que compone el parametro [`item`](./parametros-ecommerce.md#items)

*Ejemplo:* Fabrica de licores de Cundinamarca

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `item_category`

Departamento del producto involucrado en el evento de ecommerce.Es un parametro que debe llevar cada item de la lista que compone el parametro [`item`](./parametros-ecommerce.md#items)

*Ejemplo:* Licores

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `item_category2`

Categoria del producto involucrado en el evento de ecommerce.Es un parametro que debe llevar cada item de la lista que compone el parametro [`item`](./parametros-ecommerce.md#items)

*Ejemplo:* Aguardientes

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `item_category3`

Subcategoria producto involucrado en el evento de ecommerce.Es un parametro que debe llevar cada item de la lista que compone el parametro [`item`](./parametros-ecommerce.md#items)

*Ejemplo:* Aguardientes Nacionales

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `item_list_id`

ID unico de la lista - grilla donde el produdcto involucrado en el evento de ecommerce esta / estaba siendo mostrado.Es un parametro que debe llevar cada item de la lista que compone el parametro [`item`](./parametros-ecommerce.md#items)

*Ejemplo:* CV58696

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `item_list_name`

Nombre de la lista - grilla donde el produdcto involucrado en el evento de ecommerce esta / estaba siendo mostrado.Es un parametro que debe llevar cada item de la lista que compone el parametro [`item`](./parametros-ecommerce.md#items)

*Ejemplo:* Licores/Aguardientes

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `price`

Precio del producto involucrado en el evento de Ecommerce.Es un parametro que debe llevar cada item de la lista que compone el parametro [`item`](./parametros-ecommerce.md#items)

*Ejemplo:* 36000

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `quantity`

Cantidad de unidades del producto involucrado en el evento de Ecommerce.Es un parametro que debe llevar cada item de la lista que compone el parametro [`item`](./parametros-ecommerce.md#items)

*Ejemplo:* 1

**Se usa en los siguientes eventos:**

- [`view_item_list`](../tutorial-basics/eventos-ecommerce.md#view_item_list)
- [`view_item`](../tutorial-basics/eventos-ecommerce.md#view_item)
- [`add_to_cart`](../tutorial-basics/eventos-ecommerce.md#add_to_cart)
- [`add_to_whishlist`](../tutorial-basics/eventos-ecommerce.md#add_to_wishlist)
- [`view_cart`](../tutorial-basics/eventos-ecommerce.md#view_cart)
- [`remove_from_cart`](../tutorial-basics/eventos-ecommerce.md#remove_from_cart)
- [`begin_checkout`](../tutorial-basics/eventos-ecommerce.md#begin_checkout)
- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)
- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`ir_a_pasarela_pago`](../tutorial-basics/eventos-ecommerce.md#ir_a_pasarela_pago)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)
- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `shipping_tier`

Tipo de Envio seleccionado para el despacho de la compra.

*Ejemplo:* Aire

**Se usa en los siguientes eventos:**

- [`add_shipping_info`](../tutorial-basics/eventos-ecommerce.md#add_shipping_info)

### `payment_type`

Metodo de pago seleccionado para pagar la compra.

*Ejemplo:* tarjeta_credito

**Se usa en los siguientes eventos:**

- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)

### `transaction_id`

ID unico de la transaccion una vez esta ha sido completada con exito.

*Ejemplo:* 458456

**Se usa en los siguientes eventos:**

- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)

### `shipping`

Costo monetario del envio de los productos comprados

*Ejemplo:* 10000

**Se usa en los siguientes eventos:**

- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)

### `tax`

Costo monetario de los impuestos asociados a la transaccion

*Ejemplo:* 5000

**Se usa en los siguientes eventos:**

- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)

### `creative_name`

Nombre del banner o Pieza con el que se esta comunicando una promocion

*Ejemplo:* banner_azul

**Se usa en los siguientes eventos:**

- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `creative_slot`

Nombre de ubicacion ( espacio ) donde se esta mostrando el banner o pieza con el que se esta comunicando una promocion

*Ejemplo:* principal_licores

**Se usa en los siguientes eventos:**

- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `promotion_id`

ID de la promocion o actividad que esta comunicando en el banner o pieza.

*Ejemplo:* licores_agosto_50

**Se usa en los siguientes eventos:**

- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `promotion_name`

Nombre de la promocion o actividad que esta comunicando el banner

*Ejemplo:* 50Descuento

**Se usa en los siguientes eventos:**

- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)

### `action`

Accion realizada con el banner que esta impulsando la promocion solo puede tomar uno de 3 valores.

*Ejemplo:* open, close, run ( si se clickea )

**Se usa en los siguientes eventos:**

- [`view_promotion`](../tutorial-basics/eventos-ecommerce.md#view_promotion)


### `positive_balance`

Valor del saldo positivo cargado en su cuenta que tenga el usuario y que puede usar para pagar

*Ejemplo:* 12500

**Se usa en los siguientes eventos:**

- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)

### `marking_value`

Por definir que es este parametro su definicio

*Ejemplo:* 12500

**Se usa en los siguientes eventos:**

- [`add_payment_info`](../tutorial-basics/eventos-ecommerce.md#add_payment_info)
- [`purchase`](../tutorial-basics/eventos-ecommerce.md#purchase)