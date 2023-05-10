import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_petcategory_list = createAsyncThunk(
  "petCategories/api_v1_petcategory_list",
  async payload => {
    const response = await apiService.api_v1_petcategory_list(payload)
    return response.data
  }
)
export const api_v1_petcategory_create = createAsyncThunk(
  "petCategories/api_v1_petcategory_create",
  async payload => {
    const response = await apiService.api_v1_petcategory_create(payload)
    return response.data
  }
)
export const api_v1_petcategory_retrieve = createAsyncThunk(
  "petCategories/api_v1_petcategory_retrieve",
  async payload => {
    const response = await apiService.api_v1_petcategory_retrieve(payload)
    return response.data
  }
)
export const api_v1_petcategory_update = createAsyncThunk(
  "petCategories/api_v1_petcategory_update",
  async payload => {
    const response = await apiService.api_v1_petcategory_update(payload)
    return response.data
  }
)
export const api_v1_petcategory_partial_update = createAsyncThunk(
  "petCategories/api_v1_petcategory_partial_update",
  async payload => {
    const response = await apiService.api_v1_petcategory_partial_update(payload)
    return response.data
  }
)
export const api_v1_petcategory_destroy = createAsyncThunk(
  "petCategories/api_v1_petcategory_destroy",
  async payload => {
    const response = await apiService.api_v1_petcategory_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const petCategoriesSlice = createSlice({
  name: "petCategories",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_petcategory_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_petcategory_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_petcategory_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_petcategory_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_petcategory_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_petcategory_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_petcategory_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_petcategory_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_petcategory_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_petcategory_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_petcategory_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_petcategory_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_petcategory_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_petcategory_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_petcategory_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_petcategory_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_petcategory_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_petcategory_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_petcategory_list,
  api_v1_petcategory_create,
  api_v1_petcategory_retrieve,
  api_v1_petcategory_update,
  api_v1_petcategory_partial_update,
  api_v1_petcategory_destroy,
  slice: petCategoriesSlice
}
