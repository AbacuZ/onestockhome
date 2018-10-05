import apiService from '../apiService'
import { BASE_API } from '../apiConfig'

const headerJson = { 'Content-Type': 'application/json' }
export const githubProfileController = () => {
  const service = apiService()
  return {
    searchUserByName: async (name) => {
      return await service.get({
        url: `${BASE_API}/${name}`,
        headers: headerJson
      })
    }
  }
}