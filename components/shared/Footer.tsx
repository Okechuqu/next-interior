"use client";
import React from "react";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-black text-white underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="bg-gray-800 w-full rounded-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          Back to Top
        </Button>
      </div>
      <div className="p-4">
        <div className="flex justify-center gap-3 text-sm">
          <Link href="/page/condition-of-use">Condition of Use</Link>
          <Link href="/page/privacy-notice">Privacy Notice</Link>
          <Link href="/page/cookies">Cookies</Link>
        </div>
      </div>
      <div className="flex justify-center text-sm">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
      </div>
      <div className="mt-8 flex justify-center text-sm text-gray-400">
        <p>
          This website is not affiliated with or endorsed by any of the brands
          mentioned. All trademarks and copyrights are the property of their
          respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
