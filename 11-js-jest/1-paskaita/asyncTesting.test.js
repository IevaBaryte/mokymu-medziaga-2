const fetchData = require('./asyncTesting');

test('fetches data successfuly', async () => {
    const data = await fetchData();
    console.log(data);

    expect(data).toBe('Data loaded');
});
