
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('autobots').del()
    .then(function () {
      // Inserts seed entries
      return knex('autobots').insert([
        { name: 'optimus prime' },
        { name: 'bumble bee' },
        { name: 'hot rod' },
        { name: 'jazz' },
        { name: 'blaster' },
        { name: 'ironhide' },
        { name: 'grimlock' },
      ]);
    });
};
