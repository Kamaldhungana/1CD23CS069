import { useState } from "react";

import {
  Box,
  Typography,
  CircularProgress,
  Pagination,
} from "@mui/material";

import NotificationFilter from "../components/NotificationFilter";
import NotificationCard from "../components/NotificationCard";

import { useNotifications } from "../hooks/useNotifications";
import { getTopNotifications } from "../utils/priority";

export default function NotificationsPage() {

  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");

  const {
    notifications,
    loading,
    error,
    totalPages,
  } = useNotifications(page, 10, filter);

  const priorityNotifications =
    getTopNotifications(notifications);

  return (

    <Box
      sx={{
        maxWidth: 700,
        margin: "auto",
        mt: 5,
        p: 2,
      }}
    >

      <Typography
        variant="h4"
        mb={3}
      >
        Campus Notifications
      </Typography>

      <NotificationFilter
        filter={filter}
        onChange={(value) => {
          setFilter(value);
          setPage(1);
        }}
      />

      <Box mt={3}>

        {loading ? (

          <CircularProgress />

        ) : error ? (

          <Typography color="error">
            {error}
          </Typography>

        ) : (

          priorityNotifications.map((notification) => (

            <NotificationCard
              key={notification.ID}
              notification={notification}
            />

          ))

        )}

      </Box>

      <Box
        display="flex"
        justifyContent="center"
        mt={4}
      >

        <Pagination
          page={page}
          count={totalPages}
          onChange={(e, value) => setPage(value)}
        />

      </Box>

    </Box>
  );
}