import resolve from "@rollup/plugin-node-resolve";

export default {
    input: "app.mjs",
    output: [
        {
            format: "esm",
            file: "bundle.js",
        },
    ],
    plugins: [resolve()],
};
