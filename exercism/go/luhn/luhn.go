package luhn

import (
	"regexp"
	"strings"
)

// Valid determines whether a given argument is valid with the Luhn algorithm.
func Valid(s string) bool {
	s = strings.Replace(s, " ", "", -1)
	if len(s) <= 1 {
		return false
	}

	if !isValidNumber(s) {
		return false
	}

	var alter bool
	var checksum int

	for pos := len(s) - 1; pos > -1; pos-- {
		digit := int(s[pos] - 48)
		if alter {
			digit = digit * 2
			if digit > 9 {
				digit = (digit % 10) + 1
			}
		}
		alter = !alter
		checksum += digit
	}

	return checksum%10 == 0
}

// isValidNumber determines whetheer an input string is at least 1 digit, and
// only contains digit characters.
func isValidNumber(s string) bool {
	return regexp.MustCompile(`^[[:digit:]]*$`).MatchString(s)
}
