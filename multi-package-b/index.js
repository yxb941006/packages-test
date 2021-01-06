var test = 'multi-package-b';
console.log('test from packages-test :>> ', test);

const Test = {
    init() {
        console.log(test + 'is ready!');
    }
};

export default Test;
