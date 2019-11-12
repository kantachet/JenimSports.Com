import Link from 'next/link'
import { Card, Image } from 'semantic-ui-react'

const mapProductsToItems = products =>
  products.map(({ id, name,cny,usd,thb, price, image }) => {
    return {
      childKey: id,
      image,
      header: name,
      meta: thb + ' , ~' + usd + '  , ~' + cny,
      fluid: true,
      href: `/product?id=${id}`
    }
  })

export default ({ products }) => (
  <Card.Group items={mapProductsToItems(products)} itemsPerRow="3" stackable />
)
