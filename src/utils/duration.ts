const MONTH_MAP: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

function parseDate(dateStr: string, isEnd: boolean): Date {
  if (dateStr.toLowerCase() === 'present') return new Date();

  // "Mon YYYY" format (e.g. "Apr 2025", "Dec 2025")
  const monthYearMatch = dateStr.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (monthYearMatch) {
    const month = MONTH_MAP[monthYearMatch[1].toLowerCase().slice(0, 3)] ?? 0;
    return new Date(parseInt(monthYearMatch[2]), month);
  }

  // Year only (e.g. "2021") — Jan for start, Dec for end
  const year = parseInt(dateStr);
  if (!isNaN(year)) {
    return isEnd ? new Date(year, 11) : new Date(year, 0);
  }

  return new Date();
}

export function calculateDuration(
  roles: { startDate: string; endDate: string }[]
): string {
  if (roles.length === 0) return '';

  let earliest = new Date(9999, 0);
  let latest = new Date(0);

  for (const role of roles) {
    const start = parseDate(role.startDate, false);
    const end = parseDate(role.endDate, true);
    if (start < earliest) earliest = start;
    if (end > latest) latest = end;
  }

  const totalMonths =
    (latest.getFullYear() - earliest.getFullYear()) * 12 +
    (latest.getMonth() - earliest.getMonth());

  if (totalMonths < 1) return '< 1 mo';

  if (totalMonths < 12) {
    return `${totalMonths} mo${totalMonths !== 1 ? 's' : ''}`;
  }

  const years = Math.floor(totalMonths / 12);
  const remaining = totalMonths % 12;

  if (remaining <= 2) {
    return `${years} yr${years !== 1 ? 's' : ''}`;
  }

  return `${years}+ yr${years !== 1 ? 's' : ''}`;
}
