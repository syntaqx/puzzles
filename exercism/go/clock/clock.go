package clock

import "fmt"

// Clock implemnets a 24 hour clock that handles time, without dates.
type Clock struct {
	hours   int
	minutes int
}

// New initializes a new Clock
func New(hours, minutes int) Clock {
	hours, minutes = getTime(hours, minutes)
	return Clock{
		hours:   hours,
		minutes: minutes,
	}
}

// Add appends a number of minutes to the current clock.
func (c Clock) Add(minutes int) Clock {
	c.hours, c.minutes = getTime(c.hours, c.minutes+minutes)
	return c
}

// Subtract removes a number of minutes from the current clock
func (c Clock) Subtract(minutes int) Clock {
	return c.Add(-minutes)
}

// String implements the Stringer interface, given the current time as a string.
func (c Clock) String() string {
	return fmt.Sprintf("%02d:%02d", c.hours, c.minutes)
}

func getTime(h, m int) (int, int) {
	minutes := m % 60
	if minutes < 0 {
		minutes += 60
		h--
	}

	hours := (h + (m / 60)) % 24
	if hours < 0 {
		hours += 24
	}

	return hours, minutes
}
