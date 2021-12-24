export interface QuestionModel {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

const toModel = (entity: any): QuestionModel => {
  return {
    category: entity.category || '',
    type: entity.type || '',
    difficulty: entity.difficulty || '',
    question: entity.question || '',
    correctAnswer: entity.correct_answer || '',
    incorrectAnswers: entity.incorrect_answers || [],
  };
};

const toEntity = () => {};

export {toModel, toEntity};
