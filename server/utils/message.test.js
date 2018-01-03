const expect = require('expect');

var {generateMessage} = require('./message');

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