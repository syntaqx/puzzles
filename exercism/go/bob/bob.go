// Package bob allows interacting with Bob, the lackadaisical teenager.
package bob

import (
	"strings"
)

// Hey addresses Bob with a remark.
func Hey(remark string) string {
	remark = strings.TrimSpace(remark)

	// He says 'Fine. Be that way!' if you address him without actually saying
	if len(remark) == 0 {
		return "Fine. Be that way!"
	}

	// Simple determinations on what kind of remark this is.
	isQuestion := remark[len(remark)-1:] == "?"
	isYelling := remark == strings.ToUpper(remark) && remark != strings.ToLower(remark)

	// Are they yelling at us?
	if isYelling {
		// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.
		if isQuestion {
			return "Calm down, I know what I'm doing!"
		}

		// Bob answers 'Woah, chill out!' if you yell at him
		return "Whoa, chill out!"
	}

	// Bob answers 'Sure.' if you ask him a question.
	if isQuestion {
		return "Sure."
	}

	// He answers 'Whatever.' to anything else.
	return "Whatever."
}
