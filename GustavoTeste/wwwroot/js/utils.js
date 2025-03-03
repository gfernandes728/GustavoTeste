var utils = {
    init: function () {
    },
    verifcarContainerHtml: function (item) {
        const container = item.html();
        return container ? container : "";
    },
    verifcarValores: function (item, padrao) {
        const valor = item.val();
        return valor ? valor : padrao;
    }
};