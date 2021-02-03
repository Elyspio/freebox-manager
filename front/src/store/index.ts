import {configureStore} from "@reduxjs/toolkit";
import {reducer as themeReducer} from "./module/theme/reducer";
import {reducer as environmentReducer} from "./module/environments/reducer";
import {reducer as configReducer} from "./module/config/reducer";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        environments: environmentReducer,
        config: configReducer
    },
});

export default store;


export type StoreState = ReturnType<typeof store.getState>
