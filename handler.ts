import { BatchOrderEvent, Order, OrderBatched } from './lib/types'

const handler = (event: BatchOrderEvent, context: any): Order[] => {
  try {
    const batch = JSON.parse(event.body) as OrderBatched;
    return batch.ORDERS.filter((order: Order) => order.O_ID === order.OMS_ORDER_ID)
  } catch (error) {
    throw new Error('Bad Request - Unable to process batch.');
  }
}

module.exports = handler
