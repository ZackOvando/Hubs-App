import { SWAPBOOLEAN } from './swapper.types';
const INITIAL_STATE = {
    previous:null,
    current:0,
    portfoliolist: [
        {
            key: 0,
            name: "Company One",
            route: "/",
            bool: false,
            content:["Branding one", "Web Development one", "UI/UX Design one"]
        },
        {
            key: 1,
            name: "Company Two",
            route: "/",
            bool: false,
            content:["Branding two", "Web Development two", "UI/UX Design two"]
        },
        {
            key: 2,
            name: "Company 3",
            route: "/",
            bool: false,
            content:["Branding three", "Web Development three", "UI/UX Design three"]
        },
        {
            key: 3,
            name: "Company Four",
            route: "/",
            bool: false,
            content:["Branding four", "Web Development four", "UI/UX Design four"]
        }
    ]
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SWAPBOOLEAN:
            return {
                ...state,
                previous:state.current,
                current:action.index,
                portfoliolist: {
                    ...state.portfoliolist,
                    [action.index]: {
                        ...state.portfoliolist[action.index],
                        bool: !state.portfoliolist[action.index].bool
                    }
                }
            }
        default: return state;
    }
};

export default reducer;