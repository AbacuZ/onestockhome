import React from 'react'
import {
  Button,
  Card,
  CardContent,
  GridContainer,
  Input,
  Images,
  Nav,
  Text
} from 'components'
import { githubProfileController } from 'apiService'

export class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      dataList: {},
      dataListRepo: [],
      dataListFollower: [],
      isActive: true,
      isShow: false
    }
  }
  
  form = {
    onChangeInput: ev => {
      const { name, value } = ev.target
      this.setState({
        [name]: value
      })
    },
    onPressOK: () => {
      const { username } = this.state
      this.Search(username)
    }
  }

  Search = async (name) => {
    const { isActive } = this.state
    const githubService = githubProfileController()
    const res = await githubService.searchUserByName(name)
    if (res) {
      const resRepos = await githubService.searchRepo(res.data.repos_url)
      this.setState({
        dataList: res.data,
        dataListRepo: resRepos.data,
        dataListFollower: [],
        isActive: isActive ? true : true,
        isShow: true,
        username: ''
      })
    }
  }

  GetRepos = async (repos_url) => {
    const { isActive } = this.state
    const githubService = githubProfileController()
    const res = await githubService.searchRepo(repos_url)
    if (res) {
      this.setState({
        dataListRepo: res.data,
        dataListFollower: [],
        isActive: !isActive
      })
    }
  }

  GetFollower = async (followers_url) => {
    const { isActive } = this.state
    const githubService = githubProfileController()
    const res = await githubService.searchFollower(followers_url)
    if (res) {
      this.setState({
        dataListFollower: res.data,
        dataListRepo: [],
        isActive: !isActive
      })
      console.log(this.state.dataListFollower)
    }
  }

  render() {
    const {
      username,
      dataList,
      dataListRepo,
      dataListFollower,
      isActive,
      isShow
    } = this.state
    return (
      <React.Fragment>
        <Card>
          <CardContent>
            <GridContainer>
              <GridContainer.ItemLeft>
                <Input 
                  type='text'
                  name='username'
                  value={username}
                  inputType='inputText'
                  onChange={this.form.onChangeInput}
                />
              </GridContainer.ItemLeft>
              <GridContainer.ItemRight>
                <Button 
                  color='success'
                  size='md'
                  onClick={this.form.onPressOK}
                >
                  OK
                </Button>
              </GridContainer.ItemRight>
            </GridContainer>
            {isShow ?
              <GridContainer>
                <GridContainer.ItemLeft>
                  <Images 
                    source={dataList.avatar_url} 
                    className='content' 
                  />
                  <Text>{dataList.login}</Text>
                  <Text>{dataList.bio}</Text>
                </GridContainer.ItemLeft>
                <GridContainer.ItemRight>
                  <Nav>
                    <Nav.Menu 
                      className={isActive ? 'active' : 'normal'}
                      onClick={() => this.GetRepos(dataList.repos_url)}
                    >
                      Repositories <Nav.Count>{dataList.public_repos}</Nav.Count>
                    </Nav.Menu>
                    <Nav.Menu 
                      className={isActive ? 'normal' : 'active'}
                      onClick={() => this.GetFollower(dataList.followers_url)}
                    >
                      Follower <Nav.Count>{dataList.followers}</Nav.Count>
                    </Nav.Menu>
                  </Nav>
                    {dataListRepo.map((data, index) => {
                      return (
                        <div key={index}>
                          {data.name}
                        </div>
                      )
                    })}
                    {dataListFollower.map((data, index) => {
                      return (
                        <GridContainer 
                          key={index} 
                          onClick={() => this.Search(data.login)}
                        >
                          <GridContainer.ItemLeft>
                            <Images 
                              className='content'
                              source={data.avatar_url}
                              alt={data.login}
                            />
                          </GridContainer.ItemLeft>
                          <GridContainer.ItemRight>
                            {data.login}
                          </GridContainer.ItemRight>
                        </GridContainer>
                      )
                    })}
                </GridContainer.ItemRight>
              </GridContainer>
            :null}
          </CardContent>
        </Card>
      </React.Fragment>
    )
  }
}
