const priority = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getTopNotifications = (
  notifications,
  limit = 10
) => {
  return [...notifications]
    .sort((a, b) => {
      const p1 = priority[a.Type];
      const p2 = priority[b.Type];

      if (p1 !== p2) {
        return p2 - p1;
      }

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    })
    .slice(0, limit);
};