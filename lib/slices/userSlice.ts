import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { ErrorResponse } from "../../types/ErrorResponse"
import { LoginProps, RegisterProps, User } from "../../types/User"
import { CoreState } from "../store"

const API_URI = "http://localhost:3333/api/v1"

type ErrorResult = {
  error: ErrorResponse | string
}

type ThunkConfig = { rejectValue: ErrorResult }

interface APIResponse {
  success: boolean
  user: User
  token: string
  error?: any
}

export const login = createAsyncThunk<APIResponse, LoginProps, ThunkConfig>(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await fetch(API_URI + "/login", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        const error = await response.json()

        return thunkAPI.rejectWithValue({ error: error.errors })
      }

      return response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

export const register = createAsyncThunk<
  APIResponse,
  RegisterProps,
  ThunkConfig
>("user/register", async ({ name, email, password }, thunkAPI) => {
  try {
    const response = await fetch(API_URI + "/register", {
      method: "POST",
      body: JSON.stringify({ email, password, profile: { name } }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      const error = await response.json()

      return thunkAPI.rejectWithValue({ error: error.errors })
    }

    return response.json()
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message })
  }
})

enum LoadingState {
  IDLE = "idle",
  LOADING = "loading",
  LOADED = "loaded",
  ERROR = "error",
}

type UserState = {
  user: User | null
  token: string
  loading: LoadingState
  error?: ErrorResponse | string
}

const initialState: UserState = {
  user: null,
  token: "",
  loading: LoadingState.IDLE,
  error: undefined,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      delete state.error
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    })
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload?.error
      state.user = null
      state.token = ""
    })

    builder.addCase(register.pending, state => {
      delete state.error
    })
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    })
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload?.error
      state.user = null
      state.token = ""
    })
  },
})

export const selectUser = (state: CoreState) => state.user

export default userSlice.reducer
