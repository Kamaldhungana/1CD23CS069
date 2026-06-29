import axios from "axios";

const API =
  "http://4.224.186.213/evaluation-service/notifications";

export const getNotifications = async (
    page = 1,
    limit = 10,
    notificationType = ""
) => {

    const token = localStorage.getItem("token");

    const response = await axios.get(API, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            page,
            limit,
            notification_type: notificationType || undefined,
        },
    });

    return response.data;
};