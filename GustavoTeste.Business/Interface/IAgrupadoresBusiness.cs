using GustavoTeste.Models.ViewModels;

namespace GustavoTeste.Business.Interface
{
    public interface IAgrupadoresBusiness
    {
        AgrupadoresViewModels ObterDadosIniciais();
        Task<AgrupadoresViewModels> ObterDadosSelecionados(AgrupadoresViewModels models);
    }
}
