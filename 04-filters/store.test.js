describe('Testing StoreController', function() {
    
    beforeEach(module('filtersApp'));
    
    var initialProducts = [
        { name: 'The Dark Knight', price: 282.80 },
        { name: 'Interestellar', price: 312.99 },
        { name: 'Inception', price: 150 }
    ];
    
    var storeController;
    
    beforeEach(inject(function(_$controller_) {
        var now = new Date(2015, 6, 1, 19, 0, 0);
        jasmine.clock().mockDate(now);
        storeController = _$controller_('StoreController');
    }));
    
    describe('Initialization tests', function() {
        
        it('The products list must be the expected', function() {
            expect(storeController.products).toEqual(initialProducts);
        });
        
        it('The now time must be now', function() {
            expect(storeController.now).toEqual(new Date());
        });
    });
    
});