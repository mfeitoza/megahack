import { routes, navigate } from '@redwoodjs/router'
import {
  Card,
  Text,
  Row,
  Col,
  Description,
  Divider,
  Button,
  Fieldset,
} from '@zeit-ui/react'
import MapPin from '@zeit-ui/react-icons/mapPin'

const Response = ({ response }) => {
  return (
    <>
      <Fieldset>
        <Fieldset.Title>{response.title}</Fieldset.Title>
        <Fieldset.Subtitle>{response.description}</Fieldset.Subtitle>

        <Fieldset.Footer>
          <Fieldset.Footer.Status>
            {`${response.company.company} • ${response.company.address}, ${response.company.city}`}
          </Fieldset.Footer.Status>
          <Fieldset.Footer.Actions>
            <Button auto size="mini">
              Actions
            </Button>
          </Fieldset.Footer.Actions>
        </Fieldset.Footer>
      </Fieldset>
    </>
  )
}

export default Response
