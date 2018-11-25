package isogram

import (
	"strings"
	"unicode"
)

// IsIsogram determines whether a given string is an isogram
func IsIsogram(s string) bool {
	s = strings.ToLower(s)
	seen := make(map[rune]bool)
	for _, r := range s {
		if !unicode.IsLetter(r) {
			continue
		}

		if seen[r] {
			return false
		}

		seen[r] = true
	}

	return true
}
