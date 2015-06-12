'use strict';

describe('Tests for scopes', function() {
    
    beforeEach(module('scopesApp'));
    
    var fatherCtrl, scopeFather;
    var childCtrl1, scopeChild1;
    var childCtrl2, scopeChild2;    
    var grandChildCtrl1, scopeGrandChild1;
    var grandChildCtrl2, scopeGrandChild2;
    var grandChildCtrl3, scopeGrandChild3;
    var grandChildCtrl4, scopeGrandChild4;

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        scopeFather = _$rootScope_.$new();
        scopeChild1 = scopeFather.$new();
        scopeChild2 = scopeFather.$new();
        scopeGrandChild1 = scopeChild1.$new();
        scopeGrandChild2 = scopeChild1.$new();
        scopeGrandChild3 = scopeChild2.$new();
        scopeGrandChild4 = scopeChild2.$new();

        fatherCtrl = _$controller_('FatherController', {
            $scope: scopeFather
        });
        
        childCtrl1 = _$controller_('ChildController1', {
            $scope: scopeChild1
        });
        childCtrl2 = _$controller_('ChildController2', {
            $scope: scopeChild2
        });

        grandChildCtrl1 = _$controller_('GrandChildController1', {
            $scope: scopeGrandChild1
        });
        grandChildCtrl2 = _$controller_('GrandChildController2', {
            $scope: scopeGrandChild2
        });
        grandChildCtrl3 = _$controller_('GrandChildController3', {
            $scope: scopeGrandChild3
        });
        grandChildCtrl4 = _$controller_('GrandChildController4', {
            $scope: scopeGrandChild4
        });
    }));
    
    describe('When FatherController initialize', function() {
        
        it('All names are correctly', function() {
            expect(scopeFather.name).toBe('father');
            expect(scopeChild1.name).toBe('child1');
            expect(scopeChild2.name).toBe('child2');
            expect(scopeGrandChild1.name).toBe('grandChild1');
            expect(scopeGrandChild2.name).toBe('grandChild2');
            expect(scopeGrandChild3.name).toBe('grandChild3');
            expect(scopeGrandChild4.name).toBe('grandChild4');            
        });
        
        it('The lastname of all family is the same', function() {
            expect(scopeFather.lastName).toBe('Smith');
            expect(scopeChild1.lastName).toBe('Smith');
            expect(scopeChild2.lastName).toBe('Smith');
            expect(scopeGrandChild1.lastName).toBe('Smith');
            expect(scopeGrandChild2.lastName).toBe('Smith');
            expect(scopeGrandChild3.lastName).toBe('Smith');
            expect(scopeGrandChild4.lastName).toBe('Smith');
        });
        
        it('The parents are correctly', function() {
            expect(scopeFather.$parent.name).toBe('Root');
            expect(scopeChild1.$parent.name).toBe('father');
            expect(scopeChild2.$parent.name).toBe('father');
            expect(scopeGrandChild1.$parent.name).toBe('child1');
            expect(scopeGrandChild2.$parent.name).toBe('child1');
            expect(scopeGrandChild3.$parent.name).toBe('child2');
            expect(scopeGrandChild4.$parent.name).toBe('child2');
            expect(scopeGrandChild1.$parent.$parent.name).toBe('father');
            expect(scopeGrandChild2.$parent.$parent.name).toBe('father');
            expect(scopeGrandChild3.$parent.$parent.name).toBe('father');
            expect(scopeGrandChild4.$parent.$parent.name).toBe('father');
        });
    });
});