import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

// import { getProducts } from '../lib/moltin'

import { getProducts } from '../lib/jenim';

const Home = ({ products }) => (
	<Layout title="Home">
		<ProductList products={products} />
	</Layout>
);

Home.getInitialProps = async () => {
	const data = await getProducts();
	const products = data.map((product) => {
		return {
			...product,
			image: '/static/images/'+product.group +'/'+product.color_name+'/'+ product.size +'.jpg'
		};
	});

	return {
		products
	};
};

export default Home;
