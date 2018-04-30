angular.module('filtersApp', [])

    .controller('StoreController', function($interval) {
    
        var store = this;
    
        store.products = [
            { name: 'The Dark Knight', price: 282.80, img: "http://vignette4.wikia.nocookie.net/doblaje/images/9/9c/Batman_el_Caballero_de_la_Noche.png/revision/latest?cb=20110602012240&path-prefix=es" },
            { name: 'Interestellar <a></a>', price: 312.999, img: "https://lh6.googleusercontent.com/-EvzMz5PfB4k/U2kZcou_QEI/AAAAAAAAAq4/Sb18arIGhXU/s500-no/Interstellar_Social_Icon_v2.jpg" },
            { name: 'Inception', price: 150, img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRo9vfJCM6dzPkZHIHBVCtlJnAnew9Ai26kEdrli0-tfmatmciD" }
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
    
        var selectedTab = 'movies';
    
        store.isTabSelected = function(tab) {
            return tab === selectedTab;
        };
    
        store.selectTab = function(tab) {
            selectedTab = tab;
        };
    
    });
