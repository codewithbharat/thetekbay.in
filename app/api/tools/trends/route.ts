import { NextResponse } from "next/server";
import puppeteer from "puppeteer";


interface ScrapedData {
  index: number;
  text: string;
}
export async function GET() {
  try {
    const url = "https://trends.google.com/trending?geo=US&hl=en-GB&category=18&hours=24"; // Change to your target website
    const targetClass = ".mZ3RIc"; // Replace with the actual class name

    // Launch Puppeteer
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Navigate to the URL
    await page.goto(url, { waitUntil: "networkidle2" });

    // Extract text from the target class
    const extractedText: ScrapedData[] = await page.evaluate((targetClass) => {
      const elements = document.querySelectorAll(targetClass);
      return Array.from(elements).map((el, index) => ({
        index,
        text: (el as HTMLElement).innerText.trim(),
      }));
    }, targetClass);

    await browser.close();
    return NextResponse.json(extractedText, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
