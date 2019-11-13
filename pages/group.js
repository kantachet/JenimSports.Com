import Layout from '../components/Layout';
import GroupSummary from '../components/GroupSummary';
import GroupAttributes from '../components/GroupAttributes';
import { getGroupByName,getAllProductImage } from '../lib/jenim';

const GroupPage = ({ group }) => (
	<Layout title={group.name}>
		<GroupSummary {...group} />
		<GroupAttributes {...group} />
	</Layout>
);

GroupPage.getInitialProps = async ({ query: { name } }) => {
	const data = await getGroupByName(name);
	return {
		group:  {...data }
	};
};

export default GroupPage;
