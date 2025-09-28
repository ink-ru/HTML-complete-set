/*
╔════════════════════════════════════════════════════════════╗
║                 Wait for Element appear                    ║
╚════════════════════════════════════════════════════════════╝
*/ // https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function revers_list(list)
{
    var rev_arr = [];
    var checkList_reversed = {};

    if(typeof list === 'object' && !Array.isArray(list) && list !== null)
    {
        const reversedKeys = Object.keys(list).reverse();

        reversedKeys.forEach((key, index) => { checkList_reversed[key] = list[key] });

        return checkList_reversed;
    }
    else if(Array.isArray(list) && list !== null)
    {

        Object.keys(list).reverse().forEach(value => {
          rev_arr[value] = list[value];
        })

        return rev_arr;
    }
    else return false;

}