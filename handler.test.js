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
    const orders = handler(event, context)

    expect(orders.length).toEqual(2)

    expect(orders.some((order) => order.O_ID === "50022251")).toBe(false)
  })
})