export default function formatDate(dateString) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
    // hour12: true, // or false for 24-hour format
  }
  return new Date(dateString).toLocaleString('en-US', options)
}
