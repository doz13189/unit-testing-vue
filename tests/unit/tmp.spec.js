
function forEach(items, callback) {
    for (let index=0; index<items.length; index++) {
        callback(items[index])
    }
}

describe('MessageDisplay', () => {
    it('Calls getMessage and displays message', async () => {
        const myMock = jest.fn();
        console.log(myMock());
        // > undefined
        
        myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
        
        console.log(myMock(), myMock(), myMock(), myMock());
        // > 10, 'x', true, true
    })
})
