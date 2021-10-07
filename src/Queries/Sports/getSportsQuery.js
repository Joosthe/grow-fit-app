export const getSportsQuery = `
{
  data:__type(name: "Sports") {
    sports:enumValues {
      value: name
      label : name
    }
  }
}`;
