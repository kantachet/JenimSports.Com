import Layout from '../components/Layout';
import ProductSummary from '../components/ProductSummary';
import ProductAttributes from '../components/ProductAttributes';
import { getProductById } from '../lib/jenim';

const ProductPage = ({ product }) => (
	<Layout title={product.name}>
		<ProductSummary {...product} />
		<ProductAttributes {...product} />
	</Layout>
)

ProductPage.getInitialProps = async ({ query: { id } }) => {
	const {
	  data
	} = await getProductById(id)
 console.log(data)
	return {
	  product: {
		...data,
		image: '/static/images/'+ data.group +'/'+data.color_name+'/'+ data.size +'.jpg'
	  }
	}
  }

export default ProductPage;
