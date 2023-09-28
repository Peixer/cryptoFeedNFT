module.exports = {
  images: {
    domains: [
      "res.cloudinary.com",
      "scontent.cdninstagram.com",
      "cdninstagram.com",
      "pbxt.replicate.delivery"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
    ],
  },
};
