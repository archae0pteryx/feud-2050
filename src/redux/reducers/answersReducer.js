export default function reducer(state={
    answers: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_ANSWERS": {
        return {...state, fetching: true}
      }
      case "FETCH_ANSWERS_REJECT": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ANSWERS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          answers: action.payload,
        }
      }
      case "ADD_ANSWER": {
        return {
          ...state,
          answers: [...state.answers, action.payload],
        }
      }
      case "UPDATE_ANSWER": {
        const { id } = action.payload
        const newQuestion = [...state.answers]
        const answerToUpdate = newQuestion.findIndex(a => a.id === id)
        newQuestion[answerToUpdate] = action.payload;

        return {
          ...state,
          answers: newQuestion,
        }
      }
      case "DELETE_ANSWER": {
        return {
          ...state,
          answers: state.answers.filter(a => a.id !== action.payload),
        }
      }
      default:  
    }

    return state
}
