(function () {
    'use strict';

    describe('rot13', function () {
        describe('rot13Service', function () {

            var rot13ServiceObj;
            beforeEach(module('rot13'));

            beforeEach(inject(function (_rot13Service_) {
                rot13ServiceObj = _rot13Service_;
            }));

            it('should encode uppercase characters', function () {

                var expected = 'NOPQRSTUVWXYZABCDEFGHIJKLM',
                    actual = rot13ServiceObj.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

                expect(actual).toBe(expected);
            });

            it('should encode lowercase characters', function () {

                var expected = 'nopqrstuvwxyzabcdefghijklm',
                    actual = rot13ServiceObj.encode('abcdefghijklmnopqrstuvwxyz');

                expect(actual).toBe(expected);
            });

            it('should not encode punctuation', function () {
                var expected = '!"£$%^&*() {}[]:;@#~<>,./?|`',
                    actual = rot13ServiceObj.encode('!"£$%^&*() {}[]:;@#~<>,./?|`');

                expect(actual).toBe(expected);
            });

            it('should encode characters in a mixed string', function () {
                var expected = 'Guvf vf n grfg fgevat!',
                    actual = rot13ServiceObj.encode('This is a test string!');

                expect(actual).toBe(expected);

            });

            it('should have reversable encription', function () {
                var expected = 'This is a test string!',
                    encrypted = rot13ServiceObj.encode('This is a test string!'),
                    actual = rot13ServiceObj.encode(encrypted);

                expect(actual).toBe(expected);
            });

        });
    });
}());