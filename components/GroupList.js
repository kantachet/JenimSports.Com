import Link from 'next/link';
import { Card, Image } from 'semantic-ui-react';

const mapGroupsToItems = (groups) =>
	groups.map(({ id, slug, cny, usd, thb}) => {
		return {
			childKey: id,
			image: '/images/products/' + slug + '/cover.jpg',
			header: slug,
			meta: thb + ' , ~' + usd + '  , ~' + cny,
			fluid: true,
			href: `/group?name=${slug}`
		};
	});

export default ({ groups }) => <Card.Group items={mapGroupsToItems(groups)} itemsPerRow="3" stackable />;
