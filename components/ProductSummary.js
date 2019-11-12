import { Item, Label } from 'semantic-ui-react'

import AddToCart from './AddToCart'

export default ({ id, image, name, thb, code }) => (
  <Item.Group>
    <Item>
      <Item.Image size="medium" src={image} />

      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Description>
          <p>{thb}</p>

          <Label>CODE: {code}</Label>
        </Item.Description>
        <Item.Extra>
          <AddToCart productId={id} />
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)
