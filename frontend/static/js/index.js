const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("View dashboard")},
        { path: "/posts", view: () => console.log("View posts")},
        { path: "/settings", view: () => console.log("View settings")},
    ]

    // Test routes for potential matches
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    console.log(potentialMatches);
}

document.addEventListener("DOMContentLoaded", router);