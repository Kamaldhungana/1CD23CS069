// Mock API

const mockNotifications = [
  {
    ID: "1",
    Type: "Placement",
    Message: "Microsoft Hiring Drive",
    Timestamp: "2026-04-22 17:51:18",
  },
  {
    ID: "2",
    Type: "Result",
    Message: "Mid Sem Results Published",
    Timestamp: "2026-04-22 17:50:42",
  },
  {
    ID: "3",
    Type: "Event",
    Message: "Tech Fest 2026",
    Timestamp: "2026-04-22 17:49:54",
  },
  {
    ID: "4",
    Type: "Placement",
    Message: "Amazon Off Campus",
    Timestamp: "2026-04-22 17:48:00",
  },
  {
    ID: "5",
    Type: "Event",
    Message: "Farewell Party",
    Timestamp: "2026-04-22 17:47:30",
  },
  {
    ID: "6",
    Type: "Result",
    Message: "Project Review Results",
    Timestamp: "2026-04-22 17:46:15",
  },
  {
    ID: "7",
    Type: "Placement",
    Message: "Infosys Recruitment",
    Timestamp: "2026-04-22 17:45:30",
  },
  {
    ID: "8",
    Type: "Event",
    Message: "Coding Contest",
    Timestamp: "2026-04-22 17:44:20",
  },
  {
    ID: "9",
    Type: "Placement",
    Message: "Google Internship",
    Timestamp: "2026-04-22 17:43:10",
  },
  {
    ID: "10",
    Type: "Result",
    Message: "External Exam Results",
    Timestamp: "2026-04-22 17:42:00",
  },
  {
    ID: "11",
    Type: "Placement",
    Message: "Adobe Hiring",
    Timestamp: "2026-04-22 17:41:00",
  },
  {
    ID: "12",
    Type: "Event",
    Message: "Hackathon",
    Timestamp: "2026-04-22 17:40:00",
  },
];

export const getNotifications = async (
  page = 1,
  limit = 10,
  notificationType = ""
) => {
  let filtered = [...mockNotifications];

  // Filter
  if (notificationType) {
    filtered = filtered.filter(
      (item) => item.Type === notificationType
    );
  }

  // Pagination
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    notifications: filtered.slice(start, end),
    totalPages: Math.ceil(filtered.length / limit),
  };
};