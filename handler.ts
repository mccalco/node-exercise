import { BatchOrderEvent } from './lib/types'

const handler = (event: BatchOrderEvent, context: any) => {
  return JSON.parse(event.body)
}

module.exports = handler
