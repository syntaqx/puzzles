package letter

// FreqMap contains a map of all frequencies for a given string
type FreqMap map[rune]int

// Frequency determines the frequency of characters in a given string
func Frequency(s string) FreqMap {
	m := FreqMap{}
	for _, r := range s {
		m[r]++
	}
	return m
}

// ConcurrentFrequency performs Frequency in parellel for given texts
func ConcurrentFrequency(strings []string) FreqMap {
	ch := make(chan FreqMap)
	m := FreqMap{}
	for _, s := range strings {
		go func(s string) {
			ch <- Frequency(s)
		}(s)
	}
	for range strings {
		for r, c := range <-ch {
			m[r] += c
		}
	}
	return m
}
