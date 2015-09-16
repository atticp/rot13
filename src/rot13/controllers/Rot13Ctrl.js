angular.module('rot13')
    .controller('Rot13Ctrl', ['rot13Service', function (rot13Service) {
        this.input = '';
        this.output = '';

        this.encode = function () {
            this.output = rot13Service.encode(this.input);
            return this.output;
        }
    }]);