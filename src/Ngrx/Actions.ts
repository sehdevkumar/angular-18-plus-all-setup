import {createActionGroup, props} from "@ngrx/store"

const NgrxActions = createActionGroup({
    source: "Ngrx Global",
    events: {
       "Send Message":  props<{message: string}>(),
    }
})


export default NgrxActions