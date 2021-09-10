import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface JobAdverState {
  data: JobAdvert | null;
  loading: boolean;
  error: string;
}

const initialState: JobAdverState = {
  data: null,
  loading: false,
  error: "",
};

const urlBase = "http://localhost:8080/api/jobadverts";

export const getAllJobAdvert=createAsyncThunk("getAllJobAdvert", async()=>{
    const response=await axios.get<JobAdvert>(`${urlBase}/getall`);
    return response.data
})

export const getAllJobAdvertsByIsActive=createAsyncThunk("getAllJobAdvertsByIsActive", async(isActive)=>{
    const response=await axios.get(`${urlBase}/getByIsActive?isActive=${isActive}`)
    return response.data
})

const jobAdvertSlice = createSlice({
  name: "jobAdvert",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
      builder.addCase(getAllJobAdvert.pending,(state,action)=>{
          state.loading=true;
          state.error="";
      })
      builder.addCase(getAllJobAdvert.fulfilled,(state,action:PayloadAction<JobAdvert>)=>{
        state.data=action.payload;
        state.loading=false;
    })
    builder.addCase(getAllJobAdvert.rejected,(state,action)=>{
        state.loading=false;
        state.error="error fetching";
    })

    builder.addCase(getAllJobAdvertsByIsActive.pending,(state,action)=>{
        state.loading=true;
        state.error="";
    })
    builder.addCase(getAllJobAdvertsByIsActive.fulfilled,(state,action:PayloadAction<JobAdvert>)=>{
      state.data=action.payload;
      state.loading=false;
  })
  builder.addCase(getAllJobAdvertsByIsActive.rejected,(state,action)=>{
      state.loading=false;
      state.error="error fetching";
  })
  }
});

export default jobAdvertSlice.reducer;


export interface City {
  id: number;
  name: string;
}

export interface User {
  email: string;
  id: number;
  password: string;
}

export interface Employer {
  companyName: string;
  id: number;
  jobAdverts: any[];
  status: boolean;
  telephone: string;
  user: User;
  webSite: string;
}

export interface Job {
  id: number;
  jobName: string;
}

export interface Datum {
  active: boolean;
  applicationDeadline: Date;
  city: City;
  createdAt: Date;
  description: string;
  employer: Employer;
  id: number;
  job: Job;
  maxSalary: number;
  minSalary: number;
  numberOfOpenPosition: number;
  workingTimeType: string;
  workingType: string;
}

export interface JobAdvert {
  data: Datum[];
  message: string;
  success: boolean;
}
