import { ROUTERHUB } from "./router.types";
const INITIAL_STATE = {
    routes: [
        {
            routeName: "Home",
            route: "/",
            header: {
                title: "The Future",
                items: ["one", "two", "three", "four"]
            },
            list: [
                {
                    title: "Our Portfolio",
                    category: "Digital Marketing",
                    casestudy: [
                        {
                            title: "Nike",
                            route: ""
                        },
                        {
                            title: "Underarmour",
                            route: ""
                        },
                        {
                            title: "Denver Recovery Group",
                            route: ""
                        }
                    ]
                }
            ]
        },
        {
            routeName: "Case Studies",
            route: "/case-studies",
            header: {
                title: "Case Studies",
                items: ["one", "two", "three", "four"]
            },
            list: [
                {
                    title: "Digital Marketing",
                    category: "Digital Marketing",
                    casestudy: [
                        {
                            title: "Nike",
                            route: ""
                        },
                        {
                            title: "Underarmour",
                            route: ""
                        },
                        {
                            title: "Denver Recovery Group",
                            route: ""
                        }
                    ]
                },
                {
                    title: "Web Design & Development",
                    category: "Web Design & Development",
                    casestudy: "Walgreens",
                    casestudy: [
                        {
                            title: "Nike",
                            route: ""
                        },
                        {
                            title: "Underarmour",
                            route: ""
                        },
                        {
                            title: "Denver Recovery Group",
                            route: ""
                        }
                    ]
                },
                {
                    title: "App Development",
                    category: "App Development",
                    casestudy: "MotoxChick",
                    casestudy: [
                        {
                            title: "Nike",
                            route: ""
                        },
                        {
                            title: "Underarmour",
                            route: ""
                        },
                        {
                            title: "Denver Recovery Group",
                            route: ""
                        }
                    ]
                }
            ]
        },
        {
            routeName: "About",
            route: "/about",
            header:{
                title:"THIS IS IT",
                items:["two","four","six"]
            }
        },
        {
            routeName: "Contact",
            route: "/contact"
        }

    ]
}
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ROUTERHUB:
            return {
                ...state,
                routes: {
                    ...state.routes,
                    [0]: {
                        ...state.routes[0],
                        routeName: "GOT IT"
                    }
                }
            }
        default: return state;

    }
}
export default reducer;