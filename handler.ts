import { BatchOrderEvent, Order, OrderBatched } from './lib/types'
import { filterRelevantOrders, categoriseOrders } from './lib/orderOperations'

const handler = (event: BatchOrderEvent, context: any): [Order[], Order[]] => {
  try {
    const batch = JSON.parse(event.body) as OrderBatched;
    const relevantOrders: Order[] = filterRelevantOrders(batch.ORDERS)
    const [fulfill, cancel] = categoriseOrders(relevantOrders)

    return [fulfill, cancel]
  } catch (error) {
    throw new Error('Bad Request - Unable to process batch.');
  }
}

module.exports = handler
