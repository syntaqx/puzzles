// Package gigasecond provides utility functions for dealing with Gigaseconds.
package gigasecond

import "time"

// Gigasecond represents a time.Gigasecond (10^9 (1,000,000,000) seconds).
const Gigasecond = time.Second * 1e9

// AddGigasecond will add a Gigasecond value to the time given.
func AddGigasecond(t time.Time) time.Time {
	return t.Add(Gigasecond)
}
