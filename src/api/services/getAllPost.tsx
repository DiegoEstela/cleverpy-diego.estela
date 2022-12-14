import axios from "axios";
import {allUserEndpoints} from '../../app/global/enpoints'
import {IallPost} from '../../app/global/interfaces'
import {setPostsList} from "../../store/slices/post";


export async function getAllPost(dispatch : Function ) {
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
      dispatch(setPostsList(data))
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
  