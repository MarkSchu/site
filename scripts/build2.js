let env = process.argv[2];
if (env !== 'prod' && env !== 'test')
    throw 'Must pass "prod" or "test"';
