package grains

import (
	"errors"
	"math"
)

// ErrOutofBounds is returned when processing a number outside of the bounds of
// a chessboard.
var ErrOutofBounds = errors.New("Out of bounds")

// Square function to calculate how many grains were on each square
func Square(input int) (uint64, error) {
	if input < 1 || input > 64 {
		return 0, ErrOutofBounds
	}
	return uint64(math.Pow(2, float64(input-1))), nil
}

// Total function to calculate the total number of grains on all squares of a
// chessboard.
func Total() uint64 {
	return 1<<64 - 1
}

// TotalSquareCalc is a function that calculates the total number of grains on
// all squares of a chessboard, using the Square function.
func TotalSquareCalc() uint64 {
	var total uint64
	for i := 1; i <= 64; i++ {
		sum, _ := Square(i)
		total += sum
	}
	return total
}
