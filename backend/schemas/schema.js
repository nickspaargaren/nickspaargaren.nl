import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import portfolio from './portfolio.js'
import skills from './skills.js'
import stats from './stats.js'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    portfolio,
    skills,
    stats
  ]),
})
