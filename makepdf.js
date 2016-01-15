var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./html/erls4d.html', 'utf8');
var options = {
    format: 'A4',
    "type": "pdf",             // allowed file types: png, jpeg, pdf
    "quality": "75"
};

pdf.create(html, options).toFile('./html/erls4d.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
});

