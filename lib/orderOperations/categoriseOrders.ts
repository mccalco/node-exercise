import { LineItem, Order } from '../types';

export const categoriseOrders = (orders: Order[]): [Order[], Order[]] => {
  const fulfillOrders: Order[] = [];
  const cancelOrders: Order[] = [];

  orders.forEach((order: Order) => {
    if (order.ORDER_LINES.some((line: LineItem) => !!parseInt(line.QUANTITY))) {
      fulfillOrders.push(order)
    }
    else {
      cancelOrders.push(order)
    }
  })
  
  return [fulfillOrders, cancelOrders];
}