import { BatchOrderEvent, OrderBatched } from './lib/types'

const handler = (event: BatchOrderEvent, context: any) => {
  const batch = JSON.parse(event.body) as OrderBatched;
  return batch;
}

module.exports = handler
