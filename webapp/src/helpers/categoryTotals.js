// Helper function for filtering categories and their total amount
export default function categoryTotals (data, category) {
  const filteredCategory = data.filter(obj => obj.category === category)

  let total = 0

  for (let obj of filteredCategory) {
    total += obj.amount
  }

  return total
}
