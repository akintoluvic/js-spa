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

    // Find the exact match
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    // If there is no exact match, return to the home page
    if(!match) {
        match = {
            route: routes[0]
        }
    }
    
    console.log(match.route.view())
}

document.addEventListener("DOMContentLoaded", () => {
    router()
});