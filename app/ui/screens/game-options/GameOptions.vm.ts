import {getCategoriesService} from '&services/Categories';

export const useGameOptionsViewModel = () => {
  const getCategories = async () => {
    return await getCategoriesService();
  };

  return {
    getCategories,
  };
};
