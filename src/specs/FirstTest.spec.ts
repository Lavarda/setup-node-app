import User from '../models/User';

test('it should be okay', () => {
    const user = new User();

    user.name = 'John Doe';

    expect(user.name).toBe('John Doe');
});