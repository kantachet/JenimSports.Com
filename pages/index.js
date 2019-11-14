import Layout from '../components/Layout';

import { getCollection } from '../data/jenim';
import CollectionList from '../components/CollectionList';

const Home = ({ collections }) => (
	<Layout title="JENIMSPORTS.COM">
		<CollectionList collections={collections} />
	</Layout>
);

Home.getInitialProps = async () => {
	const data = await getCollection();
	const collections = data.map((collection) => {
		return {
			...collection
		};
	});

	return {
		collections
	};
};

export default Home;
