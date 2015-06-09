angular.module('filtersApp', [])

    .controller('StoreController', function($interval) {
    
        var store = this;
    
        store.products = [
            { name: 'The Dark Knight', price: 282.80 },
            { name: 'Interestellar', price: 312.99 },
            { name: 'Inception', price: 150 }
        ];    

        store.now = new Date();
        store.clockRunning = true;
    
        var stop = $interval(function() {
            store.now = new Date();
        }, 1000);
    
        store.stopClock = function() {
            $interval.cancel(stop);
            store.clockRunning = false;
        };
    
        store.longPhrase = "Are you feeling lucky punk dyin' ain't much of a livin', boy. well, do you have anything to say for yourself? this is my gun, clyde! don't p!ss down my back and tell me it's raining. are you feeling lucky punk dyin' ain't much of a livin', boy. man's gotta know his limitations. don't p!ss down my back and tell me it's raining. here. put that in your report! and i may have found a way out of here. ever notice how sometimes you come across somebody you shouldn't have f**ked with? well, i'm that guy. this is my gun, clyde!";
    
    });