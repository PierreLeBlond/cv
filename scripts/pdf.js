import puppeteer from 'puppeteer';

(async () => {
	const browser = await puppeteer.launch({
		headless: true
	});

	const page = await browser.newPage();

	await page.goto('http://localhost:5173', {
		waitUntil: 'networkidle0'
	});
	await page.setViewport({ width: 631, height: 893 });

	await page.pdf({
		path: 'cv-en.pdf',
		printBackground: true,
		width: '631px',
		height: '893px'
	});

	await page.goto('http://localhost:5173/fr', {
		waitUntil: 'networkidle0'
	});
	await page.setViewport({ width: 631, height: 893 });

	await page.pdf({
		path: 'cv.pdf',
		printBackground: true,
		width: '631px',
		height: '893px'
	});

	await browser.close();
})();
