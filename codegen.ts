import { CodegenConfig } from "@graphql-codegen/cli";

// Config for codegen
const config: CodegenConfig = {
  schema: "./schema.graphql",
  documents: ["src/**/*.tsx", "!src/gql/**/*"],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
