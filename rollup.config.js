import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";

const outputDefaults = {
  sourcemap: true,
  globals: { react: "React" },
};

export default {
  input: "./src/index.ts",
  output: [
    {
      file: "./dist/index.cjs.js",
      format: "cjs",
      exports: "default",
      ...outputDefaults,
    },
    {
      file: "./dist/index.esm.js",
      format: "esm",
      ...outputDefaults,
    },
  ],
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    image({
      extensions: /\.(png|jpg|jpeg|gif|svg)$/,
    }),
    postcss({
      extract: false,
    }),
  ],

  external: ["react", "react-dom"],
};
