// module.exports = (data) => {
//     let task1
//     task1 = data.sort()
//     let = result = {
//         task1
//     }
//     return result
// }

const ascending_test = data => {
    return data.sort();
};

const descending_test = data => {
    let sorting = ascending_test(data);

    return sorting.reverse();
};

module.exports = {
    ascending_test,
    descending_test
};
