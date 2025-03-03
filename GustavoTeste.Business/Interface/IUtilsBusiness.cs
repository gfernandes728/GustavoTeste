using Microsoft.AspNetCore.Mvc.Rendering;

namespace GustavoTeste.Business.Interface
{
    public interface IUtilsBusiness
    {
        T Inject<T, R>(T res, R item);
        SelectListItem ObterSelectItem<T>(T valor, string texto, List<T> selecionados);
    }
}
