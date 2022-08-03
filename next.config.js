module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/assets/JorgePasco_Resume.pdf',
        permanent: true,
      },
    ];
  },
};
