import {getCategoriesService} from '&services/Categories.service';

export const useGameOptionsViewModel = () => {
  const getCategories = async () => {
    return await getCategoriesService();
  };

  return {
    getCategories,
  };
};
