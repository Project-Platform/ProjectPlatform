const getServerUrl = () => {
  return process.env.SERVER_URL || "http://localhost:3000";
};

export { getServerUrl };
