export interface TriviaCategory {
  id: number;
  name: string;
}

const toTriviaCategory = (entity: any): TriviaCategory[] => {
  return entity.trivia_categories || [];
};

export {toTriviaCategory};
