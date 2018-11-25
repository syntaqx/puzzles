package scrabble

import "strings"

var scoreTable = map[int][]rune{
	1:  []rune{'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'},
	2:  []rune{'D', 'G'},
	3:  []rune{'B', 'C', 'M', 'P'},
	4:  []rune{'F', 'H', 'V', 'W', 'Y'},
	5:  []rune{'K'},
	8:  []rune{'J', 'X'},
	10: []rune{'Q', 'Z'},
}

// Score calculates the scrabble score for a given word
func Score(word string) int {
	var score int

	for _, l := range strings.ToUpper(word) {
		for points, table := range scoreTable {
			if containsLetter(l, table) {
				score += points
			}
		}
	}

	return score
}

func containsLetter(letter rune, table []rune) bool {
	for _, x := range table {
		if x == letter {
			return true
		}
	}
	return false
}
