const fs = require('fs')
const handler = require('./dist/handler')

const event = {
  body: fs.readFileSync('./fixtures/shipments.json', 'utf8')
}

const context = {
  accountReference: 'acme'
}

describe('Handler', () => {
  it('Unexpected input throws', () => {
    expect(() => {
      const invalidEvent = {
        body: "{]"
      }
      handler(invalidEvent, context)
    }).toThrow('Bad Request - Unable to process batch.');
  })

  it('Removes orders that should not be processed', () => {
    const [fulfill, cancel] = handler(event, context)

    const orders = [...fulfill, ...cancel]
    expect(orders.length).toEqual(2)

    expect(orders.some((order) => order.O_ID === "50022251")).toBe(false)
  })

  it('Split orders into fulfillments/cancellations', () => {
    const [fulfill, cancel] = handler(event, context)

    expect(fulfill.length).toEqual(1)
    expect(cancel.length).toEqual(1)

    const [fulfilOrder] = fulfill
    const [cancelOrder] = cancel
    expect(fulfilOrder.O_ID).toEqual('12345')
    expect(cancelOrder.O_ID).toEqual('500324412')
  })
})