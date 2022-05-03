import {useQuery, gql} from './index.js'
// consr 
const GET_RESOURCES = gql`
  query GET_RESOURCES { 
      resources {
            id,
            name
        }
    }
`
export { GET_RESOURCES }