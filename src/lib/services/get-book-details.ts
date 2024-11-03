import type { Book, GetBookMessage } from '../../app.types';

export const getBookDetailsFromContentScript = async (): Promise<Book | undefined> => {
	try {
		const [tab] = await chrome.tabs.query({
			active: true,
			lastFocusedWindow: true,
		});

		const message: GetBookMessage = {
			getBookDetails: true,
		};

		return await chrome.tabs.sendMessage(tab.id ?? 0, message);
	} catch (error) {
		console.log(error);
	}
};
