// Then import schema types from any plugins that might expose them
import portfolio from './portfolio'
import skills from './skills'
import stats from './stats'
import timeline from './timeline'

// Then we give our schema to the builder and provide the result to Sanity
export default [
  portfolio,
  skills,
  stats,
  timeline
];
