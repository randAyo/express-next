const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://test-project-47pbl4wl3.vercel.app/';
