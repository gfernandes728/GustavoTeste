using GustavoTeste.Models.DTO;

namespace GustavoTeste.Infra.Interface
{
    public interface IAgrupadoresRepository
    {
        Task<List<AgrupadoresResultadoDTO>> ObterAgrupadores(List<string> dados);
    }
}
