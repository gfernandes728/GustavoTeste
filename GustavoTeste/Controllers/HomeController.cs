using Microsoft.AspNetCore.Mvc;
using GustavoTeste.Business.Interface;
using GustavoTeste.Models.ViewModels;

namespace GustavoTeste.Controllers
{
    public class HomeController : Controller
    {
        private readonly IAgrupadoresBusiness _agrupadoresBusiness;

        public HomeController(IAgrupadoresBusiness agrupadoresBusiness)
            => _agrupadoresBusiness = agrupadoresBusiness;

        [HttpGet]
        public IActionResult Index()
            => View(_agrupadoresBusiness.ObterDadosIniciais());

        [HttpPost]
        public async Task<IActionResult> Index(AgrupadoresViewModels models)
            => View(await _agrupadoresBusiness.ObterDadosSelecionados(models));
    }
}