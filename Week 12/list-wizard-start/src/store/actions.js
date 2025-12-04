import { createAction } from "@reduxjs/toolkit";

export const reset = createAction("app/reset");
// returns {type:'app.reset', payload: {}}
