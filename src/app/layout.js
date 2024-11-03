import './globals.css';

export const metadata = {
  title: 'Event Scheduler',
  description: 'A daily event scheduler application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}