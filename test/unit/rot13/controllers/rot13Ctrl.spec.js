(function () {
    'use strict';

    describe('rot13', function () {
        describe('rot13Ctrl', function () {

            var mockRot13Service, controller;

            beforeEach(module('rot13'));

            beforeEach(inject(function ($controller) {
                mockRot13Service = {
                    encode: function (input) {
                        return 'ENCODED:' + input
                    }
                };

                controller = $controller('Rot13Ctrl', {
                    rot13Service: mockRot13Service
                });
            }));

            it('should use the rot13Service to encode', function () {

                controller.input = 'test-string';

                var expected = 'ENCODED:test-string',
                    actual = controller.encode();

                expect(controller.input).toEqual('test-string');
                expect(controller.output).toEqual(expected);
                expect(actual).toEqual(expected);
            });

        });
    });
}());