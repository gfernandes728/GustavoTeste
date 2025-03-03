using GustavoTeste.Models.Models;

namespace GustavoTeste.Models.DTO
{
    public class FormularioDTO
    {
        public class ListasDTO
        {
            public long Id { get; set; }
            public string Nome { get; set; } = string.Empty;
        }

        public class FormulariosDTO : FormulariosModels
        {
        }

        public class ArquivoDTO : ArquivoModels
        {
        }
    }
}
