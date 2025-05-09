using System.Text.Json.Serialization;

public class Pokemon {
  public int Id { get; set; }
  public string? Name { get; set; }
  [JsonPropertyName("base_experience")]
  public int BaseExperience { get; set; }
  public int Wins { get; set; }
  public int Losses { get; set; }
  public int Ties { get; set; }
  public List<Type>? Types { get; set; }
  public Sprites? sprites { get; set; }
}

public class Type {
  public int Slot { get; set; }
  [JsonPropertyName("type")]
  public Ability? _Type { get; set; }
}

public class Ability {
  public string? Name { get; set; }
  public string? Url { get; set; }
}

public class Sprites {
  [JsonPropertyName("front_default")]
  public string? FrontFefault { get; set;}
}

