import { BatchOrderEvent } from './lib/types'

const handler = (event: BatchOrderEvent, context: any) => {
  return event.body
}

module.exports = handler
