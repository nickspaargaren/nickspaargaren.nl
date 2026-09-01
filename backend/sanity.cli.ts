import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: '5mfdvpuc',
    dataset: "production",
  },
  studioHost: "nickspaargaren-nl",
  deployment: {
    autoUpdates: false,
  },
});
