import { Header, Divider, Table } from 'semantic-ui-react'

export default ({
  products,
  desc
}) => (
  <React.Fragment>
    <Header as="h3">About this product</Header>
    <p>{desc}</p>

    <Divider />

    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Material</Table.Cell>
          <Table.Cell>{desc}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Max watt.</Table.Cell>
          <Table.Cell>{desc}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bulb qty.</Table.Cell>
          <Table.Cell>{desc}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Finish</Table.Cell>
          <Table.Cell>{desc}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Fitting</Table.Cell>
          <Table.Cell>{desc}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </React.Fragment>
)
