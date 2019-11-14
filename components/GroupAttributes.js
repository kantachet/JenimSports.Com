import { Header, Divider, Table, Container } from 'semantic-ui-react';

export default ({ products, decoded_desc, decoded_desc_th }) => (
	<React.Fragment>
		<Header as="h3">DETAIL</Header>
		<Container>
			<div className="content" dangerouslySetInnerHTML={{ __html: decoded_desc }} />
		</Container>
		<Divider />
		<Container>
			<div className="content" dangerouslySetInnerHTML={{ __html: decoded_desc_th }} />
		</Container>
	</React.Fragment>
);
