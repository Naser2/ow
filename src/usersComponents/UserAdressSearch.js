import React from 'react'
import { Button, Divider, Input, Segment } from 'semantic-ui-react'

const UserAdressSearch = () => (
  <Segment basic textAlign='center'>
    <Input
      action={{ color: 'blue', content: 'Search' }}
      icon='search'
      iconPosition='left'
      placeholder='Search #'
    />
    <Divider horizontal>Or</Divider>
    <Button
      color='teal'
      content='Create Address'
      icon='add'
      labelPosition='left' 
     />
  </Segment>
)

export default UserAdressSearch;