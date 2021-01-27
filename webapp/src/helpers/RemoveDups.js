// Helper function for removing duplicates from of user from dummyData arrays
export default function RemoveDups (arr) {
  return arr.filter((v, i) => arr.indexOf(v) === i)
}
