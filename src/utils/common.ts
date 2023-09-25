export const buildUrl = (
  params: Record<string, string | number | null>
): string => {
  const filteredParams = Object.entries(params)
    .filter(([_, value]) => value !== null)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return filteredParams ? `?${filteredParams}` : '';
};
