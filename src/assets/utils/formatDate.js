const dateFormatter = new Intl.DateTimeFormat("it-IT", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export default function formatDate(date) {
  return dateFormatter.format(new Date(`${date}T00:00:00`));
}
