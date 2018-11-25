// Package twofer provides utility functions for dealing with Two-fers
package twofer

import "fmt"

const shareWithFormat = "One for %s, one for me."

// ShareWith will give you the corresponding two-fer string for a given person.
func ShareWith(name string) string {
	if len(name) == 0 {
		name = "you"
	}

	return fmt.Sprintf(shareWithFormat, name)
}
