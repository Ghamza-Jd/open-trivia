import {env} from '&env/EnvVars';
import {get} from '../clients/WebClient';

export const getCategories = async (): Promise<any> => {
  const res = await get(`${env.baseURL}/api_category.php`);
  return res.data;
};
