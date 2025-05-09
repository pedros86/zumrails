public class PokemonService : IPokemonService
{
  public async Task<List<Pokemon>> GetPokemons()
  {
    return await Championship();
  }

  private async Task<List<Pokemon>> Championship()
  {
    var pokemons = await GetRamdomPokemons();

    foreach (var pokemon in pokemons)
    {
      pokemon.Wins = pokemons.Where(x => x.BaseExperience < pokemon.BaseExperience).Count();
      pokemon.Losses = pokemons.Where(x => x.BaseExperience > pokemon.BaseExperience).Count();
      pokemon.Ties = pokemons.Where(x => x.BaseExperience == pokemon.BaseExperience).Count();
    }

    return pokemons;
  }

  private async Task<List<Pokemon>> GetRamdomPokemons()
  {
    var result = new List<Pokemon>();

    foreach (var id in GenerateNumbers.GetRandomNumber())
    {
      var pokemon = await FetchPokemonsById(id);
      result.Add(pokemon);
    }

    return result;
  }

  private async Task<Pokemon> FetchPokemonsById(int id)
  {
    var result = new Pokemon();
    HttpClient client = new HttpClient();
    var URL = "https://pokeapi.co/api/v2/pokemon/" + id;

    try
    {
      HttpResponseMessage response = await client.GetAsync(URL);

      if (response.IsSuccessStatusCode)
      {
        var pokemon = await response.Content.ReadFromJsonAsync<Pokemon>();

        if (pokemon != null)
        {
          result = pokemon;
        }
      }
    }
    catch (Exception ex)
    {
      Console.WriteLine($"Error: {ex}");
      throw;
    }
    finally
    {
      client.Dispose();
    }

    return result;
  }

}