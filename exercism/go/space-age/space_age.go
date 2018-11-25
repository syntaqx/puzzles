// Package space provides timing functions for interacting with space ages.
package space

// Planet defines an Enum for the various planets supported
type Planet string

const (
	PlanetEarth   Planet = "Earth"
	PlanetMercury Planet = "Mercury"
	PlanetVenus   Planet = "Venus"
	PlanetMars    Planet = "Mars"
	PlanetJupiter Planet = "Jupiter"
	PlanetSaturn  Planet = "Saturn"
	PlanetUranus  Planet = "Uranus"
	PlanetNeptune Planet = "Neptune"
)

const earthYear float64 = 31557600 // seconds

var orbitalPeriods = map[Planet]float64{
	PlanetEarth:   1.0,
	PlanetMercury: 0.2408467,
	PlanetVenus:   0.61519726,
	PlanetMars:    1.8808158,
	PlanetJupiter: 11.862615,
	PlanetSaturn:  29.447498,
	PlanetUranus:  84.016846,
	PlanetNeptune: 164.79132,
}

// Age will determine the age in years for amount of time in seconds on a planet
func Age(seconds float64, planet Planet) float64 {
	if period, ok := orbitalPeriods[planet]; ok {
		yearInSeconds := earthYear * period
		return seconds / yearInSeconds
	}

	return 0
}
