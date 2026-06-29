const PRIORITY = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getTopNotifications = (notifications, limit = 10) => {
  return [...notifications]
    .sort((a, b) => {
      const p1 = PRIORITY[a.Type] || 0;
      const p2 = PRIORITY[b.Type] || 0;

      if (p1 !== p2) {
        return p2 - p1;
      }

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, limit);
};