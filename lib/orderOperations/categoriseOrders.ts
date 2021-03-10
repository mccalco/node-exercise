import { partition } from 'lodash';
import { LineItem, Order } from '../types';

const isForFulfillment = (order: Order): Boolean => {
  return order.ORDER_LINES.some((line: LineItem) => !!parseInt(line.QUANTITY))
}

export const categoriseOrders = (orders: Order[]): [Order[], Order[]] => {
  // Referenced lodash documentation can be found here: https://lodash.com/docs/4.17.15#partition
  const [fulfillOrders, cancelOrders] = partition(orders, isForFulfillment)
  return [fulfillOrders, cancelOrders];
}