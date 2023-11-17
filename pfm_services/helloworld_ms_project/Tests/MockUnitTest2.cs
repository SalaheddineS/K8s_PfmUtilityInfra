using Xunit;
using helloworld_ms.Classes;

public class CalculatorTests
{
    [Fact]
    public void Add_ReturnsCorrectSum()
    {
        // Arrange
        Calculator calculator = new Calculator();

        // Act
        int result = calculator.Add(3, 7);

        // Assert
        Assert.Equal(10, result);
    }

    [Fact]
    public void Subtract_ReturnsCorrectDifference()
    {
        // Arrange
        Calculator calculator = new Calculator();

        // Act
        int result = calculator.Subtract(10, 4);

        // Assert
        Assert.Equal(6, result);
    }

    [Fact]
    public void Multiply_ReturnsCorrectProduct()
    {
        // Arrange
        Calculator calculator = new Calculator();

        // Act
        int result = calculator.Multiply(5, 3);

        // Assert
        Assert.Equal(15, result);
    }

    [Fact]
    public void Divide_ReturnsCorrectQuotient()
    {
        // Arrange
        Calculator calculator = new Calculator();

        // Act
        int result = calculator.Divide(8, 2);

        // Assert
        Assert.Equal(4, result);
    }

    [Fact]
    public void Divide_ByZero_ThrowsArgumentException()
    {
        // Arrange
        Calculator calculator = new Calculator();

        // Act and Assert
        Assert.Throws<ArgumentException>(() => calculator.Divide(10, 0));
    }
}
