import axios from "axios";
import {allUserEndpoints} from '../../app/global/enpoints'
import {IallPost} from '../../app/global/interfaces'


export async function getAllPost() {
    try {
      
      const { data, status } : {data : IallPost[] , status: boolean} = await axios.get(
        allUserEndpoints,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
  
      console.log(JSON.stringify(data, null, 4));
      console.log('response status is: ', status);
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
  