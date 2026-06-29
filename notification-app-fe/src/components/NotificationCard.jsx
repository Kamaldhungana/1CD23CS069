import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

export default function NotificationCard({
  notification,
}) {
  const viewed =
    JSON.parse(localStorage.getItem("viewed")) || [];

  const isRead = viewed.includes(notification.ID);

  const handleClick = () => {
    if (!isRead) {
      localStorage.setItem(
        "viewed",
        JSON.stringify([
          ...viewed,
          notification.ID,
        ])
      );

      window.location.reload();
    }
  };

  return (
    <Card
      sx={{
        mb: 2,
        cursor: "pointer",
        bgcolor: isRead
          ? "#eeeeee"
          : "#ffffff",
      }}
      onClick={handleClick}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
        >
          <Typography
            fontWeight={
              isRead ? "normal" : "bold"
            }
          >
            {notification.Message}
          </Typography>

          <Chip
            label={notification.Type}
            color={
              notification.Type ===
              "Placement"
                ? "success"
                : notification.Type ===
                  "Result"
                ? "primary"
                : "warning"
            }
          />
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}