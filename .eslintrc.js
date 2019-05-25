module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/script-indent': 'off',
        'vue/html-indent': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    globals: {
        Form: false,
        _: false,
        Vue: false,
        user: false
    }
};
