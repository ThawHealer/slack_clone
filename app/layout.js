import '@/ui/global.css';

export const metadata = {
  title: {
    template: '%s | Slack Clone',
    default: 'Slack Clone',
  },
  description: 'For interview',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}