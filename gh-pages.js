const { publish } = require('gh-pages');

publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Ivang71/svelte-todolist.git',
    },
    () => console.log('Deploy Complete!')
);
