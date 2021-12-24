import {getCategoriesService} from '../../../service/Categories';

export const useGameOptionsViewModel = () => {
  const getCategories = async () => {
    return await getCategoriesService();
  };

  return {
    getCategories,
  };
};
