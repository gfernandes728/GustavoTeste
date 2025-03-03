var selecao = {
    init: function (selecaoId) {
        selecao.dadosTextArea(selecaoId);
    },
    dadosTextArea: function (selecaoId) {
        const dadosSelecao = $(`#selecaoId-${selecaoId}`);
        const textarea = $(".textarea-campo", dadosSelecao);
        const total = textarea.length;

        if (total === 0) {
            return;
        }

        const possuiFormulario = utils.verifcarValores($("#possuiFormulario", dadosSelecao), "N");
        if (possuiFormulario === "N") {
            for (let i = 0; i < total; i++) {
                CKEDITOR.replace(textarea[i].id);
            }

            $("#possuiFormulario", dadosSelecao).val("S");
        }
    },
    adicionarItem: function (selecaoId) {
        const d = selecao.obterDadosIniciais(selecaoId);

        let html = selecao.verifcarContainerSelecao(`#campoId-${d.ultimoCampoId}`, d.dadosSelecao);
        if (html.length === 0) {
            return;
        }

        const campoIds = selecao.obterCampoIds(d);
        const campoId = d.ultimoCampoId + 1;
        const containerCampos = selecao.verifcarContainerSelecao("#containerCampos", d.dadosSelecao);

        html = html.replace(`selectedCampoIds-${(d.ultimoCampoId - 1)}`, `selectedCampoIds-${d.ultimoCampoId}`);
        html = html.replace(`Item ${d.ultimoCampoId}`, `Item ${campoId}`);

        $("#containerCampos", d.dadosSelecao).html(containerCampos + `<div id="campoId-${campoId}">${html}</div>`);

        for (let x = 0; x < d.ultimoCampoId; x++) {
            $(`#selectedCampoIds-${x}`, d.dadosSelecao).val(campoIds[x]);
        }

        $("#ultimoCampoId", d.dadosSelecao).val(campoId);
    },
    obterCampoIds: function (d) {
        let campoIds = [];
        for (let i = 0; i < d.ultimoCampoId; i++) {
            campoIds.push(parseInt($(`#selectedCampoIds-${i}`, d.dadosSelecao).val()));
        }

        return campoIds;
    },
    abrirModal: function (item, selecaoId, campoId, formularioId) {
        const dadosSelecao = $(`#selecaoId-${selecaoId}`);

        $('#modal-body', dadosSelecao).modal('show');
        $("#modal-title", dadosSelecao).html(`Item ${item}`);
        $("#selectedCampoId", dadosSelecao).val(campoId);
        $("#formularioId", dadosSelecao).val(formularioId);
    },
    fecharModal: function (selecaoId) {
        const dadosSelecao = $(`#selecaoId-${selecaoId}`);
        $('#modal-body', dadosSelecao).modal('hide');
    },
    salvarModal: function (selecaoId) {
        const dadosSelecao = $(`#selecaoId-${selecaoId}`);
        const campoId = parseInt($("#selectedCampoId", dadosSelecao).val());
        const formularioId = parseInt($("#formularioId", dadosSelecao).val());

        selecao.enviarPost("Formulario/SalvarItem", { SelecaoId: selecaoId, CampoId: campoId, FormularioId: formularioId }, "Item salvo com sucesso!");
    },
    salvarItem: function (selecaoId) {
        const d = selecao.obterDadosIniciais(selecaoId);
        const campoIds = selecao.obterCampoIds(d);

        selecao.enviarPost("Formulario/SalvarSelecao", { SelecaoId: selecaoId, CampoIds: campoIds }, "Selecao salva com sucesso!");
    },
    retornoSalvar: function (mensagem) {
        alert(mensagem);
        window.location.href = "/Formulario";
    },
    obterDadosIniciais: function (selecaoId) {
        const dadosSelecao = $(`#selecaoId-${selecaoId}`);
        const ultimoCampoId = parseInt($("#ultimoCampoId", dadosSelecao).val());
        return { dadosSelecao, ultimoCampoId };
    },
    enviarPost: function (url, parametros, mensagem) {
        $.post(url, parametros, function () {
            selecao.retornoSalvar(mensagem);
        });
    },
    verifcarContainerSelecao: function (item, dadosSelecao) {
        return utils.verifcarContainerHtml($(item, dadosSelecao));
    }
};