import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function VietstaticPage() {
  const instagramProfileUrl = "https://www.instagram.com/vietstatic/";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Vietstatic</title>
        <meta name="description" content="Vietstatic - A Next.js Page" />
      </Head>

      <main className="px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Vietstatic</h1>
      </main>

      <footer className="mt-8 text-sm text-gray-500">
        <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src="/instagram-logo.png"
            alt="Instagram"
            width={32} 
            height={32} 
            className="inline-block mr-2"
          />
          Follow us on Instagram
        </a>

        <p>Made with ❤️ by Anthony Tran</p>
        <p>v1</p>
      </footer>
    </div>
  );
}
