export default function getSum(prices) {
  return prices.reduce((sum,i) => sum + i );
}