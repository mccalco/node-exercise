import { BatchOrderEvent, OrderBatched } from './lib/types'

const handler = (event: BatchOrderEvent, context: any) => {
  try {
    const batch = JSON.parse(event.body) as OrderBatched;
    return batch;
  } catch (error) {
    throw new Error('Bad Request - Unable to process batch.');
  }
}

module.exports = handler
