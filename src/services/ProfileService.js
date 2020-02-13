import Axios from 'axios';
import { ENDPOINT_PATH } from '../../appConfigs';

const SERVICE_ENDPOINT = 'user';

class ProfileService {
  static fetchAllProfiles = (text) => {
    console.log('Function Called Successfully:', text);
  }
};
export default ProfileService;
