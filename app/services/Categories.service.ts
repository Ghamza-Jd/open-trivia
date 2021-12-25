import {getCategories} from '&repos/web-repo/Category.repo';
import {toTriviaCategory, TriviaCategory} from '&models/Category.model';

export const getCategoriesService = async (): Promise<TriviaCategory[]> => {
  const res = await getCategories();
  const categories = toTriviaCategory(res);
  return categories;
};
