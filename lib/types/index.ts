interface BatchOrderEvent {
  body: string;
}

interface OrderBatched {
  ORDERS: Order[];
}

interface Order {
  O_ID: string;
  TRACKING_URL: string;
  S_ID: string;
  OMS_ORDER_ID: string;
  ORDER_LINES: LineItem[];
}

interface LineItem {
  OL_ID: string;
  STATUS: string;
  DESCRIPTION: string;
  SKU: string;
  QUANTITY: string;
  O_QTY: string;
}

export {
  BatchOrderEvent,
  OrderBatched,
  Order,
  LineItem
}