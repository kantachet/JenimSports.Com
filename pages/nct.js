import Layout from '../components/Layout';
import GroupList from '../components/GroupList';

// import { getProducts } from '../lib/moltin'

import { getGroups } from '../lib/jenim';

const Home = ({ groups }) => (
	<Layout title="Home">
		<GroupList groups={groups} />
	</Layout>
);

Home.getInitialProps = async () => {
	const data = await getGroups();
	const groups = data.map((group) => {
		return {
			...group
		};
	});

	return {
		groups
	};
};

export default Home;
