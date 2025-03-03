using Microsoft.AspNetCore.Http;
using GustavoTeste.Models.ViewModels;

namespace GustavoTeste.Business.Interface
{
    public interface IFormularioBusiness
    {
        Task<FormularioViewModels> ObterDadosIniciais();
        Task<SelecaoViewModels> ObterSelecao(long selecaoId);
        Task<ArquivosViewModels> ObterArquivo(long arquivoId);
        Task SalvarSelecao(SelecaoViewModels models);
        Task SalvarItem(ItemViewModels models);
        Task SalvarArquivo(IFormFile file, long selecaoId);
    }
}
