public class GenerateNumbers
{
  public static List<int> GetRandomNumber()
  {
    Random random = new Random();
    List<int> listNumbers = new List<int>();
    int number;
    for (int i = 0; i < 16; i++)
    {
      do
      {
        number = random.Next(1, 151);
      } while (listNumbers.Contains(number));
      listNumbers.Add(number);
    }

    return listNumbers;
  }
}