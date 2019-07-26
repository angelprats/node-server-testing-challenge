const db = require('../data/dbConfig.js');

const Hobbits = require('./autobotsModel.js');

describe('autobots model', () => {
    beforeEach(async () => {
        await db('autobots')
        .truncate();
    });

    describe('insert()', () => {
        it('should insert autobot into the db', async () => {
            await Autobots.insert({ name: 'skydive'});

            const autobots = await db('hobbits');

            expect(hobbits).toHaveLength(1);
        });

        it('should insert autobot into the db', async () => {
            await Autobots.insert({ name: 'eject'});
            await Autobots.insert({ name: 'rewind'});

            const autobots = await db('autobots');

            expect(autobots).toHaveLength(2);
         });
       });
    });