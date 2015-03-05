'use strict';

describe('Directive: serviceDefinitionDisplay', function () {

  beforeEach(module('lorryApp'));

  var scope,
    compile,
    element;

  beforeEach(inject(function($compile, $rootScope){
    scope = $rootScope.$new();
    compile = $compile;
  }));

  describe('serviceDefinitionDisplay controller', function () {
    describe('$scope.hasLines', function () {
      beforeEach(function () {
        element = compile('<service-definition-display></service-definition-display>')(scope);
        scope.$digest();
      });

      describe('when the serviceDefinition has no lines', function () {
        it('returns false', function () {
          element.isolateScope().serviceDefinition = [];
          expect(element.isolateScope().hasLines()).toBeFalsy();
        });
      });

      describe('when the first line of the serviceDefinition starts with a dash', function () {
        it('returns false', function () {
          element.isolateScope().serviceDefinition = [{text: '-test'}];
          expect(element.isolateScope().hasLines()).toBeFalsy();
        });
      });

      describe('when the first line of the serviceDefinition starts with whitespace', function () {
        it('returns false', function () {
          element.isolateScope().serviceDefinition = [{text: ' test'}];
          expect(element.isolateScope().hasLines()).toBeFalsy();
        });
      });

      describe('when the first line of the serviceDefinition starts with a character other than whitespace or a dash', function () {
        it('returns true', function () {
          element.isolateScope().serviceDefinition = [{text: 'test'}];
          expect(element.isolateScope().hasLines()).toBeTruthy();
        });
      });
    });
  });

});