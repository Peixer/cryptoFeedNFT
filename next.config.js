module.exports = {
  images: {
    domains: [
      "res.cloudinary.com",
      "scontent.cdninstagram.com",
      "cdninstagram.com",
      "replicate.delivery"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "**.replicate.delivery",
      },
    ],
  },
};