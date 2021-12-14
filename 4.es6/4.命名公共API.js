//立即执行函数返回publicAPI，并立即执行，传参，所以foo为一个实例化的模块
var foo = (
    function myModel(id) {
        function iden1(params) {
            console.log(id);
        }
        function iden2() {
            console.log(id.toUpperCase());
        }
        function change() {
            this.iden = iden2;
        }

        ///如果该公共API里保存了change（），可以从内部对模块的实例进行修改
        var publicAPI = {
            iden: iden1,
            change: change
        };
        return publicAPI;
    }
)('my fool');

foo.iden();
foo.change();
foo.iden();
