import Link from 'next/link';
import { Card, Image } from 'semantic-ui-react';

const mapCollectionsToItems = (collections) =>
	collections.map(({ title, image,href }) => {
		return {
			image:image,
			header : title,
			fluid: true,
			href:href
		};
	});

export default ({ collections }) => <Card.Group items={mapCollectionsToItems(collections)} itemsPerRow="1" stackable  />;
