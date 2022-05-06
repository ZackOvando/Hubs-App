import { SWAPBOOLEAN } from "./swapper.types";
export const swapBoolean = (props) => {
    return {
        type: SWAPBOOLEAN,
        index:props.i
    }
}