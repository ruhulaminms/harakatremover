# Arabic Harakat Remover

## Overview
This JavaScript utility automatically removes all Arabic Harakat (diacritics) from pasted text in input fields and textareas on your Arabic website.

## Features
- **Automatic Harakat Removal**: Strips diacritics from any pasted Arabic text.
- **Supports Input Fields & Textareas**: Works seamlessly across all `<input>` and `<textarea>` elements.
- **Lightweight & Efficient**: Minimal JavaScript for fast execution.

## Installation

1. **Include the Script in Your HTML File**  
   Add the following line before the closing `</body>` tag:
   ```html
   <script src="Harakat-Remover.js"></script>
   ```

## How It Works
1. Users paste text into an input field or textarea.
2. The script intercepts the paste event, removes Arabic Harakat, and inserts the cleaned text.

## Supported Arabic Harakat
This script removes the following diacritics:
- Fatha (َ), Damma (ُ), Kasra (ِ)
- Fathatan (ً), Dammatan (ٌ), Kasratan (ٍ)
- Shadda (ّ), Sukun (ْ)
- Other Quranic marks and additional diacritics.

## Example Usage
```html
<input type="text" placeholder="Paste Arabic text here">
<textarea placeholder="Paste Arabic text here"></textarea>

<script src="Harakat-Remover.js"></script>
```

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contributing
Pull requests are welcome! Feel free to improve the script or suggest enhancements.

---

⭐ **If you find this useful, give it a star on GitHub!** ⭐
