package raindrops

import "strconv"

var raindropSpeak = map[int]string{
	3: "Pling",
	5: "Plang",
	7: "Plong",
}

// Convert will convert a given number to its raindrop speak equivelant.
func Convert(num int) string {
	var out string
	for factor, speak := range raindropSpeak {
		if num%factor == 0 {
			out += speak
		}
	}

	if len(out) == 0 {
		return strconv.Itoa(num)
	}

	return out
}
