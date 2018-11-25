package hamming

import "errors"

// Distance calculates the hamming distance of two given strings
func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return -1, errors.New("Two inputs cannot be different lengths")
	}

	var distance int

	for i := range a {
		if a[i] != b[i] {
			distance++
		}
	}

	return distance, nil
}
