import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createLink} from "./linkThunk.ts";
import {RootState} from "../app/store.ts";
import {Link} from "../types.ts";

interface LinkState {
    link: Link | null;
    createdLink: boolean;
}

const initialState: LinkState = {
    link: null,
    createdLink: false
}

export const linkSlice = createSlice({
    name: "link",
    initialState,
    reducers: {},
    extraReducers: (builder) =>  {
        builder
            .addCase(createLink.pending, (state) => {
                state.createdLink = true;
            })
            .addCase(createLink.fulfilled, (state, {payload: link}: PayloadAction<Link>) => {
                state.link = link;
                state.createdLink = false;
            })
            .addCase(createLink.rejected, (state) => {
                state.createdLink = false;
            })
    }
})

export const selectLink = (state: RootState) => state.link.link;
export const linkReducer = linkSlice.reducer;