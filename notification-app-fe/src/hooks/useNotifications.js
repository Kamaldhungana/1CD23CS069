import { useEffect, useState } from "react";
import { getNotifications } from "../api/notificationApi";

export const useNotifications = (page, limit, notificationType) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getNotifications(
          page,
          limit,
          notificationType
        );

        setNotifications(data.notifications || []);
        setTotalPages(data.totalPages || 1);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, [page, limit, notificationType]);

  return {
    notifications,
    loading,
    error,
    totalPages,
  };
};