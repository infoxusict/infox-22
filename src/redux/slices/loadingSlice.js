import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
};

const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		startLoading: (state) => {
			document.body.style.overflow = "hidden";
			state.loading = true;
		},
		stopLoading: (state) => {
			document.body.style.overflow = "scroll";
			state.loading = false;
		},
	},
});

export const { startLoading, stopLoading } = loadingSlice.actions;
export const selectLoading = (state) => state.loading.loading;

export default loadingSlice.reducer;
