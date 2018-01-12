
// Literally maps to the type used by the action for navigation.
export const routeType = state => state.location.response && state.location.response.name

// About Step
export const aboutStep = state => state.location.response && state.location.response.params.step
