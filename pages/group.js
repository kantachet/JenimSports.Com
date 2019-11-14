import Layout from '../components/Layout';
import GroupSummary from '../components/GroupSummary';
import GroupAttributes from '../components/GroupAttributes';
import { getGroupByName, getAllProductImage } from '../data/jenim';

const GroupPage = ({ group }) => (
	<Layout title={group.name}>
		<GroupSummary {...group} />
		<GroupAttributes {...group} />
	</Layout>
);

GroupPage.getInitialProps = async ({ query: { name } }) => {
	const data = await getGroupByName(name);
	let decoded_desc = '';
	let decoded_desc_th = '';
	if (data!=undefined) {
		let desc_buf = new Buffer(data.desc, 'base64');
		decoded_desc = desc_buf.toString('utf8');
		let desc_th_buf = new Buffer(data.desc_th, 'base64');
		decoded_desc_th = desc_th_buf.toString('utf8');
	}
	return {
		group: { ...data, decoded_desc, decoded_desc_th }
	};
};

export default GroupPage;
