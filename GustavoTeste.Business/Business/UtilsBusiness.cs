using Microsoft.AspNetCore.Mvc.Rendering;
using Omu.ValueInjecter;
using GustavoTeste.Business.Interface;

namespace GustavoTeste.Business.Business
{
    public class UtilsBusiness : IUtilsBusiness
    {
        public T Inject<T, R>(T res, R item)
        {
            res.InjectFrom(item);
            return res;
        }

        public SelectListItem ObterSelectItem<T>(T valor, string texto, List<T> selecionados)
            => new SelectListItem()
            {
                Value = valor == null ? "" : valor.ToString(),
                Text = texto,
                Selected = selecionados.Contains(valor)
            };

    }
}
