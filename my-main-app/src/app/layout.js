import Header from "./components/Header";
import "./styles/global.css";
// src/app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
