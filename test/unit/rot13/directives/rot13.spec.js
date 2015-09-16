(function () {
    'use strict';

    describe('rot13', function () {
        describe('rot13 directive', function () {

            var element, $scope;
            beforeEach(module('rot13'));
            beforeEach(inject(function (_$compile_, _$rootScope_) {
                $scope = _$rootScope_.$new();
                element = _$compile_('<rot13></rot13>')($scope);
                $scope.$digest();
            }));

            it('should provide a textarea for input', function () {
                var textarea = element.find('textarea');
                expect(textarea.length).toBe(1);
            });

            it('should have an encode button', function () {
                var submit = element.find('#rot13Submit');
                expect(submit.length).toBe(1);
                expect(submit.attr('type')).toBe('submit');
                expect(submit.attr('value')).toBe('Encode');
            });

            it('should use ng-submit to call encode', function () {
                var form = element.find('form');
                expect(form.length).toBe(1);
                expect(form.attr('ng-submit')).toBe('rot13.encode()');
            });

            it('should have an output div', function () {
                var output = element.find('#rot13Output');
                expect(output.length).toBe(1);
            });

            it('should hide output div when there is no output', function () {
                var output = element.find('#rot13Output');
                expect(output.attr('ng-show')).toBe('rot13.output');
            });
        });
    });
}());