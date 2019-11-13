import Link from 'next/link';
import { Card, Image } from 'semantic-ui-react';

const mapGroupsToItems = (groups) =>
	groups.map(({ id, name, cny, usd, thb, image }) => {
		return {
			childKey: id,
			image: '/static/images/products/' + name + '/cover.jpg',
			header: name,
			meta: thb + ' , ~' + usd + '  , ~' + cny,
			fluid: true,
			href: `/group?name=${name}`
		};
	});

export default ({ groups }) => <Card.Group items={mapGroupsToItems(groups)} itemsPerRow="3" stackable />;
