import Axios from 'axios';
import ENDPOINTS from '../../appConfigs';

const SERVICE_ENDPOINT = 'users';

class ProfileService {
  static fetchAllProfiles = (text) => {
    return new Promise((resolve, reject) => {
      Axios.get(ENDPOINTS.API + SERVICE_ENDPOINT + '/').then((res) => {
        if (res.data) {
          resolve(res.data);
        }
      }).catch((err) => {
        console.log('ERROR:', err);
        reject({message: err})
      })
    });
  }
};
export default ProfileService;
