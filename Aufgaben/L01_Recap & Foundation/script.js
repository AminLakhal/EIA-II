var let;
(function (let) {
    let v = 1;
    v = v + 1;
    console.log(v);
})(let || (let = {}));
/*

namespace constant {

    const v = 1;

    v = v + 1;

    console.log(v);


}

Cannot assign to 'v' because it is a constant.

*/ 
//# sourceMappingURL=script.js.map