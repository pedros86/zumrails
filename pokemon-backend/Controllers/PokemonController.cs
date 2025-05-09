using System.Reflection;
using Microsoft.AspNetCore.Mvc;

namespace PokemonBackend.Controllers
{
  [ApiController]
  public class PokemonController : ControllerBase
  {

    private readonly IPokemonService _pokemonService;

    public PokemonController(IPokemonService pokemonService)
    {
      _pokemonService = pokemonService;
    }

    [Route("pokemon/tournament/statistics")]
    public async Task<IActionResult> Index([FromQuery] StatisticsFilters filters)
    {
      var result = await _pokemonService.GetPokemons();

      switch (filters.SortBy)
      {
        case SortBy.Wins:
          result = filters.SortDirection == Direction.Ascendent
          ? result.OrderBy(x => x.Wins).ToList()
          : result.OrderByDescending(x => x.Wins).ToList();
          break;

        case SortBy.Losses:
          result = filters.SortDirection == Direction.Ascendent
          ? result.OrderBy(x => x.Losses).ToList()
          : result.OrderByDescending(x => x.Losses).ToList();
          break;

        case SortBy.Ties:
          result = filters.SortDirection == Direction.Ascendent
          ? result.OrderBy(x => x.Ties).ToList()
          : result.OrderByDescending(x => x.Ties).ToList();
          break;

        default:
          break;
      }

      return Ok(result);
    }
  }
}