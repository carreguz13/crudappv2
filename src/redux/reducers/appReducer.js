const initialState = [
    {
    "id": 0,
    "Nombre": "John Doe",
    "Nacimiento": "1990-05-15",
    "Telefono": "1234567890",
    "Correo": "johndoe@example.com"
},
{
    "id": 1,
    "Nombre": "Jane Smith",
    "Nacimiento": "1985-08-22",
    "Telefono": "9876543210",
    "Correo": "janesmith@example.com"
},
{
    "id": 2,
    "Nombre": "Alice Johnson",
    "Nacimiento": "1992-03-10",
    "Telefono": "5551234567",
    "Correo": "alice@example.com"
},
{
    "id": 3,
    "Nombre": "Bob Williams",
    "Nacimiento": "1988-11-28",
    "Telefono": "9998887777",
    "Correo": "bob@example.com"
}
]

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CONTACT':
            state = [...state, action.payload]
            return state
            case "UPDATE_CONTACT":
               const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact)
               state = updateState
               return state
               case "DELETE_CONTACT":
               const filter = state.filter(contact=> contact.id !== action.payload && contact)
               state = filter
               return state
        default:
            return state
    }
}

export default appReducer