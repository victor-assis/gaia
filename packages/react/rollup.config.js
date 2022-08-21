import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from 'rollup-plugin-copy';

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "../../dist/react/index.js",
        format: "cjs",
        sourcemap: true
      },
      {
        file: "../../dist/react/index.esm.js",
        format: "esm",
        sourcemap: true
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      postcss(),
      copy({
        targets: [
          { src: 'src/package.json', dest: '../../dist/react' }
        ]
      })
    ],
  }
];