export default function RemoveDups (arr) {
  return arr.filter((v, i) => arr.indexOf(v) === i)
}
