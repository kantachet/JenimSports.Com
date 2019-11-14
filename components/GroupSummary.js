import { Item, Label } from 'semantic-ui-react';

import AddToCart from './AddToCart';

export default ({ id, name, slug,detail, desc, cny, usd, thb, products }) => (
	<Item.Group>
		<Item>
			<Item.Image size="large" src={'/images/products/' + slug + '/cover.jpg'} />
			<Item.Content>
				<Item.Header>{name}</Item.Header>
				<Item.Description>
					<p>{thb + ' , ~' + usd + '  , ~' + cny}</p>
					<Label>{detail}</Label>
				</Item.Description>
				<Item.Extra>
					<AddToCart productId={id} />
				</Item.Extra>
			</Item.Content>
		</Item>
	</Item.Group>
);
