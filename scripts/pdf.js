import puppeteer from 'puppeteer';

(async () => {
	const browser = await puppeteer.launch({
		headless: true
	});

	const page = await browser.newPage();

	await page.goto('http://localhost:5173', {
		waitUntil: 'networkidle0'
	});
	await page.setViewport({ width: 681, height: 964 });

	await page.pdf({
		path: 'cv.pdf',
		printBackground: true,
		width: '681px',
		height: '964px'
	});

	await page.goto('http://localhost:5173/en', {
		waitUntil: 'networkidle0'
	});
	await page.setViewport({ width: 681, height: 964 });

	await page.pdf({
		path: 'cv-en.pdf',
		printBackground: true,
		width: '681px',
		height: '964px'
	});

	await browser.close();
})();
