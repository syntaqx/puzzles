package diffsquares

// SquareOfSums will find the square of the sum of a given range of numbers.
func SquareOfSums(n int) int {
	sum := n * (n + 1) / 2
	return sum * sum
}

// SumOfSquares will find the sum of a given range of numbers, each squared.
func SumOfSquares(n int) int {
	var sum int
	for i := 1; i <= n; i++ {
		sum += i * i
	}
	return sum
}

// Difference will find the difference of the SquareOfSums and SumOfSquares
func Difference(n int) int {
	return SquareOfSums(n) - SumOfSquares(n)
}
