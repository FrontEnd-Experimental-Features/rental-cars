export interface LocationData {
  [state: string]: string[];
}

export const locations: LocationData = {
  "California": ["Los Angeles", "San Francisco", "San Diego"],
  "New York": ["New York City", "Buffalo", "Albany"],
  "Texas": ["Houston", "Austin", "Dallas"],
  "Florida": ["Miami", "Orlando", "Tampa"],
  "Illinois": ["Chicago", "Springfield", "Peoria"],
  "Arizona": ["Phoenix", "Tucson", "Flagstaff"]
};
