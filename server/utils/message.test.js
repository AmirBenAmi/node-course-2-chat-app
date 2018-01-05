const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('Should generate correct message object', () =>{
        var from = 'Test Admin';
        var text = 'this is create message object test';
        
        var message = generateMessage(from, text);
        // expect(message.from).toEqual('Test Admin');
        // expect(message.text).toEqual('this is create message object test');
        expect(message).toInclude({
            from,
            text
        });

        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('shold generate correct location object',() => {
        // var message = generateLocationMessage('AdminTest',1,2);
        // expect(message.createdAt).toBeA('number');
        // expect(message.url).toBe('https://www.google.com/maps?q=1,2');
        var from = 'AdminTest';
        var latitude = 1;
        var longitude = 2;
        var url = 'https://www.google.com/maps?q=1,2';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});