import { useState } from 'react'
import { Select } from '@zeit-ui/react'

export const QUERY = gql`
  query TAGS {
    tags {
      name
    }
  }
`

const CREATE_TAG_MUTATION = gql`
  mutation CreateTagMutation($input: CreateTagInput!) {
    createTag(input: $input) {
      name
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => (
  <Select
    name={name}
    placeholder="Selecione as tags"
    width="100%"
    defaultValue={1}
  >
    <Select.Option value={1}>Carregando...</Select.Option>
  </Select>
)

export const Success = ({ tags, name, onChange, value }) => {
  return (
    <>
      <Select
        name={name}
        placeholder="Selecione as tags"
        onChange={onChange}
        width="100%"
        multiple
        value={value}
      >
        {tags.map((tag) => (
          <Select.Option key={tag.name} value={tag.name}>
            {tag.name.toLowerCase()}
          </Select.Option>
        ))}
      </Select>
    </>
  )
}
