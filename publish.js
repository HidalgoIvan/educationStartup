import { publish } from 'gh-pages';

publish(
  'dist',
  { repo: 'git@github.com:HidalgoIvan/educationStartup.git' },
  function (err) {
    console.log(err);
  }
);
