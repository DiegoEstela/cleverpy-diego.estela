import axios from "axios";
import {allUserEndpoints} from '../../app/global/enpoints'
import {IallPost} from '../../app/global/interfaces'


export async function getAllPost() : Promise<IallPost[] | string>   {
    try {
      const { data, status } : {data : IallPost[] , status: number} = await axios.get<Array<IallPost>>(
        allUserEndpoints,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
      console.log('response status is: ', status);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error as string);
        return 'An unexpected error occurred';
      }
    }
  }
  