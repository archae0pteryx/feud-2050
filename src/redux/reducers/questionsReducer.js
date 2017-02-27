export default function reducer(state={
    questions: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_QUESTIONS": {
        return {...state, fetching: true}
      }
      case "FETCH_QUESTIONS_REJECT": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_QUESTIONS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          questions: action.payload,
        }
      }
      case "ADD_QUESTION": {
        return {
          ...state,
          questions: [...state.questions, action.payload],
        }
      }
      case "UPDATE_QUESTION": {
        const { id } = action.payload
        const newQuestion = [...state.questions]
        const questionToUpdate = newQuestion.findIndex(q => q.id === id)
        newQuestion[questionToUpdate] = action.payload;

        return {
          ...state,
          questions: newQuestion,
        }
      }
      case "DELETE_QUESTION": {
        return {
          ...state,
          questions: state.questions.filter(q => q.id !== action.payload),
        }
      }
      default:  
    }

    return state
}
