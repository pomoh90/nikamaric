import './globals.css';

export const metadata = {
  title: 'Nika Maric - Luxury Escort',
  description: 'Experience elegance and companionship with Nika Maric, your exclusive luxury escort.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}