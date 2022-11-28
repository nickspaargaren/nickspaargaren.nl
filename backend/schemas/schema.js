import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import portfolio from "./portfolio.js";
import skills from "./skills.js";
import stats from "./stats.js";
import timeline from "./timeline.js";

export default createSchema({
	name: "default",
	types: schemaTypes.concat([portfolio, skills, stats, timeline]),
});
