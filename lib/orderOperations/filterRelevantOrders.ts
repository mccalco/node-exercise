import { Order } from '../types';

export const filterRelevantOrders = (orders: Order[]): Order[] => {
  return orders.filter((order: Order) => order.O_ID === order.OMS_ORDER_ID);
}