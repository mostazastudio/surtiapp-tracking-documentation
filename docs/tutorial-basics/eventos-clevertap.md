---
sidebar_position: 4
---

# Eventos Clevertap

CleverTap por defecto mide los siguientes eventos cuando se integra el SDK, <mark>por lo que NO habria que configurarlos manualmente</mark>

Eventos por defecto Clever Tap: [Eventos de Sistema](https://developer.clevertap.com/docs/events#system-events)


### `Charged`

Para medir las ventas Clevertap recomienda usar el evento Charged. Esto debido a que tiene su propia estructura  para especificar los prodcutos vendidos junto con sus categorias, valor, etc. Ademas permite automaticamente marcar un usuario que hizo una compra como "cliente" y diferenciar usuarios entre "clientes" vs "no-clientes"

En este caso recomendamos trabajr los 2 eventos. El `Charged` que suigiere clevertap y el `purchase` que venimos trabajando desde analytics.

Evento Charged para clevertap: [Evento Charged](https://developer.clevertap.com/docs/events#recording-items-sold) 
