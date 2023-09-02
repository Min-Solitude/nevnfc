import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import Swal from 'sweetalert2'
import { db, storage } from '../../configs/firebase.config'

const initialState = {
    listTickets: [],
    isLoading: false,
    error: null,
    ticket: {
        id: '',
        title: '',
        description: '',
        photoURL: '',
        layout: 0,
        status: 0
    }
}

export const createTicket = createAsyncThunk('ticket/createTicket', async (payload) => {
    console.log(payload)
    const docRef = await addDoc(collection(db, 'tickets'), {
        title: payload.title,
        description: payload.description,
        layout: payload.layout,
        status: 0
    })

    const imageRef = ref(storage, `ticket/${docRef.id}/${payload.image.path}`)
    await uploadBytes(imageRef, payload.image, {})
    const downloadURL = await getDownloadURL(imageRef)
    await setDoc(
        doc(db, 'tickets', docRef.id),
        {
            photoURL: downloadURL
        },
        { merge: true }
    )

    return {
        id: docRef.id,
        title: payload.title,
        description: payload.description,
        photoURL: downloadURL,
        layout: payload.layout,
        status: 0
    }
})

export const getTickets = createAsyncThunk('ticket/getTickets', async () => {
    const collectionRef = collection(db, 'tickets')

    const querySnapshot = await getDocs(collectionRef)
    const listTickets = querySnapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })

    return listTickets
})

export const checkIn = createAsyncThunk('ticket/checkIn', async (payload) => {
    console.log(payload)
})

const reducer = createSlice({
    name: 'ticket',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createTicket.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(createTicket.fulfilled, (state, action) => {
            state.listTickets.push(action.payload)
            state.isLoading = false
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Create ticket successfully!'
            })
        })
        builder.addCase(createTicket.rejected, (state, action) => {
            state.isLoading = false
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        })
        builder.addCase(getTickets.fulfilled, (state, action) => {
            state.listTickets = action.payload
        })
    }
})

export const TicketAction = reducer.actions
export const TicketReducer = reducer.reducer
