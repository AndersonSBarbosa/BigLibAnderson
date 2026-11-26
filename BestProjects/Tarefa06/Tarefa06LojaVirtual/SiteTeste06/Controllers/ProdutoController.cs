using AutoMapper;
using Entidades;
using Microsoft.AspNetCore.Mvc;
using Services.Interface;

namespace SiteTeste06.Controllers
{
    public class ProdutoController : Controller
    {
        private readonly IProdutoService _produtoService;
        private readonly IMapper _mapper;

        public ProdutoController(IProdutoService produtoService, IMapper mapper)
        {
            _produtoService=produtoService;
            _mapper=mapper;
        }

        // GET: ProdutoController
        public ActionResult Index()
        {
            var lista = _produtoService.GetAllAsync();
            return View(lista);
        }

        // GET: ProdutoController/Details/5
        public ActionResult Details(int id)
        {
            var item = _produtoService.GetAsync(id);
            return View(item);
        }

        // GET: ProdutoController/Create
        public ActionResult Create(Produto obj)
        {
            _produtoService.CreateAsync(obj);
            return View("Create");
        }

        // POST: ProdutoController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ProdutoController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ProdutoController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ProdutoController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ProdutoController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
