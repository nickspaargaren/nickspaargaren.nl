import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: '5mfdvpuc',
    dataset: "production",
  },
  deployment: {
    autoUpdates: false,
  },
});
