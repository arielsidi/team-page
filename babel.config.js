module.exports = function(api) {
    api.cache(true);

    return {
        presets: ["@babel/preset-flow", "@babel/preset-env", "@babel/react"],
        env: {
            test: {
                presets: [
                    "@babel/preset-flow",
                    "@babel/preset-env",
                    "@babel/react"
                ]
            }
        },
        plugins: [
            "@babel/plugin-proposal-class-properties",
            "babel-plugin-styled-components"
        ],
        retainLines: true
    };
};
