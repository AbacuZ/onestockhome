import React from 'react'
import {
  Button,
  Card,
  CardContent,
  Input
} from 'components'
import { githubProfileController } from 'apiService'

export class HomeContainer extends React.Component {
  state = {
    username: ''
  }
  
  form = {
    onChangeInput: ev => {
      const { name, value } = ev.target
      this.setState({
        [name]: value
      })
    },
    onPressSearch: () => {
      const { username } = this.state
      this.Search(username)
    }
  }

  Search = async (name) => {
    const githubService = githubProfileController()
    const res = await githubService.searchUserByName(name)
    if (res) {
      console.log(res.data)
    }
  }

  render() {
    const {
      username
    } = this.state
    return (
      <React.Fragment>
        <Card>
          <CardContent>
            <Input 
              type='text'
              name='username'
              value={username}
              inputType='inputText'
              onChange={this.form.onChangeInput}
            />
          </CardContent>
          <CardContent>
            <Button 
              color='success'
              size='md'
              onClick={this.form.onPressSearch}
            >
              Search
            </Button>
          </CardContent>
        </Card>
      </React.Fragment>
    )
  }
}
