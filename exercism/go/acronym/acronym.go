// Package acronym provides utility functions for creating Acronyms.
package acronym

import (
	"strings"
	"unicode"
)

// Abbreviate converts a phrase into its acronym.
func Abbreviate(s string) string {
	var acronym string
	words := strings.FieldsFunc(s, split)
	for _, word := range words {
		acronym += word[:1]
	}
	return strings.ToUpper(acronym)
}

func split(r rune) bool {
	return !unicode.IsLetter(r)
}
