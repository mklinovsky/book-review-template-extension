import type { GetBookMessage } from '../app.types';

const getBookDetails = () => {
    const url = window.location.href;
    const title = document.querySelector('.BookPageTitleSection__title h1')?.textContent;
    const author = document.querySelector('.ContributorLink')?.textContent;
    const thumbnailUrl = (document.querySelector('.BookCover__image img') as HTMLImageElement)?.src;
    const genres = [
        ...document.querySelectorAll(
            '.BookPageMetadataSection__genres .BookPageMetadataSection__genreButton .Button__labelItem',
        ),
    ]
        .map(element => element.textContent)
        .slice(0, 7);

    return {
        title,
        author,
        url,
        thumbnailUrl,
        genres,
    };
};

chrome.runtime.onMessage.addListener((message: GetBookMessage, sender, sendResponse) => {
    if (message.getBookDetails) {
        sendResponse(getBookDetails());
    }
});
