import { BatchOrderEvent, Order, OrderBatched } from './lib/types'
import { filterRelevantOrders } from './lib/orderOperations'

const handler = (event: BatchOrderEvent, context: any): Order[] => {
  try {
    const batch = JSON.parse(event.body) as OrderBatched;
    const relevantOrders: Order[] = filterRelevantOrders(batch.ORDERS);

    return relevantOrders;
  } catch (error) {
    throw new Error('Bad Request - Unable to process batch.');
  }
}

module.exports = handler
