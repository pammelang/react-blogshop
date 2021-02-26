import Typography from "typography"
import kirkham from "typography-theme-kirkham"

const typography = new Typography(kirkham)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography