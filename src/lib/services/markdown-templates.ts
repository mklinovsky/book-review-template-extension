import type { Book } from '../../app.types';

const fictionBookTemplate = `
## 📖 What it is about?

## 🔍 How I discovered it

## 💭 Thoughts
  
### ❓What I liked

### ❓What I didn't like

## 🥰 Who would like it?

`;

const nonFictionBookTemplate = `
## 📖 What it is about?

## 🤔 Impressions

## 🍀 Ideas I can apply to my life

### ❓ Why should I use this?

### ❓ How could I use this?

## ✍️ Top 3 quotes

## 📘 Summary + Notes

`;

const createFrontMatter = (book: Book) => {
	const { title, author, genres, thumbnailUrl, url } = book;
	return `
---
title: '${title}'
author: '${author}'
tags: [${genres.map(genre => `'${genre}'`).join(', ')}]
publishedOn: '${new Date().toLocaleDateString()}'
goodreadsUrl: '${url}'
coverUrl: '${thumbnailUrl}'
rating:
---
`;
};

export const getMarkdownTemplate = (book: Book | undefined) => {
	if (!book) {
		return '';
	}

	const frontMatter = createFrontMatter(book);

	const { genres } = book;
	const template = genres.includes('Fiction') ? fictionBookTemplate : nonFictionBookTemplate;

	return `${frontMatter.trim()}${template}`;
};
