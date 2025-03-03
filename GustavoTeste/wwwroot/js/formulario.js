var formulario = {
    init: function () {
        $(".selection-btn").click(function () {
            $(this).toggleClass("selected");

            const selecaoId = $(this).data("id");

            const selecao = formulario.verifcarContainer(`#selecaoId-${selecaoId}`);
            if (selecao.length === 0) {
                $.get("Formulario/ObterSelecao", { selecaoId: selecaoId }, function (data) {
                    const container = formulario.verifcarContainer("#section2-container");
                    $("#section2-container").html(container + data);
                });
                return;
            }

            $(`#selecaoId-${selecaoId}`).remove();
            return;
        });
    },
    verifcarContainer: function (item) {
        return utils.verifcarContainerHtml($(item));
    }
};