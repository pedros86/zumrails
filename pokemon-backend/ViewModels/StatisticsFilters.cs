using System.ComponentModel.DataAnnotations;

public enum SortBy {
  Wins,
  Losses,
  Ties
}

public enum Direction {
  Ascendent,
  Descendent
}

public class StatisticsFilters {
  [Required]
  public SortBy? SortBy { get; set; }

  [Required]
  public Direction? SortDirection { get; set; }
}