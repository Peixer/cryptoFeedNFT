module.exports = {
  images: {
    domains: [
      "res.cloudinary.com",
      "scontent.cdninstagram.com",
      "cdninstagram.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
    ],
  },
};
