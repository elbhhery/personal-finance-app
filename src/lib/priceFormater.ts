export default function priceFormat(price: number): string {
  const Formatted = price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 20,
  });
  return `$ ${Formatted}`;
}
