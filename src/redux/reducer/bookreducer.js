export default function bookReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_BOOK":
            return [...state, { ...action.payload }]

        default:
            break;
    }
} 