# Simple URL Shortener

A lightweight client-side URL shortener that stores URL mappings in the browser’s localStorage. No backend required.

## Features

- Shorten long URLs into short codes.
- Store URL mappings locally in the browser.
- Redirect automatically when visiting a short URL with the code.
- Copy shortened URL to clipboard with one click.
- Works entirely in the browser with no server.

## How to Use

1. Open the `index.html` file in a modern browser.
2. Enter a long URL into the input box.
3. Click the **Shorten** button.
4. Your short URL will be displayed with a clickable link and a copy button.
5. Visit the short URL to be redirected to the original long URL.

## How It Works

- When you shorten a URL, it generates a short code and stores the mapping in localStorage.
- When you visit the page with `?code=SHORTCODE` in the URL, the script looks up the original URL and redirects you.
- If the code is invalid or missing, it shows an error message.

## Limitations

- URLs and mappings are saved only in your browser’s localStorage and won’t sync across devices.
- Clearing browser data will erase all stored URL mappings.
- Not suitable for public or large-scale use, only for personal/local use.

## License

This project is open source and free to use.
