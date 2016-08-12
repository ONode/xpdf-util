# PDF-UTIL
pdf-util is a tool to extract text from pdf. for the moment not support ocr scannig to extract text only works for searchable pdf files. This package doesn't have nodejs dependencies.

[![Build Status](https://travis-ci.org/onode/xpdf-util.png)](https://travis-ci.org/onode/xpdf-util)

## Installation
=======
To install the module.
`npm install pdf-util`

You need install the next tools to use this module

- pdftotext
    - pdftotext is used to extract text out of searchable pdf documents
- pdfinfo
    - pdfinfo is used to obtain the info of pdf documents

### OSX
To begin on OSX, first make sure you have the homebrew package manager installed.


**pdftotext** is included as part on the xpdf utilities library. **xpdf** can be installed via homebrew
```bash
brew install xpdf
```

### Ubuntu

**pdftotext** is included in the **poppler-utils** library. To installer poppler-utils execute

```bash
apt-get install poppler-utils
```

### Heroku Buildpack

For those who are using heroku VM, you will need to use the buildpack to get the job done.
Setups:

1. add buildpack on the config for https://github.com/ONode/heroku-buildpack-xpdf
2. manually adding the `.xpdfrc` file in the main project folder.
3. edit the languages needed in the file `.xpdfrc`
4. restart and deploy your dyno


## Usage
=====================

### PDF Info

Obtain info from pdf file
```javascript
var pdfUtil = require('pdf-util');
var pdf_path = "absolute_path/to/pdf_file.pdf";

pdfUtil.info(pdf_path, function(err, info) {
    if (err) throw(err);
    console.log(info);
});
```

It's retrieve an object with the data info from the pdf file

```json
{
  "title": "some title",
  "subject": "TeX output 2003.10.17:1908",
  "author": "Fernando Hernandez",
  "creator": "creator name",
  "producer": "Acrobat Distiller 4.0 for Windows",
  "creationdate": 1066428670000,
  "moddate": 1066428687000,
  "tagged": "no",
  "form": "none",
  "pages": 8,
  "encrypted": "no",
  "page_size": "612 x 792 pts (letter)",
  "file_size": "28695 bytes",
  "optimized": "yes",
  "pdf_version": 1.2
}
```

### PDF Text extract

You can extract text by a range of pages given an option object with **from** and **to** properties, or simply omit this option to extract all text from the pdf file


```javascript
var pdfUtil = require('pdf-util');
var pdf_path = "absolute_path/to/pdf_file.pdf";

//option to extract text from page 0 to 10

var option = {
    customwork : function(dateline){  return ... your code here },
    new_paragraph: false,
    remove_space_asian_character: false,
    from: 0,
    to: 10
};


pdfUtil.pdfToText(upload.path, option, function(err, data) {
  if (err) throw(err);
  console.log(data); //print text    
});

//Omit option to extract all text from the pdf file
pdfUtil.pdfToText(upload.path, function(err, data) {
  if (err) throw(err);
  console.log(data); //print all text    
});
```
### Custome processing work
There will be some extra works involving from decoding the line from the PDF pages. There we have the custom job available for decoding.

`option.customwork` is the function for user to make their regex on operations

## Tests
=======
To test that your system satisfies the needed dependencies and that module is functioning correctly execute the command in the pdf-util module folder
```
cd <project_root>/node_modules/pdf-util
npm test
```
