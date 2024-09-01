import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";
import {Link, LinkMutation} from "../types.ts";

export const createLink = createAsyncThunk<Link, LinkMutation>('links/createLink', async (link) => {
    try {
        const {data: links} = await axiosApi.post('/', link);
        return links;
    } catch (e) {
        console.error('Creating link', e);
    }
});